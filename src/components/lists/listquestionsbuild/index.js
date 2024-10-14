import React, { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SearchFilterControl from '../../searchfiltercontrol';

const ListQuestionsBuild = ({ onSelectItem, updatedQuestion, questions }) => {
    const createListItem = useCallback((item) => ({
        id: item.id || uuidv4(),
        type: item.section ? 'Section' : 'Question',
        display_text: item.display_text || '',
        subQuestions: item.subQuestions ? item.subQuestions.map(createListItem) : [],
        ...item
    }), []);

    const initialQuestions = questions.filter(item => !item.parent).map(section => ({
        ...section,
        subQuestions: questions.filter(q => q.parent === section.id).map(createListItem)
    }));

    const [localQuestions, setLocalQuestions] = useState(initialQuestions);
    const [filteredQuestions, setFilteredQuestions] = useState(initialQuestions);
    const [activeItemId, setActiveItemId] = useState(null);

    useEffect(() => {
        if (updatedQuestion) {
            const updateItems = (items) => items.map(item => {
                if (item.id === updatedQuestion.id) {
                    return updatedQuestion;
                }
                if (item.subQuestions) {
                    return {
                        ...item,
                        subQuestions: updateItems(item.subQuestions)
                    };
                }
                return item;
            });

            const updatedQuestions = updateItems(localQuestions);
            setLocalQuestions(updatedQuestions);
            setFilteredQuestions(updatedQuestions);
        }
    }, [updatedQuestion, localQuestions]);

    useEffect(() => {
        const initialQuestions = questions.filter(item => !item.parent).map(section => ({
            ...section,
            subQuestions: questions.filter(q => q.parent === section.id).map(createListItem)
        }));
        setLocalQuestions(initialQuestions);
        setFilteredQuestions(initialQuestions);
    }, [questions, createListItem]);

    const handleAddItem = (id) => {
        const newQuestions = [...localQuestions];

        const addItem = (items) => {
            for (let i = 0; i < items.length; i++) {
                if (items[i].id === id) {
                    items.splice(i + 1, 0, createListItem({}));
                    return true;
                }
                if (addItem(items[i].subQuestions)) {
                    return true;
                }
            }
            return false;
        };

        addItem(newQuestions);
        setLocalQuestions(newQuestions);
        setFilteredQuestions(newQuestions);
    };

    const handleIndentItem = (index, parentIndex = null) => {
        if (parentIndex !== null || index === 0) return;

        const newQuestions = [...localQuestions];
        const item = newQuestions.splice(index, 1)[0];
        newQuestions[index - 1].subQuestions.push(item);
        setLocalQuestions(newQuestions);
        setFilteredQuestions(newQuestions);
    };

    const handleDeindentItem = (index, parentIndex) => {
        if (parentIndex === null) return;

        const newQuestions = [...localQuestions];
        const parentItem = newQuestions[parentIndex];
        const item = parentItem.subQuestions.splice(index, 1)[0];
        newQuestions.splice(parentIndex + 1, 0, item);
        setLocalQuestions(newQuestions);
        setFilteredQuestions(newQuestions);
    };

    const handleDeindentSubItem = (index, parentIndex) => {
        const newQuestions = [...localQuestions];
        const parentItem = findItemByIndex(newQuestions, parentIndex);
        const item = parentItem.subQuestions.splice(index, 1)[0];
        const grandParentItem = findParentItem(newQuestions, parentItem);
        if (grandParentItem) {
            grandParentItem.subQuestions.push(item);
        } else {
            newQuestions.push(item);
        }
        setLocalQuestions(newQuestions);
        setFilteredQuestions(newQuestions);
    };

    const findItemByIndex = (list, indexPath) => {
        let item = null;
        for (const index of indexPath) {
            if (!item) {
                item = list[index];
            } else {
                item = item.subQuestions[index];
            }
        }
        return item;
    };

    const findParentItem = (list, itemToFind) => {
        for (const item of list) {
            if (item.subQuestions.includes(itemToFind)) {
                return item;
            }
            const foundInSubQuestions = findParentItem(item.subQuestions, itemToFind);
            if (foundInSubQuestions) {
                return foundInSubQuestions;
            }
        }
        return null;
    };

    const handleTextChange = (id, newText) => {
        const updateText = (items) => {
            for (let item of items) {
                if (item.id === id) {
                    item.display_text = newText;
                    return;
                }
                updateText(item.subQuestions);
            }
        };

        const newQuestions = [...localQuestions];
        updateText(newQuestions);
        setLocalQuestions(newQuestions);
        setFilteredQuestions(newQuestions);
    };

    const getItemLabel = (indexPath, isMainItem) => {
        if (isMainItem) {
            return `Section ${indexPath[indexPath.length - 1] + 1}:`;
        }
        return `Q ${indexPath[indexPath.length - 1] + 1}:`;
    };

    const handleClick = (item) => {
        console.log("Selected item:", item);
        onSelectItem(item);
        setActiveItemId(item.id); // Set the active item
    };

    const scrollToMatch = (index) => {
        const questionItem = document.querySelector(`.list-builder-item[data-id='${index}']`);
        if (questionItem) {
            questionItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
            console.log('Scrolled to match at index:', index);
        }
    };

    const highlightText = (text, highlight) => {
        if (!highlight) return text;
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return parts.map((part, index) =>
            part.toLowerCase() === highlight.toLowerCase() ? (
                <span key={index} className="highlight">
                    {part}
                </span>
            ) : (
                part
            )
        );
    };

    return (
        <div className='list-wrap'>
            <div className='dyn-list-controls'>
                <SearchFilterControl
                    items={localQuestions}
                    setFilteredItems={setFilteredQuestions}
                    scrollToMatch={scrollToMatch}
                    setHighlightText={highlightText}
                />
            </div>
            <ol>
                {filteredQuestions.map((item, index) => (
                    <ListItem
                        key={item.id}
                        item={item}
                        index={[index]}
                        parentIndex={null}
                        onSelectItem={handleClick}
                        onAddItem={handleAddItem}
                        onIndentItem={handleIndentItem}
                        onDeindentItem={handleDeindentItem}
                        onDeindentSubItem={handleDeindentSubItem}
                        onTextChange={handleTextChange}
                        getItemLabel={getItemLabel}
                        activeItemId={activeItemId} // Pass the active item ID
                    />
                ))}
            </ol>
        </div>
    );
};

const ListItem = ({ item, index, parentIndex, onSelectItem, onAddItem, onIndentItem, onDeindentItem, onDeindentSubItem, onTextChange, getItemLabel, activeItemId }) => {
    const handleAdd = (e) => {
        e.stopPropagation();
        onAddItem(item.id);
    };

    const handleIndent = (e) => {
        e.stopPropagation();
        onIndentItem(index[index.length - 1], parentIndex);
    };

    const handleDeindent = (e) => {
        e.stopPropagation();
        if (parentIndex === null) {
            onDeindentItem(index[0], parentIndex);
        } else {
            onDeindentSubItem(index[index.length - 1], index.slice(0, -1));
        }
    };

    const handleTextChangeLocal = (e) => {
        onTextChange(item.id, e.target.value);
    };

    const handleClick = (e) => {
        e.stopPropagation();
        onSelectItem(item);
    };

    const label = getItemLabel(index, parentIndex === null);
    const textareaClass = parentIndex === null ? 'textarea-main' : 'textarea-indent';
    const containerClass = item.id === activeItemId ? 'input-container active' : 'input-container';

    return (
        <li className="list-builder-item" data-id={item.id} onClick={handleClick}>
            <div className={containerClass}>
                <div className="action-container">
                    <div className="action-container-row">
                        <div className="action-container-button"><button className="r-move-left" disabled={parentIndex === null} onClick={handleDeindent}></button></div>
                        <div className="action-container-button"><button className="r-move-right" disabled={parentIndex !== null} onClick={handleIndent}></button></div>
                    </div>
                    <div className="action-container-row">
                        <div className="action-container-button"><button className="r-drag-handle"></button></div>
                        <div className="action-container-button"><button className="r-add-new" onClick={handleAdd}></button></div>
                    </div>
                </div>
                <label>{label}</label>
                <textarea className={textareaClass} value={item.display_text} onChange={handleTextChangeLocal} placeholder="Enter text here..." />
            </div>
            {item.subQuestions.length > 0 && (
                <ol>
                    {item.subQuestions.map((subItem, subIndex) => (
                        <ListItem
                            key={subItem.id}
                            item={subItem}
                            index={[...index, subIndex]}
                            parentIndex={index}
                            onSelectItem={onSelectItem}
                            onAddItem={onAddItem}
                            onIndentItem={onIndentItem}
                            onDeindentItem={onDeindentItem}
                            onDeindentSubItem={onDeindentSubItem}
                            onTextChange={onTextChange}
                            getItemLabel={getItemLabel}
                            activeItemId={activeItemId} // Pass the active item ID
                        />
                    ))}
                </ol>
            )}
        </li>
    );
};

export default ListQuestionsBuild;

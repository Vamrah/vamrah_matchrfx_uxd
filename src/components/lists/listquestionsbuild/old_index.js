import React, { useState, useEffect, useRef } from 'react';
import SearchFilterControl from '../../searchfiltercontrol';

const ListQuestionsBuild = ({ questions, onSelectQuestion, selectedQuestionIndex }) => {
    const [searchRequirement, setSearchRequirement] = useState('');
    const [searchMode, setSearchMode] = useState('filtering');
    const [filteredQuestions, setFilteredQuestions] = useState(questions);
    const [matchedRequirementsIndices, setMatchedRequirementsIndices] = useState([]);
    const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
    const questionListRef = useRef(null);

    useEffect(() => {
        setFilteredQuestions(questions);
    }, [questions]);

    const handleSearch = (value, mode) => {
        const lowerCaseValue = value.toLowerCase();
        const matches = [];
        const filtered = questions.filter((q, index) => {
            const questionMatch = q.question.toLowerCase().includes(lowerCaseValue);
            const answerMatch = q.sample_answer.toLowerCase().includes(lowerCaseValue);
            if (questionMatch || answerMatch) {
                matches.push(index);
                return true;
            }
            return false;
        });

        if (mode === 'filtering') {
            setFilteredQuestions(filtered);
            setMatchedRequirementsIndices([]);
        } else if (mode === 'jumpTo') {
            setFilteredQuestions(questions);
            setMatchedRequirementsIndices(matches);
            if (matches.length > 0) {
                scrollToMatch(matches[0]);
            }
        }

        setCurrentMatchIndex(0);
        if (value === '') {
            setMatchedRequirementsIndices([]);
        }
    };

    const resetSearch = () => {
        setFilteredQuestions(questions);
        setMatchedRequirementsIndices([]);
        setCurrentMatchIndex(0);
        setSearchRequirement('');
    };

    const scrollToMatch = (index) => {
        const questionItem = questionListRef.current.querySelector(`.question-item[data-index='${index}']`);
        if (questionItem) {
            questionItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const highlightText = (text, highlight) => {
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
        <div>
            <SearchFilterControl
                searchRequirement={searchRequirement}
                setSearchRequirement={setSearchRequirement}
                searchMode={searchMode}
                setSearchMode={setSearchMode}
                handleSearch={handleSearch}
                resetSearch={resetSearch}
                currentMatchIndex={currentMatchIndex}
                setCurrentMatchIndex={setCurrentMatchIndex}
                matchedRequirementsIndices={matchedRequirementsIndices}
                scrollToMatch={scrollToMatch}
            />
            <div id="leftPanel" ref={questionListRef}>
                <div className='list-builder-canvas'>
                    {filteredQuestions.map((item, index) => (
                        <div
                            key={index}
                            className={`qa-builder list-builder-item question-item ${selectedQuestionIndex === index ? 'selected' : ''}`}
                            data-index={index}
                            onClick={() => onSelectQuestion(index)}
                            draggable="true"
                        >
                            <div className="action-container">
                                <div className="action-container-row">
                                    <div className="action-container-button"><button className="r-move-left"></button></div>
                                    <div className="action-container-button"><button className="r-move-right"></button></div>
                                </div>
                                <div className="action-container-row">
                                    <div className="action-container-button"><button className="r-drag-handle"></button></div>
                                    <div className="action-container-button"><button className="r-add-new"></button></div>
                                </div>
                            </div>
                            <div className="indent-req" style={{ width: '0px' }}>
                                <div className="tree-connector"></div>
                            </div>
                            <div className="list-item-part">
                                <div className="list-builder-item-content">
                                    <span className="req">
                                        <div className="textarea-wrapper">
                                            <div className='x-question'>
                                                <textarea
                                                    id="initialReq"
                                                    className="form_control textarea resize-ta question-textarea"
                                                    value={item.question}
                                                    readOnly
                                                    rows={3} // Adjust the number of rows as needed
                                                    placeholder="Enter section heading..."
                                                    maxLength="250"
                                                    style={{ overflow: 'hidden', minHeight: '52px', padding: '5px 30px 5px 5px', height: '50px' }}
                                                />
                                            </div>
                                        </div>
                                    </span>
                                </div>
                                <div className="list-builder-item-extras" style={{ display: 'flex', alignItems: 'flex-end' }}>
                                    <button className="list-builder-item-trash"></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListQuestionsBuild;

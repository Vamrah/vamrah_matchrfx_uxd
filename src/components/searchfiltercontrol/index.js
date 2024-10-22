import React, { useEffect, useState } from 'react';

const SearchFilterControl = ({
    items,
    setFilteredItems,
    scrollToMatch,
    setHighlightText,
    setSearchText // Optional
}) => {
    const [searchRequirement, setSearchRequirement] = useState('');
    const [searchMode, setSearchMode] = useState('filtering');
    const [matchedIndices, setMatchedIndices] = useState([]);
    const [currentMatchIndex, setCurrentMatchIndex] = useState(0);

    useEffect(() => {
        setHighlightText(() => highlightText);
    }, [setHighlightText]);

    const handleSearch = (value, mode) => {
        console.log('handleSearch called with value:', value, 'mode:', mode);
        const lowerCaseValue = value.toLowerCase();
        const matches = [];
        const filtered = items.filter((item, index) => {
            const textMatch = item.display_text?.toLowerCase().includes(lowerCaseValue) ||
                              item.requirement?.toLowerCase().includes(lowerCaseValue) ||
                              item.capability_detail?.toLowerCase().includes(lowerCaseValue) ||
                              item.question?.toLowerCase().includes(lowerCaseValue) ||
                              item.sample_answer?.toLowerCase().includes(lowerCaseValue);
            if (textMatch) {
                matches.push(index);
                return true;
            }
            return false;
        });

        console.log('matches:', matches);

        if (mode === 'filtering') {
            setFilteredItems(filtered);
            setMatchedIndices([]);
        } else if (mode === 'jumpTo') {
            setFilteredItems(items);
            setMatchedIndices(matches);
            if (matches.length > 0) {
                setCurrentMatchIndex(0);
                scrollToMatch(matches[0]);
                console.log('Jump to first match at index:', matches[0]);
            }
        }

        setSearchRequirement(value);
        if (setSearchText) {
            setSearchText(value);
        }
        if (value === '') {
            setMatchedIndices([]);
        }
    };

    const resetSearch = () => {
        console.log('resetSearch called');
        setFilteredItems(items);
        setMatchedIndices([]);
        setCurrentMatchIndex(0);
        setSearchRequirement('');
        if (setSearchText) {
            setSearchText('');
        }
    };

    const handlePrevious = () => {
        console.log('handlePrevious called');
        if (currentMatchIndex > 0) {
            const newIndex = currentMatchIndex - 1;
            setCurrentMatchIndex(newIndex);
            scrollToMatch(matchedIndices[newIndex]);
            console.log('Previous match at index:', newIndex, 'scroll to:', matchedIndices[newIndex]);
        }
    };

    const handleNext = () => {
        console.log('handleNext called');
        if (currentMatchIndex < matchedIndices.length - 1) {
            const newIndex = currentMatchIndex + 1;
            setCurrentMatchIndex(newIndex);
            scrollToMatch(matchedIndices[newIndex]);
            console.log('Next match at index:', newIndex, 'scroll to:', matchedIndices[newIndex]);
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
        <div className="combined-control">
            <input
                type="search"
                id="searchInput"
                placeholder="Search..."
                value={searchRequirement}
                onChange={(e) => {
                    setSearchRequirement(e.target.value);
                    handleSearch(e.target.value, searchMode);
                }}
            />
            <select
                value={searchMode}
                onChange={(e) => {
                    setSearchMode(e.target.value);
                    resetSearch();
                }}
            >
                <option value="filtering">Filter Results</option>
                <option value="jumpTo">Jump To</option>
            </select>
            <button
                className="prev-btn"
                onClick={handlePrevious}
                disabled={searchMode !== 'jumpTo' || matchedIndices.length <= 0 || currentMatchIndex <= 0}
            >
                prev
            </button>
            <button
                className="next-btn"
                onClick={handleNext}
                disabled={searchMode !== 'jumpTo' || matchedIndices.length <= 0 || currentMatchIndex >= matchedIndices.length - 1}
            >
                next
            </button>
        </div>
    );
};

export default SearchFilterControl;

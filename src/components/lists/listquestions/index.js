import React, { useState, useEffect, useRef } from 'react';
import SearchFilterControl from '../../searchfiltercontrol';

const ListQuestions = ({ questions, onSelectQuestion, selectedQuestionIndex }) => {
    const [filteredQuestions, setFilteredQuestions] = useState(questions);
    const [searchText, setSearchText] = useState('');
    const [highlightText, setHighlightText] = useState(() => (text, highlight) => text); // Default function
    const questionListRef = useRef(null);

    useEffect(() => {
        setFilteredQuestions(questions);
    }, [questions]);

    const scrollToMatch = (index) => {
        const questionItem = questionListRef.current.querySelector(`.question-item[data-index='${index}']`);
        if (questionItem) {
            questionItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
            console.log('Scrolled to match at index:', index);
        }
    };

    return (
        <div>
            <SearchFilterControl
                items={questions}
                setFilteredItems={setFilteredQuestions}
                scrollToMatch={scrollToMatch}
                setSearchText={setSearchText}
                setHighlightText={setHighlightText}
            />
            <div id="leftPanel" ref={questionListRef}>
                {filteredQuestions.map((item, index) => (
                    <div
                        key={index}
                        className={`question-item ${selectedQuestionIndex === index ? 'selected' : ''}`}
                        data-index={index}
                        onClick={() => onSelectQuestion(index)}
                    >
                        <div className='qa-selector'>
                            <input type="checkbox" id={`checkbox-${index}`} name={`checkbox-${index}`} />
                        </div>
                        <div className='x-question'>
                            <span className="emphasis">Question:</span> {highlightText(item.question, searchText)}
                        </div>
                        <div className='x-answer'>
                            <span className="emphasis">Answer:</span> {highlightText(item.sample_answer, searchText)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListQuestions;

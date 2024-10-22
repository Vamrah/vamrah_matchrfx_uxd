import React, { useState, useEffect } from 'react';

const QADetailForm = ({ question, updateQuestion }) => {
    const [answer, setAnswer] = useState(question?.sample_answer || '');
    const [sourceContent, setSourceContent] = useState(question?.source_content || '');

    useEffect(() => {
        setAnswer(question?.sample_answer || '');
        setSourceContent(question?.source_content || '');
    }, [question]);

    const handleAnswerChange = (e) => {
        setAnswer(e.target.value);
    };

    const handleSourceContentChange = (e) => {
        setSourceContent(e.target.value);
    };

    const handleUpdateClick = () => {
        updateQuestion(answer, sourceContent);
    };

    const getColorForConfidence = (confidence) => {
        if (confidence < 50) return '#ff4d4d'; // Red
        if (confidence < 75) return '#ffcc00'; // Yellow
        return '#006600'; // Green
    };

    const confidenceLevel = parseFloat(question?.confidence_interval || '0%');
    const strokeDasharray = `${confidenceLevel} ${100 - confidenceLevel}`;
    const color = getColorForConfidence(confidenceLevel);

    return (
        <div className="qa-detail-form">
            <div className="form-group">
                <label htmlFor="question">Question:</label>
                <textarea id="question" rows="2" cols="50" value={question?.question || ''} readOnly></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="type">Question Type:</label>
                <input type="text" id="type" value={question?.type || ''} readOnly />
            </div>
            <div className="form-group" id="optionsContainer" style={{ display: question?.type === "multiple choice" ? "block" : "none" }}>
                <label htmlFor="optionsDropdown">Answer Options:</label>
                <select id="optionsDropdown" value={answer} onChange={handleAnswerChange}>
                    {question?.options && question.options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            </div>
            <div className="form-group" id="yesNoContainer" style={{ display: question?.type === "yes/no" ? "block" : "none" }}>
                <label>Answer Options:</label>
                <label><input type="radio" name="yesno" value="Yes" checked={answer === "Yes"} onChange={handleAnswerChange} /> Yes</label>
                <label><input type="radio" name="yesno" value="No" checked={answer === "No"} onChange={handleAnswerChange} /> No</label>
            </div>
            <div className="form-group">
                <div className="answer-container">
                    <label id="answerLabel" htmlFor="answer">
                        {question ? (
                            <>
                                Answer: <span>{question.answer_source}</span>
                            </>
                        ) : (
                            'Answer:'
                        )}
                    </label>
                    <span id="confidenceInterval" className="confidence-indicator" title={`Confidence Level: ${confidenceLevel}%`}>
                        <svg width="36" height="36" viewBox="0 0 36 36" className="circular-chart">
                            <circle
                                className="circle-bg"
                                stroke="#eee"
                                strokeWidth="5"
                                fill="none"
                                cx="18"
                                cy="18"
                                r="15.9155"
                            />
                            <circle
                                className="circle"
                                stroke={color}
                                strokeWidth="5"
                                strokeDasharray={strokeDasharray}
                                strokeLinecap="round"
                                fill="none"
                                cx="18"
                                cy="18"
                                r="15.9155"
                                transform="rotate(-90 18 18)"
                            />
                            <text x="18" y="20.35" className="percentage" fill={color} fontSize="10" textAnchor="middle">
                                {confidenceLevel}%
                            </text>
                        </svg>
                    </span>
                </div>
                <textarea id="answer" rows="2" cols="50" value={answer} onChange={handleAnswerChange}></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="sourceContent">Source Content:</label>
                <textarea id="sourceContent" rows="2" cols="50" value={sourceContent} onChange={handleSourceContentChange}></textarea>
            </div>
            <button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '36px', border: '0', borderRadius: '5px', background: '#fb5e32', color: '#fff', fontWeight: '700', cursor: 'pointer' }} onClick={handleUpdateClick}>Update</button>
        </div>
    );
};

export default QADetailForm;

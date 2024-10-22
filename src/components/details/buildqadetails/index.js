import React, { useState, useEffect } from 'react';

const DetailsQAX = ({ selectedItem, updateQuestion }) => {
    const [displayText, setDisplayText] = useState('');
    const [qrSource, setQrSource] = useState('');
    const [questionType, setQuestionType] = useState('');
    const [options, setOptions] = useState([]);
    const [sampleAnswer, setSampleAnswer] = useState('');

    useEffect(() => {
        if (selectedItem) {
            console.log('Selected Item in DetailsQAX:', selectedItem);
            setDisplayText(selectedItem.display_text || '');
            setQrSource(selectedItem.qr_source ? selectedItem.qr_source.join(', ') : '');
            setQuestionType(selectedItem.type || 'short answer');
            setOptions(selectedItem.options || []);
            setSampleAnswer(selectedItem.sample_answer || '');
        }
    }, [selectedItem]);

    const handleDisplayTextChange = (e) => {
        setDisplayText(e.target.value);
    };

    const handleQrSourceChange = (e) => {
        setQrSource(e.target.value);
    };

    const handleSampleAnswerChange = (e) => {
        setSampleAnswer(e.target.value);
    };

    const handleQuestionTypeChange = (e) => {
        setQuestionType(e.target.value);
    };

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const handleAddOption = () => {
        setOptions([...options, '']);
    };

    const handleRemoveOption = (index) => {
        const newOptions = options.filter((_, i) => i !== index);
        setOptions(newOptions);
    };

    const handleUpdateClick = () => {
        if (selectedItem) {
            const updatedQuestion = {
                ...selectedItem,
                display_text: displayText,
                qr_source: qrSource.split(',').map(source => source.trim()),
                type: questionType,
                options: questionType === 'multiple choice' || questionType === 'multi-select' ? options : undefined,
                sample_answer: sampleAnswer
            };
            console.log('Updating question in DetailsQAX:', updatedQuestion);
            updateQuestion(updatedQuestion);
        }
    };

    if (!selectedItem) {
        return <div className="qa-detail-form">Please select a question or section.</div>;
    }

    return (
        <div className="qa-detail-form">
            <div className="form-group">
                <label htmlFor="id">ID:</label>
                <input
                    id="id"
                    type="text"
                    value={selectedItem.qr_id || ''}
                    readOnly
                />
            </div>
            <div className="form-group">
                <label htmlFor="displayText">{selectedItem.section ? 'Section:' : 'Question:'}</label>
                <textarea
                    id="displayText"
                    rows="2"
                    cols="50"
                    value={displayText}
                    onChange={handleDisplayTextChange}
                ></textarea>
            </div>
            {!selectedItem.section && (
                <>
                    <div className="form-group">
                        <label htmlFor="questionType">Question Type:</label>
                        <select id="questionType" value={questionType} onChange={handleQuestionTypeChange}>
                            <option value="short answer">Short Answer</option>
                            <option value="yes/no">Yes/No</option>
                            <option value="multiple choice">Multiple Choice</option>
                            <option value="multi-select">Multi-Select</option>
                        </select>
                    </div>
                    {questionType === 'yes/no' ? (
                        <div className="form-group">
                            <label>Answer Options:</label>
                            <label>
                                <input
                                    type="radio"
                                    name="yesno"
                                    value="Yes"
                                    checked={sampleAnswer === "Yes"}
                                    onChange={handleSampleAnswerChange}
                                /> Yes
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="yesno"
                                    value="No"
                                    checked={sampleAnswer === "No"}
                                    onChange={handleSampleAnswerChange}
                                /> No
                            </label>
                        </div>
                    ) : (
                        <>
                            {(questionType === 'multiple choice' || questionType === 'multi-select') && (
                                <div className="form-group">
                                    <label>Answer Options:</label>
                                    {options.map((option, index) => (
                                        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                            <input
                                                type="text"
                                                value={option}
                                                onChange={(e) => handleOptionChange(index, e.target.value)}
                                                style={{ marginRight: '10px' }}
                                            />
                                            <button onClick={() => handleRemoveOption(index)}>-</button>
                                        </div>
                                    ))}
                                    <button onClick={handleAddOption}>Add Option</button>
                                </div>
                            )}
                        </>
                    )}
                </>
            )}
            {!selectedItem.section && (
                <div className="form-group">
                    <label htmlFor="qrSource">Source:</label>
                    <textarea
                        id="qrSource"
                        rows="2"
                        cols="50"
                        value={qrSource}
                        onChange={handleQrSourceChange}
                    ></textarea>
                </div>
            )}
            <button
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '36px',
                    border: '0',
                    borderRadius: '5px',
                    background: '#fb5e32',
                    color: '#fff',
                    fontWeight: '700',
                    cursor: 'pointer'
                }}
                onClick={handleUpdateClick}
            >
                Update
            </button>
        </div>
    );
};

export default DetailsQAX;

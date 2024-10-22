import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const LibraryAccessPanel = ({ addNewQuestion }) => {
    const [checkboxStates, setCheckboxStates] = useState({
        newQuestion1: false,
        newQuestion2: false,
    });

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setCheckboxStates((prevStates) => ({
            ...prevStates,
            [name]: checked
        }));

        if (checked) {
            const newQuestion = {
                id: uuidv4(),
                parent: "s1", // Set the parent to "s1"
                section: false,
                display_text: name === 'newQuestion1' ? 'New Question 1' : 'New Question 2',
                type: 'short answer',
                options: [],
                sample_answer: '',
                answer_source: '',
                confidence_interval: '',
                source_content: '',
                messages: [],
                subQuestions: []
            };
            addNewQuestion(newQuestion);
        } else {
            addNewQuestion(null, name === 'newQuestion1' ? 'New Question 1' : 'New Question 2');
        }
    };

    return (
        <div>
            <label>
                <input 
                    type="checkbox" 
                    name="newQuestion1" 
                    checked={checkboxStates.newQuestion1} 
                    onChange={handleCheckboxChange}
                />
                New Question 1
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="newQuestion2" 
                    checked={checkboxStates.newQuestion2} 
                    onChange={handleCheckboxChange}
                />
                New Question 2
            </label>
        </div>
    );
};

export default LibraryAccessPanel;

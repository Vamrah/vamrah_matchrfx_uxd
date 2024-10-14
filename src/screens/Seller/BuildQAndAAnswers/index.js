import React, { useState } from 'react';
import Panel from '../../../components/panel';
import BtnGroup from '../../../components/btngroup';
import ListQuestions from '../../../components/lists/listquestions';
import QADetailForm from '../../../components/details/qadetailform';
import Messages from '../../../components/messages';
import ContentLibrary from '../../../components/contentlibrary';
import { questionnaire as initialQuestionnaire } from '../../../dataQA';

const BuildQAndAAnswers = () => {
    const [questionnaire, setQuestionnaire] = useState(initialQuestionnaire);
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

    const handleSelectQuestion = (index) => {
        setSelectedQuestionIndex(index);
    };

    const handleUpdateQuestion = (updatedQuestion, sourceContent) => {
        if (selectedQuestionIndex !== null) {
            const updatedQuestionnaire = [...questionnaire];
            updatedQuestionnaire[selectedQuestionIndex] = {
                ...updatedQuestionnaire[selectedQuestionIndex],
                sample_answer: updatedQuestion,
                source_content: sourceContent
            };
            setQuestionnaire(updatedQuestionnaire);
        }
    };

    const dropdownItems = [
        { label: 'New', onClick: () => console.log('Action 1 clicked') },
        { label: 'Open', onClick: () => console.log('Action 2 clicked') },
        { label: 'Save', onClick: () => console.log('Action 3 clicked') },
        { label: 'Extract', onClick: () => console.log('Action 4 clicked') },
        { label: 'Census', onClick: () => console.log('Action 5 clicked') },
        { label: 'Setup', onClick: () => console.log('Action 6 clicked') },
        { label: 'Archive', onClick: () => console.log('Action 7 clicked') }
    ];

    const panel2Tabs = ["Q&A Detail", "Content Library", "Messages"];

    return (
        <div className="page-container">
            <div className="top-toolbar">
                <div className="toolbar-1">
                    <h1>Build Q&A Answers</h1>
                    <BtnGroup text="ACTIONS" iconClass="caret arrow-down" dropdownItems={dropdownItems} />
                </div>
            </div>
            <div className="rfx-wrapper">
                <Panel initialActiveTab="tab1" id="panel-1">
                    <div className="no-yscroll">
                        <ListQuestions
                            questions={questionnaire}
                            onSelectQuestion={handleSelectQuestion}
                            selectedQuestionIndex={selectedQuestionIndex}
                        />
                    </div>
                </Panel>
                <Panel tabs={panel2Tabs} initialActiveTab="Q&A Detail" id="panel-2">
                    {selectedQuestionIndex !== null ? (
                        <QADetailForm
                            question={questionnaire[selectedQuestionIndex]}
                            updateQuestion={handleUpdateQuestion}
                        />
                    ) : (
                        <QADetailForm
                            question={null}
                            updateQuestion={handleUpdateQuestion}
                        />
                    )}
                    <ContentLibrary />
                    {selectedQuestionIndex !== null ? (
                        <Messages messages={questionnaire[selectedQuestionIndex].messages} />
                    ) : (
                        <Messages messages={[]} />
                    )}
                </Panel>
            </div>
        </div>
    );
};

export default BuildQAndAAnswers;

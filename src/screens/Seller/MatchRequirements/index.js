import React, { useState } from 'react';
import Panel from '../../../components/panel';
import BtnGroup from '../../../components/btngroup';
import ListReqs from '../../../components/lists/listreqs';
import ReqDetails from '../../../components/details/reqdetails';
import ReqLibraries from '../../../components/reqlibraries';
import Messages from '../../../components/messages';
import { requirements as initialRequirements } from '../../../dataRequirements';

const MatchRequirements = () => {
    const [requirements, setRequirements] = useState(initialRequirements);
    const [selectedRequirementIndex, setSelectedRequirementIndex] = useState(null);

    const handleSelectRequirement = (index) => {
        setSelectedRequirementIndex(index);
    };

    const handleUpdateRequirement = (updatedRequirement) => {
        if (selectedRequirementIndex !== null) {
            const updatedRequirements = [...requirements];
            updatedRequirements[selectedRequirementIndex] = {
                ...updatedRequirements[selectedRequirementIndex],
                ...updatedRequirement,
            };
            setRequirements(updatedRequirements);
        }
    };

    const panel2Tabs = ["Req Detail", "Req Library", "Messages"];

    return (
        <div className="page-container">
            <div className='top-toolbar'>
                <div className='toolbar-1'>
                    <h1>Match Requirements</h1>
                    <BtnGroup text="ACTIONS" iconClass="caret arrow-down" onClick={() => console.log('Button clicked!')} />
                </div>
            </div>
            <div className="rfx-wrapper">
                <Panel initialActiveTab="tab1" id="panel-1">
                    <ListReqs
                        requirements={requirements}
                        onSelectRequirement={handleSelectRequirement}
                        selectedRequirementIndex={selectedRequirementIndex}
                    />
                </Panel>
                <Panel tabs={panel2Tabs} initialActiveTab="Req Detail" id="panel-2">
                    {selectedRequirementIndex !== null ? (
                        <ReqDetails
                            requirement={requirements[selectedRequirementIndex]}
                            updateRequirement={handleUpdateRequirement}
                        />
                    ) : (
                        <ReqDetails requirement={null} updateRequirement={handleUpdateRequirement} />
                    )}
                    <ReqLibraries />
                    <Messages messages={requirements[selectedRequirementIndex]?.messages || []} />
                </Panel>
            </div>
        </div>
    );
};

export default MatchRequirements;

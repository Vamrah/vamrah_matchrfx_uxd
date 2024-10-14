import React, { useState } from 'react';
import Panel from '../../../components/panel';
import BtnGroup from '../../../components/btngroup';
import ListRfp from '../../../components/lists/listrfps';
import DetailsRFP from '../../../components/details/detailsrfp'; // Import the new component
import TeamProject from '../../../components/teamproject'; // Import the new component
import { rfpItems as initialRfpItems } from '../../../dataRFPS';

const urlMap = {
    pdf1Page1: "/Life_Certificate-Class_1.pdf#page=1",
    pdf1Page13: "/Life_Certificate-Class_1.pdf#page=13",
    pdf1Page14: "/Life_Certificate-Class_1.pdf#page=14",
    pdf2Page1: "/Life_Certificate-Class_2.pdf#page=1",
    pdf2Page13: "/Life_Certificate-Class_2.pdf#page=13",
    pdf2Page14: "/Life_Certificate-Class_2.pdf#page=14",
    pdf3Page1: "/ABH-Life_and_Disability_RFP_v2.pdf#page=1",
    pdf3Page6: "/ABH-Life_and_Disability_RFP_v2.pdf#page=6",
    pdf3Page7: "/ABH-Life_and_Disability_RFP_v2.pdf#page=7",
    pdf3Page8: "/ABH-Life_and_Disability_RFP_v2.pdf#page=8",
    pdf3Page9: "/ABH-Life_and_Disability_RFP_v2.pdf#page=9",
    pdf4Page1: "/STD_Certificate-Class_1.pdf#page=1",
    pdf5Page1: "/ABH-Census.pdf#page=1",
};

const BuyerDashboard = () => {
    const [rfpItems, setRfpItems] = useState(initialRfpItems);
    const [pdfUrl, setPdfUrl] = useState(urlMap.pdf1Page1);
    const [key, setKey] = useState(0); // Add a key state to force re-render
    const [selectedRfp, setSelectedRfp] = useState(rfpItems[0]); // Default to first RFP
    const [activeRfpId, setActiveRfpId] = useState(rfpItems[0].id); // Default to first RFP ID

    const panel2Tabs = ["RFP Detail", "Document View", "Project Team"];

    const dropdownItems = [
        { label: 'New', onClick: () => console.log('Action 1 clicked') },
        { label: 'Open', onClick: () => console.log('Action 2 clicked') },
        { label: 'Save', onClick: () => console.log('Action 3 clicked') },
        { label: 'Extract', onClick: () => console.log('Action 4 clicked') },
        { label: 'Census', onClick: () => console.log('Action 5 clicked') },
        { label: 'Setup', onClick: () => console.log('Action 6 clicked') },
        { label: 'Archive', onClick: () => console.log('Action 7 clicked') }
    ];

    const handleDocumentClick = (pdfClass) => {
        const pdfUrl = urlMap[pdfClass];
        if (pdfUrl) {
            setPdfUrl(pdfUrl);
            setKey(prevKey => prevKey + 1); // Increment the key to force re-render
        }
    };

    const handleRfpClick = (rfpId) => {
        const rfp = rfpItems.find(item => item.id === rfpId);
        if (rfp) {
            setSelectedRfp(rfp);
            setActiveRfpId(rfpId);
        }
    };

    const handleUpdate = (updatedRfp) => {
        const updatedRfpItems = rfpItems.map(item =>
            item.id === updatedRfp.id ? updatedRfp : item
        );
        setRfpItems(updatedRfpItems);
        setSelectedRfp(updatedRfp);
    };

    return (
        <div className="page-container">
            <div className="top-toolbar">
                <div className="toolbar-1">
                    <h1>Dashboard</h1>
                    <BtnGroup text="ACTIONS" iconClass="caret arrow-down" dropdownItems={dropdownItems} />
                </div>
            </div>
            <div className="rfx-wrapper">
                <Panel initialActiveTab="tab1" id="panel-1">
                    <ListRfp collapsible={true} onDocumentClick={handleDocumentClick} onRfpClick={handleRfpClick} rfpItems={rfpItems} activeRfpId={activeRfpId} /> {/* Pass the handleRfpClick function and rfpItems */}
                </Panel>
                <Panel tabs={panel2Tabs} initialActiveTab="RFP Detail" id="panel-2">
                    <div>
                        <DetailsRFP rfpDetails={selectedRfp} onUpdate={handleUpdate} />
                    </div>
                    <div className="pdf-container" id="pdfContainer">
                        <embed key={key} id="pdfEmbed" src={pdfUrl} type="application/pdf" width="100%" height="100%" />
                    </div>
                    <div>
                        <TeamProject team={selectedRfp.team} />
                    </div>
                </Panel>
            </div>
        </div>
    );
};

export default BuyerDashboard;

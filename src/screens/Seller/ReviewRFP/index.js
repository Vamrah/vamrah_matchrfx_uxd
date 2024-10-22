import React, { useState } from 'react';
import Panel from '../../../components/panel';
import BtnGroup from '../../../components/btngroup';
import ListDocuments from '../../../components/lists/listdocuments';
import ExtractedElements from '../../../components/extractedelements';
import MessagingComponent from '../../../components/messagingcomponent';

const urlMap = {
    pdf1Page1: "https://assets.codepen.io/1690529/Cigna_Life_Certificate-Class_1.pdf#page=1",
    pdf1Page13: "https://assets.codepen.io/1690529/Cigna_Life_Certificate-Class_1.pdf#page=13",
    pdf1Page14: "https://assets.codepen.io/1690529/Cigna_Life_Certificate-Class_1.pdf#page=14",
    pdf2Page1: "https://assets.codepen.io/1690529/Cigna_Life_Certificate-Class_2.pdf#page=1",
    pdf2Page13: "https://assets.codepen.io/1690529/Cigna_Life_Certificate-Class_2.pdf#page=13",
    pdf2Page14: "https://assets.codepen.io/1690529/Cigna_Life_Certificate-Class_2.pdf#page=14",
    pdf3Page1: "https://assets.codepen.io/1690529/ABH-Life_and_Disability_RFP_v2.pdf#page=1",
    pdf3Page6: "https://assets.codepen.io/1690529/ABH-Life_and_Disability_RFP_v2.pdf#page=6",
    pdf3Page7: "https://assets.codepen.io/1690529/ABH-Life_and_Disability_RFP_v2.pdf#page=7",
    pdf3Page8: "https://assets.codepen.io/1690529/ABH-Life_and_Disability_RFP_v2.pdf#page=8",
    pdf3Page9: "https://assets.codepen.io/1690529/ABH-Life_and_Disability_RFP_v2.pdf#page=9"
};

const ReviewRFP = () => {
    const [pdfUrl, setPdfUrl] = useState(urlMap.pdf1Page1);
    const [key, setKey] = useState(0); // Add a key state to force re-render

    const panel2Tabs = ["Document View", "Messages"];

    const documents = [
        { id: "fileCheck2", name: "Cigna Life Certificate - Class 1.pdf", status: "Uploaded", pdfClass: "pdf1Page1" },
        { id: "fileCheck3", name: "Cigna Life Certificate - Class 2.pdf", status: "Uploaded", pdfClass: "pdf2Page1" },
        { id: "fileCheck4", name: "Advanced Behavioral Health RFP.pdf", status: "Uploaded", pdfClass: "pdf3Page1" }
    ];

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

    return (
        <div className="page-container">
            <div className="top-toolbar">
                <div className="toolbar-1">
                    <h1>Review RFP</h1>
                    <BtnGroup text="ACTIONS" iconClass="caret arrow-down" dropdownItems={dropdownItems} />
                </div>
            </div>
            <div className="rfx-wrapper">
                <Panel initialActiveTab="tab1" id="panel-1">
                    <div className='no-yscroll'>
                        <ListDocuments documents={documents} onDocumentClick={handleDocumentClick} />
                        <ExtractedElements onDocumentClick={handleDocumentClick} />
                    </div>
                </Panel>
                <Panel tabs={panel2Tabs} initialActiveTab="Document View" id="panel-2">
                    <div className="pdf-container" id="pdfContainer">
                        <embed key={key} id="pdfEmbed" src={pdfUrl} type="application/pdf" width="100%" height="100%" />
                    </div>
                    <MessagingComponent /> {/* Include the MessagingComponent in the Messages tab */}
                </Panel>
            </div>
        </div>
    );
};

export default ReviewRFP;

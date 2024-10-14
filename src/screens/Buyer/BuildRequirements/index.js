import React, { useState, useEffect } from 'react';
import Panel from '../../../components/panel';
import BtnGroup from '../../../components/btngroup';
import Messages from '../../../components/messages';
import ContentLibrary from '../../../components/contentlibrary';
import DetailsQAX from '../../../components/details/buildqadetails';
import { buildquestionnaire as initialQuestionnaire } from '../../../databuildQAquestions';
import SummaryView from '../../../components/summaryview';
import ExcelEmbed from '../../../components/excelembed';
import defaultFile from '../../../assets/docs/spreadsheets/Census.xlsx';
import inforceFile from '../../../assets/docs/spreadsheets/Advanced_Behavioral_Health_Inc.xlsm';
import experienceDataFile from '../../../assets/docs/spreadsheets/experience_data.xlsx';
import QRView from '../../../components/qrview';
import { dataproposalsQA } from '../../../dataproposalsQA';
import RatesView from '../../../components/ratesview';
import InforceSchedule from '../../../components/inforceschedule';

const urlMap = {
    pdf1Page1: "/Life_Certificate-Class_1_annotated.pdf#page=1",
    pdf1Page13: "/Life_Certificate-Class_1_annotated.pdf#page=13",
    pdf1Page14: "/Life_Certificate-Class_1_annotated.pdf#page=14",
    pdf2Page1: "/Life_Certificate-Class_2_annotated.pdf#page=1",
    pdf2Page13: "/Life_Certificate-Class_2_annotated.pdf#page=13",
    pdf2Page14: "/Life_Certificate-Class_2_annotated.pdf#page=14",
    pdf3Page1: "/ABH-Life_and_Disability_RFP_v2.pdf#page=1",
    pdf3Page6: "/ABH-Life_and_Disability_RFP_v2.pdf#page=6",
    pdf3Page7: "/ABH-Life_and_Disability_RFP_v2.pdf#page=7",
    pdf3Page8: "/ABH-Life_and_Disability_RFP_v2.pdf#page=8",
    pdf3Page9: "/ABH-Life_and_Disability_RFP_v2.pdf#page=9",
    pdf4Page1: "/STD_Certificate-Class_1_annotated.pdf#page=1",
    pdf4Page11: "/STD_Certificate-Class_1_annotated.pdf#page=11",
    pdf6Page1: "/STD_Certificate-Class_2_annotated.pdf#page=1",
};

const BuildRequirements = () => {
    const [buildquestionnaire, setQuestionnaire] = useState(initialQuestionnaire);
    const [selectedItem, setSelectedItem] = useState(null);
    const [tableData, setTableData] = useState([]);
    const [treeData, setTreeData] = useState(dataproposalsQA);
    const [tabNames, setTabNames] = useState({});
    const [pdfUrl, setPdfUrl] = useState(urlMap.pdf1Page1);
    const [key, setKey] = useState(0);

    useEffect(() => {
        console.log("Initial questionnaire data:", buildquestionnaire);
    }, [buildquestionnaire]);

    const handleSelectItem = (item) => {
        console.log("Item selected:", item);
        setSelectedItem(item);
        setPdfUrl(null);  // Reset PDF view when an item is selected
    };

    const handleUpdateQuestion = (updatedQuestion) => {
        console.log("Updating question in DetailsQAX:", updatedQuestion);
        setSelectedItem(updatedQuestion);

        const updatedTableData = tableData.map((row) => {
            if (row.qr_id === updatedQuestion.qr_id) {
                return { ...row, ...updatedQuestion };
            }
            return row;
        });

        console.log("Updated tableData:", updatedTableData);
        setTableData(updatedTableData);
    };

    const handleTreeDataUpdate = (newTreeData) => {
        console.log("Tree data updated:", newTreeData);
        setTreeData(newTreeData);
        updateTableData(newTreeData);
    };

    const handleTableDataUpdate = (newTableData) => {
        console.log("Updating table data in BuildRequirements:", newTableData);
        setTableData(newTableData);
    };

    const handleTabNameChange = (group, value) => {
        setTabNames({ ...tabNames, [group]: value });
    };

    const updateTableData = (data) => {
        const getCheckedNodes = (nodes, parentIndexes = [], level1Group = '', level2Group = '') => {
            let result = [];
            nodes.forEach((node, idx) => {
                const currentIndexes = [...parentIndexes, idx + 1];
                const currentLevel1Group = level1Group || node.qr_level_1_group;
                const currentLevel2Group = level2Group || node.qr_level_2_group;
                if (node.checked) {
                    const indexString = currentIndexes
                        .map((val, i) => (i % 2 === 0 ? String.fromCharCode(64 + val) : val))
                        .join('');
                    result.push({
                        index: indexString,
                        qr_id: node.qr_id,
                        qr_level_1_group: currentLevel1Group,
                        qr_level_2_group: currentLevel2Group,
                        qr_text: node.qr_text,
                        qr_type: node.qr_type,
                    });
                    console.log('Adding node to tableData:', node.qr_id, 'with index', indexString);
                }
                if (node.children) {
                    result = result.concat(getCheckedNodes(node.children, currentIndexes, currentLevel1Group, currentLevel2Group));
                }
            });
            return result;
        };

        const newTableData = getCheckedNodes(data);
        console.log('Updated tableData:', newTableData);
        setTableData(newTableData);
    };

    const dropdownItems = [
        // Other dropdown items...
    ];

    const panel1Tabs = ["Summary", "In-Force Schedule", "Current Rates", "Experience Data", "Census", "Requirements/Questions"];
    const panel2Tabs = ["Detail View", "Content Library", "Messages"];

    const handleDocumentClick = (pdfClass) => {
        const newPdfUrl = urlMap[pdfClass];
        if (newPdfUrl) {
            setPdfUrl(newPdfUrl);
            setSelectedItem(null);  // Reset selected item when a PDF is selected
            setKey(prevKey => prevKey + 1); // Increment the key to force re-render
        }
    };

    return (
        <div className="page-container">
            <div className="top-toolbar">
                <div className="toolbar-1">
                    <h1>Build Requirements</h1>
                    <BtnGroup text="ACTIONS" iconClass="caret arrow-down" dropdownItems={dropdownItems} />
                </div>
            </div>
            <div className="rfx-wrapper multi-tab-panels library-access extended-height">
                <Panel tabs={panel1Tabs} initialActiveTab="Summary" id="panel-1">
                    <div>
                        <SummaryView />
                    </div>
                    <div>
                        <InforceSchedule onDocumentClick={handleDocumentClick} />
                    </div>
                    <div><RatesView /></div>
                    <div><ExcelEmbed filePath={experienceDataFile} /></div>
                    <div>
                        <ExcelEmbed filePath={defaultFile} /> {/* Embedded Excel File */}
                    </div>
                    <div>
                        <QRView
                            tableData={tableData}
                            treeData={treeData}
                            updateTableData={handleTableDataUpdate}
                            updateTreeData={handleTreeDataUpdate}
                            tabNames={tabNames}
                            handleTabNameChange={handleTabNameChange}
                            onSelectItem={handleSelectItem}
                        />
                    </div>
                </Panel>
                <Panel tabs={panel2Tabs} initialActiveTab="Detail View" id="panel-2">
                    {selectedItem ? (
                        <DetailsQAX
                            selectedItem={selectedItem}
                            updateQuestion={handleUpdateQuestion}
                        />
                    ) : pdfUrl ? (
                        <div className="pdf-container" id="pdfContainer">
                            <embed key={key} id="pdfEmbed" src={pdfUrl} type="application/pdf" width="100%" height="100%" />
                        </div>
                    ) : (
                        <p>Select an item to view details or a document to view the PDF.</p>
                    )}
                    <ContentLibrary />
                    <Messages messages={selectedItem?.messages ?? []} />
                </Panel>
            </div>
        </div>
    );
};

export default BuildRequirements;

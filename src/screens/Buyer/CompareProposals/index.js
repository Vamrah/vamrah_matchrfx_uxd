import React, { useState, useEffect } from 'react';
import Panel from '../../../components/panel';
import BtnGroup from '../../../components/btngroup';
import Messages from '../../../components/messages';
// import DetailsQAX from '../../../components/details/buildqadetails';
// import { buildquestionnaire as initialQuestionnaire } from '../../../databuildQAquestions';
import CompareView from '../../../components/compareview';
// import { dataqrlibrary } from '../../../dataqrlibrary'; // Import the QR library data

const CompareProposals = () => {
    // const [buildquestionnaire, setQuestionnaire] = useState(initialQuestionnaire);
    const [selectedItem, setSelectedItem] = useState(null);
    const [tableData, setTableData] = useState([]);
    // const [treeData, setTreeData] = useState(dataqrlibrary);
    const [tabNames, setTabNames] = useState({});

    // useEffect(() => {
    //     console.log("Initial questionnaire data:", buildquestionnaire);
    // }, [buildquestionnaire]);

    // const handleSelectItem = (item) => {
    //     console.log("Item selected:", item);
    //     setSelectedItem(item);
    // };

    // const handleUpdateQuestion = (updatedQuestion) => {
    //     console.log("Updating question in DetailsQAX:", updatedQuestion);
    //     setSelectedItem(updatedQuestion);

    //     const updatedTableData = tableData.map((row) => {
    //         if (row.qr_id === updatedQuestion.qr_id) {
    //             return { ...row, ...updatedQuestion };
    //         }
    //         return row;
    //     });

    //     console.log("Updated tableData:", updatedTableData);
    //     setTableData(updatedTableData);
    // };

    // const handleTreeDataUpdate = (newTreeData) => {
    //     console.log("Tree data updated:", newTreeData);
    //     setTreeData(newTreeData);
    //     updateTableData(newTreeData);
    // };

    // const handleTableDataUpdate = (newTableData) => {
    //     console.log("Updating table data in CompareProposals:", newTableData);
    //     setTableData(newTableData);
    // };

    // const handleTabNameChange = (group, value) => {
    //     setTabNames({ ...tabNames, [group]: value });
    // };

    // const updateTableData = (data) => {
    //     const getCheckedNodes = (nodes, parentIndexes = [], level1Group = '', level2Group = '') => {
    //         let result = [];
    //         nodes.forEach((node, idx) => {
    //             const currentIndexes = [...parentIndexes, idx + 1];
    //             const currentLevel1Group = level1Group || node.qr_level_1_group;
    //             const currentLevel2Group = level2Group || node.qr_level_2_group;
    //             if (node.checked) {
    //                 const indexString = currentIndexes
    //                     .map((val, i) => (i % 2 === 0 ? String.fromCharCode(64 + val) : val))
    //                     .join('');
    //                 result.push({
    //                     index: indexString,
    //                     qr_id: node.qr_id,
    //                     qr_level_1_group: currentLevel1Group,
    //                     qr_level_2_group: currentLevel2Group,
    //                     qr_text: node.qr_text,
    //                     qr_type: node.qr_type,
    //                 });
    //                 console.log('Adding node to tableData:', node.qr_id, 'with index', indexString);
    //             }
    //             if (node.children) {
    //                 result = result.concat(getCheckedNodes(node.children, currentIndexes, currentLevel1Group, currentLevel2Group));
    //             }
    //         });
    //         return result;
    //     };

    //     const newTableData = getCheckedNodes(data);
    //     console.log('Updated tableData:', newTableData);
    //     setTableData(newTableData);
    // };

    const dropdownItems = [
        // Other dropdown items...
    ];

    const panel2Tabs = ["Detail View", "Team Scores", "Messages"];

    return (
        <div className="page-container">
            <div className="top-toolbar">
                <div className="toolbar-1">
                    <h1>Compare Proposals</h1>
                    <BtnGroup text="ACTIONS" iconClass="caret arrow-down" dropdownItems={dropdownItems} />
                </div>
            </div>
            <div className="rfx-wrapper library-access three-four-panel">
                <Panel id="panel-1">
                    <div>
                        <CompareView />
                    </div>
                </Panel>
                <Panel tabs={panel2Tabs} initialActiveTab="Detail View" id="panel-2">
                    {selectedItem ? (
                        <div>details</div>
                    ) : (
                        <p>Select a question to view details.</p>
                    )}
                    <div>Team Scores</div>
                    {selectedItem ? (
                        <Messages messages={selectedItem.messages} />
                    ) : (
                        <Messages messages={[]} />
                    )}
                </Panel>
            </div>
        </div>
    );
};

export default CompareProposals;

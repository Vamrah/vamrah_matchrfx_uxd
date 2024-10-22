import React, { useState, useEffect } from 'react';
import TableRow from './TableRow';
import TableHeader from './TableHeader';
import RemovedItemsTable from './RemovedItemsTable';





const FullQrDataList = ({ data, selectedVendors = [] }) => {
    const [activeTab, setActiveTab] = useState(null);
    const [editableTableData, setEditableTableData] = useState([]);
    const [addedRows, setAddedRows] = useState([]);
    const [tabNames, setTabNames] = useState({});
    const [removedItems, setRemovedItems] = useState({});

    useEffect(() => {
        const parseData = (data) => {
            let parsedData = [];
            data.forEach((level1) => {
                const { qr_level_1_group, children: level2Children } = level1;
                level2Children.forEach((level2) => {
                    const { qr_level_2_group, children: questions } = level2;
                    questions.forEach((question) => {
                        parsedData.push({
                            qr_id: question.qr_id,
                            qr_level_1_group,
                            qr_level_2_group,
                            qr_text: question.qr_text,
                            qr_type: question.qr_type,
                            qr_answer_options: question.qr_answer_options,
                            qr_source: question.qr_source,
                            sample_answer: question.sample_answer,
                            insurer_answers: question.insurer_answers,
                            index: question.qr_id,
                        });
                    });
                });
            });
            return parsedData;
        };

        const tableData = parseData(data);
        console.log('FullQrDataList - tableData:', tableData);
        setEditableTableData(tableData);
    }, [data]);

    useEffect(() => {
        if (editableTableData.length > 0 && activeTab === null) {
            setActiveTab(editableTableData[0].qr_level_1_group);
        }
    }, [editableTableData]);

    const addRow = () => {
        const newRow = {
            index: `New${addedRows.length + 1}`,
            qr_level_1_group: activeTab || 'New Group',
            qr_level_2_group: '',
            qr_text: '',
            qr_type: '',
        };
        setAddedRows([...addedRows, newRow]);
    };

    const handleInputChange = (index, field, value) => {
        const updatedData = editableTableData.map((row) => {
            if (row.index === index) {
                return { ...row, [field]: value };
            }
            return row;
        });
        setEditableTableData(updatedData);
        if (index.startsWith('New')) {
            setAddedRows(updatedData.filter(row => row.index.startsWith('New')));
        }
    };

    const handleRowClick = (row) => {
        const selectedItem = {
            qr_id: row.qr_id,
            display_text: row.qr_text || row.qr_level_2_group || row.qr_level_1_group,
            answer_source: row.qr_source ? row.qr_source.join(', ') : '',
            type: row.qr_type || 'short answer',
            options: row.qr_answer_options || [],
            sample_answer: row.sample_answer || '',
            insurer_answers: row.insurer_answers || {},
        };
        console.log('Row clicked in FullQrDataList:', selectedItem);
    };

    const handleTabNameChange = (group, value) => {
        setTabNames({ ...tabNames, [group]: value });
    };

    const adjustTextareaHeight = (textarea) => {
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    const handleCheckboxChange = (row) => {
        const updatedRemovedItems = { ...removedItems };
        if (!updatedRemovedItems[activeTab]) {
            updatedRemovedItems[activeTab] = [];
        }
        updatedRemovedItems[activeTab].push(row);
        setRemovedItems(updatedRemovedItems);

        setEditableTableData(editableTableData.filter(item => item.index !== row.index));
    };

    const handleRestoreItem = (row) => {
        setEditableTableData([...editableTableData, row]);

        const updatedRemovedItems = { ...removedItems };
        updatedRemovedItems[activeTab] = updatedRemovedItems[activeTab].filter(item => item.index !== row.index);
        setRemovedItems(updatedRemovedItems);
    };

    const level1Groups = [...new Set(editableTableData.map(row => row.qr_level_1_group).filter(group => group))];

    console.log('FullQrDataList - selectedVendors:', selectedVendors);
    console.log('FullQrDataList - editableTableData:', editableTableData);

    return (
        <div>
            <div className="tabs-wrapper">
                <div className="tabs">
                    {level1Groups.map(group => (
                        <input
                            key={group}
                            type="text"
                            value={tabNames[group] || group}
                            onChange={(e) => handleTabNameChange(group, e.target.value)}
                            onClick={() => setActiveTab(group)}
                            className={activeTab === group ? 'active' : ''}
                        />
                    ))}
                </div>
            </div>
            <div className='rfp-build-list-table' style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
                {activeTab && (
                    <>
                        <table className='compare-table'>
                            <TableHeader
                                selectedVendors={selectedVendors}
                                showExtraColumn={selectedVendors.length === 0}
                                showRemovedItemsHeader={true} // Or some condition to determine when to show the header
                            />

                            <tbody>
                                {editableTableData
                                    .filter(row => row.qr_level_1_group === activeTab)
                                    .map((row, index) => (
                                        <TableRow
                                            key={row.index}
                                            row={row}
                                            selectedVendors={selectedVendors}
                                            handleCheckboxChange={handleCheckboxChange}
                                            handleRowClick={handleRowClick}
                                            adjustTextareaHeight={adjustTextareaHeight}
                                            showExtraColumn={selectedVendors.length === 0 && index === 0}
                                            totalRows={editableTableData.length}
                                        />
                                    ))}
                            </tbody>
                        </table>
                        <RemovedItemsTable
                            removedItems={removedItems[activeTab]}
                            selectedVendors={selectedVendors}
                            adjustTextareaHeight={adjustTextareaHeight}
                            handleRestoreItem={handleRestoreItem}
                            showExtraColumn={selectedVendors.length === 0}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default FullQrDataList;

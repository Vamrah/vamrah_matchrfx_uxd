import React, { useState, useEffect } from 'react';

const RfpBuildList = ({ tableData, tabNames, handleTabNameChange, onSelectItem }) => {
  const [activeTab, setActiveTab] = useState(null);
  const [editableTableData, setEditableTableData] = useState([]);
  const [addedRows, setAddedRows] = useState([]);

  useEffect(() => {
    console.log('Table data received in RfpBuildList:', tableData);
    setEditableTableData([...tableData, ...addedRows]);
  }, [tableData, addedRows]);

  useEffect(() => {
    console.log('Editable table data:', editableTableData);
  }, [editableTableData]);

  const level1Groups = [...new Set([...tableData, ...addedRows].map(row => row.qr_level_1_group).filter(group => group))];
  console.log('Level 1 Groups:', level1Groups);

  useEffect(() => {
    if (level1Groups.length > 0 && activeTab === null) {
      setActiveTab(level1Groups[0]);
    }
  }, [level1Groups]);

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
      sample_answer: row.sample_answer || ''
    };
    console.log('Row clicked in RfpBuildList:', selectedItem);
    onSelectItem(selectedItem);
  };

  const adjustTextareaHeight = (textarea) => {
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const renderRow = (row) => {
    if (row.qr_level_2_group && !row.qr_text) {
      return (
        <tr key={`${row.qr_id}-group`} onClick={() => handleRowClick(row)}>
          <td>{row.index}</td>
          <td>
            <textarea 
              value={row.qr_level_2_group || ''} 
              readOnly 
              ref={(textarea) => textarea && adjustTextareaHeight(textarea)}
              style={{ overflow: 'hidden', resize: 'none' }}
              rows={1}
            />
          </td>
          <td>
            <textarea 
              value="" 
              readOnly 
              ref={(textarea) => textarea && adjustTextareaHeight(textarea)}
              style={{ overflow: 'hidden', resize: 'none' }}
              rows={1}
            />
          </td>
        </tr>
      );
    }
    return (
      <tr key={`${row.qr_id}-question`} onClick={() => handleRowClick(row)}>
        <td>{row.index}</td>
        <td>
          <textarea 
            value={row.qr_text || row.qr_level_1_group || ''} 
            readOnly 
            ref={(textarea) => textarea && adjustTextareaHeight(textarea)}
            style={{ overflow: 'hidden', resize: 'none' }}
            rows={1}
          />
        </td>
        <td>
          {row.qr_type ? (
            <select value={row.qr_type || ''} readOnly>
              <option value="short answer">Short Answer</option>
              <option value="yes/no">Yes/No</option>
              <option value="multiple choice">Multiple Choice</option>
              <option value="multi-select">Multi-Select</option>
            </select>
          ) : (
            <textarea 
              value="" 
              readOnly 
              style={{ overflow: 'hidden', resize: 'none' }}
              rows={1}
            />
          )}
        </td>
      </tr>
    );
  };

  const renderEditableRow = (row) => {
    return (
      <tr key={row.index}>
        <td>{row.index}</td>
        <td>
          <textarea
            value={row.qr_text || row.qr_level_2_group || ''}
            onChange={(e) => {
              handleInputChange(row.index, row.qr_text ? 'qr_text' : 'qr_level_2_group', e.target.value);
              adjustTextareaHeight(e.target);
            }}
            ref={(textarea) => textarea && adjustTextareaHeight(textarea)}
            style={{ overflow: 'hidden', resize: 'none' }}
            rows={1}
          />
        </td>
        <td>
          <select
            value={row.qr_type || ''}
            onChange={(e) => handleInputChange(row.index, 'qr_type', e.target.value)}
          >
            <option value="short answer">Short Answer</option>
            <option value="yes/no">Yes/No</option>
            <option value="multiple choice">Multiple Choice</option>
            <option value="multi-select">Multi-Select</option>
          </select>
        </td>
      </tr>
    );
  };

  return (
    <div className='rfp-build-list-table'>
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
      <button className="v-btn" onClick={addRow}>Add New<i className='add-new'></i></button>
      {activeTab && (
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Question/Requirement</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {editableTableData
              .filter(row => row.qr_level_1_group === activeTab)
              .map((row) => row.index.startsWith('New') ? renderEditableRow(row) : renderRow(row))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RfpBuildList;

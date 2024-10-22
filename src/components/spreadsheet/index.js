import React, { useState } from 'react';

const Spreadsheet = () => {
  const [gridData, setGridData] = useState([['']]);
  const [columns, setColumns] = useState(['']);

  const addRow = () => {
    setGridData([...gridData, Array(columns.length).fill('')]);
  };

  const addColumn = () => {
    setColumns([...columns, '']);
    setGridData(gridData.map(row => [...row, '']));
  };

  const handleCellChange = (rowIndex, colIndex, value) => {
    const updatedData = [...gridData];
    updatedData[rowIndex][colIndex] = value;
    setGridData(updatedData);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((col, colIndex) => (
              <th key={colIndex}>
                <input
                  type="text"
                  value={col}
                  onChange={(e) => {
                    const updatedColumns = [...columns];
                    updatedColumns[colIndex] = e.target.value;
                    setColumns(updatedColumns);
                  }}
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {gridData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow}>Add Row</button>
      <button onClick={addColumn}>Add Column</button>
    </div>
  );
};

export default Spreadsheet;

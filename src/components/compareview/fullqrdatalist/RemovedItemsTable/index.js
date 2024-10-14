import React from 'react';
import TableHeader from '../TableHeader'; // Adjust the path as needed




const RemovedItemsTable = ({ removedItems, selectedVendors, adjustTextareaHeight, handleRestoreItem, showExtraColumn }) => (
  <div className='removed-items'>
    <table className='compare-table'>
      <TableHeader
        selectedVendors={selectedVendors}
        showExtraColumn={showExtraColumn}
        showRemovedItemsHeader={true} // Or some condition to determine when to show the header
      />
      <tbody>
        {(removedItems || []).length === 0 ? (
          <tr key={`no-items-removed`}>
            <td className="fixed-column fixed-column-1" colSpan={3}>No items removed.</td>
            {selectedVendors.map(vendor => (
              <React.Fragment key={`${vendor}-empty`}>
                <td></td>
                <td></td>
              </React.Fragment>
            ))}
            {showExtraColumn && (
              <td rowSpan="1" style={{ textAlign: 'center', verticalAlign: 'middle', position: 'relative' }}>
                <span>Open Vendors<br />to Compare Proposals</span>
              </td>
            )}
          </tr>
        ) : (
          removedItems.map((row, index) => (
            <tr key={`${row.qr_id}-removed`}>
              <td className="fixed-column fixed-column-1">
                <button onClick={() => handleRestoreItem(row)}>&uarr;</button>
              </td>
              <td className="fixed-column fixed-column-2">{row.index}</td>
              <td className="fixed-column fixed-column-3">
                <textarea
                  value={row.qr_text || row.qr_level_1_group || ''}
                  readOnly
                  ref={(textarea) => textarea && adjustTextareaHeight(textarea)}
                  style={{ 
                    resize: 'none' }}
                  rows={1}
                />
              </td>
              {selectedVendors.map(vendor => (
                <React.Fragment key={`${row.qr_id}-${vendor}-removed`}>
                  <td style={{textAlign: 'center'}}>{row.insurer_answers?.[vendor]?.answer || ''}</td>
                  <td>{row.insurer_answers?.[vendor]?.comment || ''}</td>
                </React.Fragment>
              ))}
              {showExtraColumn && index === 0 && (
                <td className='extra-col' rowSpan={removedItems.length}>
                </td>
              )}
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
);

export default RemovedItemsTable;

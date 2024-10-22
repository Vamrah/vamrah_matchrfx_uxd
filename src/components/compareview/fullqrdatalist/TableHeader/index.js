import React from 'react';

const TableHeader = ({ selectedVendors, showExtraColumn, showRemovedItemsHeader }) => (
  <thead>
    <tr>
      <th className="fixed-column fixed-column-1">
        {showRemovedItemsHeader && (
          <h3 className='floating-title'>Removed Items</h3>
        )}
      </th>
      <th className="fixed-column fixed-column-2">No.</th>
      <th className="fixed-column fixed-column-3">Question/Requirement</th>
      {selectedVendors.map(vendor => (
        <React.Fragment key={`${vendor}-header`}>
          <th>{vendor}<br />Answer</th>
          <th>{vendor}<br />Comment</th>
        </React.Fragment>
      ))}
      {showExtraColumn && (
        <th className='extra-col'></th>
      )}
    </tr>
  </thead>
);

export default TableHeader;

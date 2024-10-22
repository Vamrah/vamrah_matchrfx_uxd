import React, { useRef, useEffect } from 'react';





const TableRow = ({ row, selectedVendors, handleCheckboxChange, handleRowClick, adjustTextareaHeight, showExtraColumn, totalRows }) => {
  const rowRef = useRef(null);

  useEffect(() => {
    const handleMouseEnter = () => {
      rowRef.current.classList.add('hover');
    };

    const handleMouseLeave = () => {
      rowRef.current.classList.remove('hover');
    };

    const rowElement = rowRef.current;
    rowElement.addEventListener('mouseenter', handleMouseEnter);
    rowElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      rowElement.removeEventListener('mouseenter', handleMouseEnter);
      rowElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <tr ref={rowRef} onClick={() => handleRowClick(row)}>
      <td className="fixed-column fixed-column-1">
        <input type="checkbox" onChange={() => handleCheckboxChange(row)} />
      </td>
      <td className="fixed-column fixed-column-2">{row.index}</td>
      <td className="fixed-column fixed-column-3">
        <textarea 
          value={row.qr_text || row.qr_level_1_group || ''} 
          readOnly 
          ref={(textarea) => textarea && adjustTextareaHeight(textarea)}
          style={{ overflow: 'hidden', resize: 'none' }}
          rows={1}
        />        
      </td>
      {selectedVendors.map(vendor => {
        const answer = row.insurer_answers?.[vendor]?.answer || '';
        const comment = row.insurer_answers?.[vendor]?.comment || '';
        return (
          <React.Fragment key={`${row.qr_id}-${vendor}`}>
            <td className="fixed-column-border" style={{textAlign: 'center', overflow: 'hidden'}}>{answer}</td>
            <td className="fixed-column-border">{comment}</td>
          </React.Fragment>
        );
      })}
      {showExtraColumn && (
        <td className='extra-col' rowSpan={totalRows}>
          <span>Open Vendors<br />to Compare Proposals</span>
        </td>
      )}
    </tr>
  );
};

export default TableRow;

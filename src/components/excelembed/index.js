import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

const ExcelEmbed = ({ filePath }) => {
    const [tableHTML, setTableHTML] = useState('');

    useEffect(() => {
        if (filePath) {
            fetch(filePath)
                .then(response => response.arrayBuffer())
                .then(data => {
                    const workbook = XLSX.read(data, { type: 'array' });
                    const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
                    const html = XLSX.utils.sheet_to_html(firstSheet);
                    setTableHTML(html);
                })
                .catch(error => console.error('Error loading the default Excel file:', error));
        }
    }, [filePath]);

    const handleFile = (e) => {
        const files = e.target.files;
        if (files.length === 0) return;

        const f = files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            const html = XLSX.utils.sheet_to_html(firstSheet);
            setTableHTML(html);
        };
        reader.readAsArrayBuffer(f);
    };

    return (
        <div className='eef-container'>
            <div className='eef-spacer'></div>
            <div className='embedded-excel-file'>
                <input type="file" onChange={handleFile} accept=".xlsx, .xls" />
                {tableHTML && <div dangerouslySetInnerHTML={{ __html: tableHTML }} />}
            </div>
        </div>
    );
};

export default ExcelEmbed;

import React, { useState } from 'react';

const ListDocuments = ({ documents, onDocumentClick, collapsible = false }) => {
    const [isCollapsed, setIsCollapsed] = useState(collapsible);

    const handleCollapseClick = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="sub-panel sub-panel-1">
            <table className="doc-table linkContainer" id="document_list" style={{margin: "0", width: "100%"}}>
                <thead>
                    <tr>
                        <th className="text-center">
                            {collapsible && (
                                <button className="collapse-button" onClick={handleCollapseClick}>
                                    {isCollapsed ? '+' : '-'}
                                </button>
                            )}
                        </th>
                        <th>
                            <div className="doc-list-header">
                                <span onClick={handleCollapseClick} >RFP Documents</span>
                                <div className="file-drop-area">
                                    <form action="/api/documents" encType="multipart/form-data" method="POST">
                                        <input className="file-input" id="input_files" type="file" multiple />
                                        <label htmlFor="input_files" className="choose-file-button v-btn inverted"></label>
                                    </form>
                                </div>
                            </div>
                        </th>
                        <th>Status</th>
                    </tr>
                </thead>
                {!isCollapsed && (
                    <tbody>
                        {documents.map((document, index) => (
                            <tr key={index} data-index={index} onClick={() => onDocumentClick(document.pdfClass)}>
                                <td className="text-center"><input type="checkbox" id={document.id} /></td>
                                <td><button className={`text-btn pdfLink ${document.pdfClass}`}>{document.name}</button></td>
                                <td>{document.status}</td>
                            </tr>
                        ))}
                    </tbody>
                )}
            </table>
        </div>
    );
};

export default ListDocuments;

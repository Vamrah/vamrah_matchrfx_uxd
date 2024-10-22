import React, { useState } from 'react';
import QrLibrary from './qrlibrary';
import RfpBuildList from './rfpbuildlist';

const QRview = ({ tableData, treeData, updateTableData, updateTreeData, tabNames, handleTabNameChange, onSelectItem }) => {
    const [isLibraryOpen, setIsLibraryOpen] = useState(false);

    const toggleLibrary = () => {
        setIsLibraryOpen(!isLibraryOpen);
    };

    const updateTreeDataAndTableData = (node, checked) => {
        console.log('updateTreeData called with:', node, checked);

        const updateNodeAndDescendants = (nodes) => {
            return nodes.map((n) => {
                if (n.qr_id === node.qr_id) {
                    n.checked = checked;
                    console.log('Updating node:', n.qr_id, 'to', checked);
                    if (n.children) {
                        n.children = updateDescendants(n.children, checked);
                    }
                } else if (n.children) {
                    n.children = updateNodeAndDescendants(n.children);
                }
                return n;
            });
        };

        const updateDescendants = (nodes, checked) => {
            return nodes.map((n) => {
                n.checked = checked;
                console.log('Updating descendant node:', n.qr_id, 'to', checked);
                if (n.children) {
                    n.children = updateDescendants(n.children, checked);
                }
                return n;
            });
        };

        const updateAncestors = (nodes, targetNode) => {
            for (const n of nodes) {
                if (n.children && n.children.some(child => child.qr_id === targetNode.qr_id || updateAncestors(n.children, targetNode))) {
                    if (checked) {
                        n.checked = true;
                    } else {
                        n.checked = n.children.some(child => child.checked);
                    }
                    console.log('Updating ancestor node:', n.qr_id, 'to', n.checked);
                    return true;
                }
            }
            return false;
        };

        const newTreeData = updateNodeAndDescendants(treeData);
        updateAncestors(newTreeData, node);
        updateTreeData(newTreeData);
    };

    return (
        <div className='qrview-wrapper limit-width'>
            <div className="area-left" style={{ width: isLibraryOpen ? '30%' : '0%' }}>
                <div className='dyn-list-controls'>
                    <button className={`toggle-button ${!isLibraryOpen ? 'inverted' : ''}`} onClick={toggleLibrary}>
                        {isLibraryOpen ? 'Close Library' : 'Open Library'}
                    </button>
                </div>
                {isLibraryOpen && (
                    <div className="qr-library-wrapper">
                        <QrLibrary data={treeData} onCheck={updateTreeDataAndTableData} />
                    </div>
                )}
            </div>
            <div className="area-right" style={{ width: isLibraryOpen ? '70%' : '100%' }}>
                <RfpBuildList
                    tableData={tableData}
                    tabNames={tabNames}
                    handleTabNameChange={handleTabNameChange}
                    onSelectItem={onSelectItem}
                />
            </div>
        </div>
    );
};

export default QRview;

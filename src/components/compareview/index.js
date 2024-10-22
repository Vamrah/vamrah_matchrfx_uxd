import React, { useState } from 'react';
import VendorProposals from './vendorproposals';
import { dataproposalsQA } from "../../dataproposalsQA";
import { dataproposalsRates } from "../../dataproposalsRates";
import { dataproposalsSchedule } from "../../dataproposalsSchedule";
import { dataVendors } from "../../dataVendors";  // Import dataVendors
import FullQrDataList from './fullqrdatalist';

const CompareView = ({ tableData, treeData, updateTableData, updateTreeData, tabNames, handleTabNameChange, onSelectItem }) => {
    const [isLibraryOpen, setIsLibraryOpen] = useState(false);
    const [selectedVendors, setSelectedVendors] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [activeButton, setActiveButton] = useState('Q&A'); // Manage active button

    const toggleLibrary = () => {
        setIsLibraryOpen(!isLibraryOpen);
    };

    const handleCheckVendor = (vendor, checked) => {
        if (checked) {
            setSelectedVendors(prev => [...prev, vendor.vendor_name]);
        } else {
            setSelectedVendors(prev => prev.filter(v => v !== vendor.vendor_name));
        }
        console.log('Selected Vendors:', selectedVendors);
    };

    const handleSelectProduct = (product) => {
        setSelectedProduct(product);
        onSelectItem(product);
    };

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    // Determine the data to display based on the active button
    let displayData;
    switch (activeButton) {
        case 'Q&A':
            displayData = dataproposalsQA;
            break;
        case 'Rates':
            displayData = dataproposalsRates;
            break;
        case 'Schedule':
            displayData = dataproposalsSchedule;
            break;
        default:
            displayData = dataproposalsQA;
    }

    return (
        <div className='qrview-wrapper'>
            <div className="area-left" style={{ width: isLibraryOpen ? '250px' : '0' }}>
                <div className='dyn-list-controls'>
                    <button className={`toggle-button ${!isLibraryOpen ? 'inverted' : ''}`} onClick={toggleLibrary}>
                        {isLibraryOpen ? 'Close Vendors' : 'Open Vendors'}
                    </button>
                </div>
                {isLibraryOpen && (
                    <div className="vendor-library-wrapper">
                        <VendorProposals data={dataVendors} onCheck={handleCheckVendor} />
                    </div>
                )}
            </div>
            <div className="area-right" style={{ width: isLibraryOpen ? '100%' : '100%' }}>
                <div className='btn-bank'>
                    <button 
                        className={`v-btn v-btn-blue ${activeButton === 'Q&A' ? 'active' : 'inverted-blue'}`} 
                        onClick={() => handleButtonClick('Q&A')}
                    >
                        Q&A
                    </button>
                    <button 
                        className={`v-btn v-btn-blue ${activeButton === 'Rates' ? 'active' : 'inverted-blue'}`} 
                        onClick={() => handleButtonClick('Rates')}
                    >
                        Rates
                    </button>
                    <button 
                        className={`v-btn v-btn-blue ${activeButton === 'Schedule' ? 'active' : 'inverted-blue'}`} 
                        onClick={() => handleButtonClick('Schedule')}
                    >
                        Schedule
                    </button>
                </div>
                <FullQrDataList data={displayData} selectedVendors={selectedVendors} />
            </div>
        </div>
    );
};

export default CompareView;

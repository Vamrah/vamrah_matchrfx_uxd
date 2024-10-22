import React, { useState } from 'react';
import Tab from '../tab';
import { dataSummary } from '../../dataSummary';

const SummaryView = ({ onDocumentClick }) => {
    const tabs = ["Header", "Products in Scope"];
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const renderTableContent = (data) => {
        return data.map((item, index) => (
            <tr key={index}>
                <td>{item.attribute}</td>
                <td>
                    {item.pdfLink ? (
                        <button className="pdfLink text-btn tb-wrap" onClick={() => onDocumentClick(item.pdfLink)}>
                            {item.value}
                        </button>
                    ) : (
                        item.value
                    )}
                </td>
            </tr>
        ));
    };

    const getTabData = (tab) => {
        switch (tab) {
            case "Header":
                return dataSummary.tab1;
            case "Products in Scope":
                return dataSummary.tab2;
            default:
                return [];
        }
    };

    return (
        <div className="content summary-view">
            <div className="sub-panel" id="tabs-section-1">
                <div className='searchfield'>
                    <input type="text" className="search" placeholder="Search" />
                </div>
                <Tab tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
                {tabs.map((tab, index) => (
                    <div key={index} className={`tab-content ${activeTab === tab ? 'active' : ''}`} id={`tab${index + 1}`}>
                        <table className="detail-table linkContainer">
                            <thead>
                                <tr>
                                    <th scope="col">Attribute</th>
                                    <th scope="col">Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderTableContent(getTabData(tab))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SummaryView;

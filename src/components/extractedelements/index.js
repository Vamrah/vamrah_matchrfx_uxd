import React, { useState } from 'react';
import Tab from '../tab';
import { extractedElementsData } from '../../data';

const ExtractedElements = ({ onDocumentClick }) => {
    const tabs = ["Basic Life", "Additional Life", "Q&A"];
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const renderTableContent = (data) => {
        return data.map((item, index) => (
            <tr key={index}>
                <td>{item.attribute || item.number}</td>
                <td>
                    {item.class1 ? (
                        item.pdfClass ? (
                            <button className="pdfLink text-btn tb-wrap" onClick={() => onDocumentClick(item.pdfClass)}>
                                {item.class1}
                            </button>
                        ) : (
                            item.class1
                        )
                    ) : (
                        ''
                    )}
                </td>
                {activeTab !== "Q&A" && (
                    <td>
                        {item.class2 ? (
                            item.pdfClass ? (
                                <button className="pdfLink text-btn tb-wrap" onClick={() => onDocumentClick(item.pdfClass)}>
                                    {item.class2}
                                </button>
                            ) : (
                                item.class2
                            )
                        ) : (
                            ''
                        )}
                    </td>
                )}
            </tr>
        ));
    };

    const renderQATableContent = (data) => {
        return data.map((item, index) => (
            <tr key={index}>
                <td>{item.number}</td>
                <td>
                    <button className="pdfLink text-btn tb-wrap" onClick={() => onDocumentClick(item.pdfClass)}>
                        {item.question}
                    </button>
                </td>
            </tr>
        ));
    };

    const getTabData = (tab) => {
        switch (tab) {
            case "Basic Life":
                return extractedElementsData.tab1;
            case "Additional Life":
                return extractedElementsData.tab2;
            case "Q&A":
                return extractedElementsData.tab3;
            default:
                return [];
        }
    };

    return (
        <div className="content">
            <div className="sub-panel sub-panel-2" id="tabs-section-1">
                <div className='searchfield'>
                    <input type="text" className="search" placeholder="Search" />
                </div>
                <Tab tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
                {tabs.map((tab, index) => (
                    <div key={index} className={`tab-content ${activeTab === tab ? 'active' : ''}`} id={`tab${index + 1}`}>
                        <table className={`detail-table linkContainer ${tab === "Q&A" ? 'qa-table' : ''}`}>
                            <thead>
                                <tr>
                                    <th scope="col">{tab === "Q&A" ? "No." : "Attribute"}</th>
                                    <th scope="col">{tab === "Q&A" ? "Question" : "Class 1"}</th>
                                    {tab !== "Q&A" && <th scope="col">Class 2</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {tab === "Q&A" ? renderQATableContent(getTabData(tab)) : renderTableContent(getTabData(tab))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExtractedElements;

import React from 'react';

const Tab = ({ tabs, activeTab, setActiveTab }) => {
    return (
        <div className="toolbar">
            <div className="tabbar">
                <div className="items">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`tabbar-item ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tab;

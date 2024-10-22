import React, { useState } from 'react';
import Tab from '../tab/index.js';

const Panel = ({ tabs, initialActiveTab, id, children }) => {
     const [activeTab, setActiveTab] = useState(initialActiveTab);
    
     const changeTab = (tab) => {
      console.log('Switching to tab:', tab);
      setActiveTab(tab);
     };  


     return (
      <div className={`panel ${id}`}>
       {tabs && (
        <Tab tabs={tabs} activeTab={activeTab} setActiveTab={changeTab} />
       )}
       {tabs ? (
        tabs.map((tab, index) => (
         <div key={index} className={`tab-content ${activeTab === tab ? 'active' : ''}`} id={tab}>
          {activeTab === tab ? React.Children.toArray(children)[index] : null}
         </div>
        ))
       ) : (
        <div className="panel-content">
         {children}
        </div>
       )}
      </div>
     );
    };
    

export default Panel;

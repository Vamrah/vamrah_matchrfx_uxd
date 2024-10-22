import React from 'react';
import Panel from '../../../components/panel';
import BtnGroup from '../../../components/btngroup';

const AnalyzeResults = () => {
    const panel2Tabs = ["Notes", "Messages"];
    return (
        <div className="page-container">
            <div className='top-toolbar'>
                <div className='toolbar-1'>
                    <h1>AnalyzeResults</h1>
                    <BtnGroup text="ACTIONS" iconClass="caret arrow-down" onClick={() => console.log('Button clicked!')} />
                </div>
            </div>
            <div className="rfx-wrapper">
                <Panel initialActiveTab="tab1" id="panel-1">
                    <ul className="kpi-container">
                        <li className="kpi-item">
                            <select className="ps-dropdown undefined" placeholder="Decision">
                                <option className="label" disabled="">W/L</option>
                                <option value="12">Won</option>
                                <option value="13">Lost</option>
                            </select>
                            <span className="kpii-title">Decision</span>
                        </li>
                        <li className="kpi-item">
                            <h4 className="kpii-stat">0</h4>
                            <span className="kpii-title">Requirements Match #</span>
                        </li>
                        <li className="kpi-item">
                            <h4 className="kpii-stat">42</h4>
                            <span className="kpii-title">Total Days to Build Pages</span>
                        </li>
                        <li className="kpi-item">
                            <h4 className="kpii-stat">158</h4>
                            <span className="kpii-title">Total Days to Submit</span>
                        </li>
                    </ul>
                </Panel>
                <Panel tabs={panel2Tabs} initialActiveTab="Notes" id="panel-2" />
            </div>
        </div>
    );
};

export default AnalyzeResults;

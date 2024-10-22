import React from 'react';
import ListDocuments from '../listdocuments';

const ListRFPs = ({ collapsible = false, onDocumentClick, onRfpClick, rfpItems, activeRfpId }) => {
    return (
        <div className="rfp-list">
            {rfpItems.map((rfp, index) => {
                const checkboxId = `checkbox-${index}`;
                const isActive = rfp.id === activeRfpId;

                return (
                    <div
                        key={index}
                        className="rfp-list-item"
                        onClick={() => onRfpClick(rfp.id)}
                        style={{ backgroundColor: isActive ? '#eee' : 'transparent' }}
                    >
                        <div className="rfp-name">
                            <input type="checkbox" id={checkboxId} name={checkboxId} value={rfp.id} />
                            <label htmlFor={checkboxId}></label>
                            <h3 className="rfp-name-title">
                                {rfp.rfpTitle}
                            </h3>
                        </div>
                        <div className="rfp-sum-details">
                            <div className='rfp-sd-row'>
                                <div className='rfp-attr'>RFP ID</div>
                                <div>{rfp.id}</div>
                            </div>
                            <div className='rfp-sd-row'>
                                <div className='rfp-attr'>Project Start Date</div>
                                <div>{rfp.projectStartDate}</div>
                            </div>
                            <div className='rfp-sd-row'>
                                <div className='rfp-attr'>Proposal Deadline</div>
                                <div>{rfp.proposalDeadline}</div>
                            </div>
                            <div className='rfp-sd-row'>
                                <div className='rfp-attr'>Status</div>
                                <div>{rfp.status}</div>
                            </div>
                        </div>
                        <div className="rfp-doc-list">
                            <ListDocuments documents={rfp.documents} onDocumentClick={onDocumentClick} collapsible={collapsible} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ListRFPs;

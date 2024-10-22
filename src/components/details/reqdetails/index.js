import React, { useState, useEffect } from 'react';
import CapabilitySelect from '../../capabilityselect';

const ReqDetails = ({ requirement, updateRequirement }) => {
    const [reqText, setReqText] = useState(requirement?.requirement || '');
    const [sellerComments, setSellerComments] = useState(requirement?.capability_detail || '');
    const [notes, setNotes] = useState(requirement?.notes || '');
    const [libraryType, setLibraryType] = useState(requirement?.library_type || '');
    const [categoryName, setCategoryName] = useState(requirement?.category_name || '');
    const [capability, setCapability] = useState(requirement?.capability || '');

    useEffect(() => {
        setReqText(requirement?.requirement || '');
        setSellerComments(requirement?.capability_detail || '');
        setNotes(requirement?.notes || '');
        setLibraryType(requirement?.library_type || '');
        setCategoryName(requirement?.category_name || '');
        setCapability(requirement?.capability || '');
    }, [requirement]);

    const handleUpdateClick = () => {
        const updatedRequirement = {
            requirement: reqText,
            capability_detail: sellerComments,
            notes,
            library_type: libraryType,
            category_name: categoryName,
            capability,
        };
        updateRequirement(updatedRequirement);
    };

    return (
        <div className="build-requirements-details-content req-details-container">
            <div className="content">
                <button className="alert-note">!</button>
                <div className="brdc-content-wrap">
                    <div className="brdc-loc">
                        <div className="hro-input-wrapper-v2">
                            <div className="label out">Library Type:</div>
                            <input
                                className="hro-input-v2"
                                disabled
                                type="text"
                                placeholder=""
                                value={libraryType}
                            />
                        </div>
                        <div className="hro-input-wrapper-v2">
                            <div className="label out">Category Name:</div>
                            <input
                                className="hro-input-v2"
                                disabled
                                type="text"
                                placeholder=""
                                value={categoryName}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="question">Requirement:</label>
                        <textarea id="requirement" rows="2" cols="50" value={reqText} readOnly onChange={(e) => setReqText(e.target.value)}></textarea>
                        <div className="char-count">{reqText.length}/250</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="question">Vendor Capability Detail:</label>
                        <textarea id="requirement" rows="2" cols="50" value={sellerComments} onChange={(e) => setSellerComments(e.target.value)}></textarea>
                        <div className="char-count">{sellerComments.length}/750</div>
                    </div>
                    <div className="hro-input-wrapper-v2 brdc-req">
                        <div className="label going-in">Vendor Capability</div>
                        <CapabilitySelect
                            capability={capability}
                            onChange={(selectedOption) => setCapability(selectedOption.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="question">Notes (internal only):</label>
                        <textarea id="requirement" rows="2" cols="50" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
                        <div className="char-count">{notes.length}/</div>
                    </div>
                </div>
            </div>
            <div className="content"></div>
            <button
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '36px',
                    border: '0',
                    borderRadius: '5px',
                    background: '#fb5e32',
                    color: '#fff',
                    fontWeight: '700',
                    cursor: 'pointer'
                }}
                onClick={handleUpdateClick}
            >
                Update
            </button>
        </div>
    );
};

export default ReqDetails;

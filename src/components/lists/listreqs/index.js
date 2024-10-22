import React, { useState, useEffect, useRef } from 'react';
import SearchFilterControl from '../../searchfiltercontrol';
import CapabilitySelect from '../../capabilityselect';

const ListReqs = ({ requirements, onSelectRequirement, selectedRequirementIndex }) => {
    const [filteredRequirements, setFilteredRequirements] = useState(requirements);
    const [searchText, setSearchText] = useState('');
    const [highlightText, setHighlightText] = useState(() => (text, highlight) => text); // Default function
    const reqListRef = useRef(null);

    useEffect(() => {
        setFilteredRequirements(requirements);
    }, [requirements]);

    const scrollToMatch = (index) => {
        const reqItem = reqListRef.current.querySelector(`.list-builder-item[data-index='${index}']`);
        if (reqItem) {
            reqItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
            console.log('Scrolled to match at index:', index);
        }
    };

    return (
        <div>
            <SearchFilterControl
                items={requirements}
                setFilteredItems={setFilteredRequirements}
                scrollToMatch={scrollToMatch}
                setSearchText={setSearchText}
                setHighlightText={setHighlightText}
            />
            <div id="reqList" ref={reqListRef} className="list-builder-canvas scrollbar-thin reqlist-container">
                {filteredRequirements.map((item, index) => (
                    <div
                        key={index}
                        className={`list-builder-item ${selectedRequirementIndex === index ? 'selected' : ''}`}
                        data-index={index}
                        draggable="true"
                        onClick={() => onSelectRequirement(index)}
                    >
                        <div className="reqlist-item">
                            <div className="reqlist-item-content">
                                <div className='req-num'>
                                    {item.reqnum}
                                </div>
                                <span className="req">
                                    <div className="textarea-wrapper"><span className="emphasis">Requirement:</span>
                                        {highlightText(item.requirement, searchText)}
                                    </div>
                                </span>
                                <div className="priority-box-container">
                                    <div className="priority-box">
                                        <div className={`priority-box-item ${item.priority === 'H' ? 'selected' : ''}`}>H</div>
                                        <div className={`priority-box-item ${item.priority === 'M' ? 'selected' : ''}`}>M</div>
                                        <div className={`priority-box-item ${item.priority === 'L' ? 'selected' : ''}`}>L</div>
                                    </div>
                                </div>
                            </div>
                            <div className="reqlist-vendor-content">
                                <div className="capability-detail"><span className="emphasis">Vendor Capability:</span>
                                    {highlightText(item.capability_detail, searchText)}
                                </div>
                                <div className="priority-box-container">
                                    <CapabilitySelect
                                        capability={item.capability}
                                        onChange={(selectedOption) => console.log('Selected:', selectedOption)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListReqs;

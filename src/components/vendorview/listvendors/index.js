import React, { useState, useEffect, useRef } from 'react';
import SearchFilterControl from '../../searchfiltercontrol';


const ListVendors = ({ vendors, onSelectProduct }) => {
  const [filteredVendors, setFilteredVendors] = useState(vendors);
  const [selectedVendorIndex, setSelectedVendorIndex] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [highlightText, setHighlightText] = useState('');
  const vendorListRef = useRef(null);

  useEffect(() => {
    setFilteredVendors(vendors);
  }, [vendors]);

  const scrollToMatch = (index) => {
    const item = vendorListRef.current.querySelector(`[data-index="${index}"]`);
    if (item) {
      item.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div>
      <SearchFilterControl
        items={vendors}
        setFilteredItems={setFilteredVendors}
        scrollToMatch={scrollToMatch}
        setSearchText={setSearchText}
        setHighlightText={setHighlightText}
      />
      <div id="leftPanel" ref={vendorListRef}>
        {filteredVendors.map((vendor, index) => (
          <div
            key={index}
            className={`vendor-item ${selectedVendorIndex === index ? 'selected' : ''}`}
            data-index={index}
            onClick={() => {
              setSelectedVendorIndex(index);
              onSelectProduct(vendor);
            }}
          >
            <span className="vendor-listing">
              <div className="logo-box"></div>
              <div className="vendor-name"><span className='emphasis'>{vendor.vendor_name}:</span>{vendor.product_name}</div>
            </span>
            <div className="list-builder-item-extras">
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <div className="flex-container flex-row"></div>
                <button className="list-builder-item-trash"></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListVendors;

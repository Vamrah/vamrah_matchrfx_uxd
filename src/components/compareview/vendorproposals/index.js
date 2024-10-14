import React, { useState, useEffect } from 'react';

const VendorProposals = ({ data, onCheck }) => {
  const [selectedVendors, setSelectedVendors] = useState({});

  useEffect(() => {
    console.log('VendorProposals data:', data);
  }, [data]);

  const handleCheckboxChange = (event, vendor) => {
    const newSelectedVendors = {
      ...selectedVendors,
      [vendor.vendor_name]: event.target.checked
    };
    setSelectedVendors(newSelectedVendors);
    console.log('Checkbox changed for vendor:', vendor.vendor_name, 'to', event.target.checked);
    onCheck(vendor, event.target.checked);
  };

  const vendors = data[0].vendors;  // Correcting the data structure

  return (
    <div style={{ maxHeight: '600px', overflowY: 'scroll' }}>
      <div className="vendor-library-search">
        <input type="search" placeholder="Search" />
      </div>
      {vendors.map((vendor) => (
        <div key={vendor.id} style={{ marginLeft: '0px' }}>
          <div className="vendor-library-node">
            <div className="v-cbx-wrapper">
              <input
                type="checkbox"
                checked={selectedVendors[vendor.vendor_name] || false}
                onChange={(event) => handleCheckboxChange(event, vendor)}
                style={{ margin: '5px' }}
              />
              <label className="name">
                <span>{vendor.vendor_name}</span>
              </label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VendorProposals;

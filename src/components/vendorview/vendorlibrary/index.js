import React, { useState, useEffect } from 'react';
import CaretClose from './../../../assets/icons/caret-close.svg';
import CaretOpen from './../../../assets/icons/caret-open.svg';


const VendorLibrary = ({ data, onCheck }) => {
  const [collapsedNodes, setCollapsedNodes] = useState({});

  useEffect(() => {
    console.log('VendorLibrary data:', data);
  }, [data]);

  const handleCheckboxChange = (event, vendor, product) => {
    console.log('Checkbox changed for vendor:', vendor.id, 'product:', product ? product.product_name : 'N/A', 'to', event.target.checked);
    onCheck(vendor, event.target.checked, product);
  };

  const handleCaretClick = (vendorId) => {
    setCollapsedNodes({
      ...collapsedNodes,
      [vendorId]: !collapsedNodes[vendorId],
    });
    console.log('Caret clicked for vendor:', vendorId, 'collapsed:', collapsedNodes[vendorId]);
  };

  const vendors = data[0].vendors;  // Correcting the data structure

  return (
    <div style={{ maxHeight: '600px', overflowY: 'scroll' }}>
      <div className="vendor-library-search">
        <input type="search" placeholder="Search" />
      </div>
      {vendors.map((vendor) => {
        const isCollapsed = collapsedNodes[vendor.id];
        const hasProducts = vendor.products && vendor.products.length > 0;
        console.log('Rendering vendor:', vendor.vendor_name, 'collapsed:', isCollapsed, 'hasProducts:', hasProducts);
        return (
          <div key={vendor.id} style={{ marginLeft: '0px' }}>
            <div className="vendor-library-node">
              {hasProducts && (
                <span className="icon-position" onClick={() => handleCaretClick(vendor.id)}>
                  <img
                    src={isCollapsed ? CaretClose : CaretOpen}
                    alt="caret icon"
                    className={isCollapsed ? 'caret-closed' : 'caret-open'}
                  />
                </span>
              )}
              <div className="v-cbx-wrapper">
                <input
                  type="checkbox"
                  checked={vendor.selected || false}
                  onChange={(event) => handleCheckboxChange(event, vendor, null)}
                  style={{ margin: '5px' }}
                />
                <label className="name">
                  <span>{vendor.vendor_name}</span>
                </label>
              </div>
            </div>
            {!isCollapsed && hasProducts && (
              <div style={{ marginLeft: '22px' }}>
                {vendor.products.map((product) => (
                  <div key={product.product_name} className="vendor-library-node" style={{ marginLeft: '37px' }}>
                    <div className="v-cbx-wrapper">
                      <input
                        type="checkbox"
                        checked={product.selected || false}
                        onChange={(event) => handleCheckboxChange(event, vendor, product)}
                        style={{ margin: '5px' }}
                      />
                      <label className="name">
                        <span>{product.product_name}</span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default VendorLibrary;

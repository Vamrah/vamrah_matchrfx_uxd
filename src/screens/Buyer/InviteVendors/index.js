import React, { useState, useEffect } from 'react';
import Panel from '../../../components/panel';
import BtnGroup from '../../../components/btngroup';
import Messages from '../../../components/messages';
import VendorView from '../../../components/vendorview';
import ContactVendorForm from '../../../components/vendorview/contactvendorsform';
import { dataVendors } from '../../../dataVendors'; // Import the vendor data


const InviteVendors = () => {
  const [vendorData, setVendorData] = useState(dataVendors[0].vendors);  // Adjusting data structure to be an array of vendors
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    console.log("Initial vendor data:", vendorData);
  }, [vendorData]);

  const handleSelectVendor = (index) => {
    const selected = vendorData[index];
    setSelectedVendor(selected);
    console.log("Vendor selected:", selected);
  };

  const updateVendorDataAndSelectedVendors = (vendor, checked, product) => {
    console.log('updateVendorData called with:', vendor, checked, product);

    const updateVendorSelection = (vendors) => {
      return vendors.map((v) => {
        if (v.id === vendor.id) {
          if (product) {
            v.products = v.products.map((p) => {
              if (p.product_name === product.product_name) {
                p.selected = checked;
              }
              return p;
            });
          } else {
            v.selected = checked;
            v.products = v.products.map((p) => ({
              ...p,
              selected: checked,
            }));
          }
        }
        return v;
      });
    };

    const newVendorData = updateVendorSelection(vendorData);
    setVendorData(newVendorData);
    setSelectedVendor(newVendorData.find(v => v.id === vendor.id));
    console.log('Updated vendor data:', newVendorData);
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const dropdownItems = [
    // Other dropdown items...
  ];

  const panel2Tabs = ["Vendor Detail", "Notes", "Messages"];

  return (
    <div className="page-container">
      <div className="top-toolbar">
        <div className="toolbar-1">
          <h1>Invite Vendors</h1>
          <BtnGroup text="ACTIONS" iconClass="caret arrow-down" dropdownItems={dropdownItems} />
        </div>
      </div>
      <div className="rfx-wrapper library-access">
        <Panel initialActiveTab="tab1" id="panel-1">
          <div>
            <VendorView
              vendorData={vendorData}
              updateVendorData={updateVendorDataAndSelectedVendors}
              onSelectVendor={handleSelectVendor}
              onSelectProduct={handleSelectProduct}
            />
          </div>
        </Panel>
        <Panel tabs={panel2Tabs} initialActiveTab="Vendor Detail" id="panel-2">
          <ContactVendorForm vendor={selectedProduct} />
          <div>Notes</div>
          <div>Messages</div>
        </Panel>
      </div>
    </div>
  );
};

export default InviteVendors;

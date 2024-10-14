import React, { useState, useEffect } from 'react';
import VendorLibrary from './vendorlibrary';
import ListVendors from './listvendors';


const VendorView = ({ vendorData, updateVendorData, onSelectVendor, onSelectProduct }) => {
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    console.log('VendorView vendorData:', vendorData);
  }, [vendorData]);

  const toggleLibrary = () => {
    setIsLibraryOpen(!isLibraryOpen);
  };

  const handleCheckVendor = (vendor, checked, product) => {
    updateVendorData(vendor, checked, product);
    if (product) {
      if (checked) {
        setSelectedProducts((prev) => [...prev, { vendor_name: vendor.vendor_name, ...product }]);
      } else {
        setSelectedProducts((prev) => prev.filter((p) => p.product_name !== product.product_name));
      }
    } else {
      if (checked) {
        setSelectedProducts((prev) => [
          ...prev,
          ...vendor.products.map((product) => ({ vendor_name: vendor.vendor_name, ...product })),
        ]);
      } else {
        setSelectedProducts((prev) => prev.filter((p) => p.vendor_name !== vendor.vendor_name));
      }
    }
    console.log('Selected products:', selectedProducts);
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    onSelectProduct(product);
  };

  useEffect(() => {
    console.log('Updated selected products:', selectedProducts);
  }, [selectedProducts]);

  return (
    <div className='vendorview-wrapper'>
      <div className="area-left" style={{ width: isLibraryOpen ? '30%' : '0%' }}>
        <div className='dyn-list-controls'>
          <button className={`toggle-button ${!isLibraryOpen ? 'inverted' : ''}`} onClick={toggleLibrary}>
            {isLibraryOpen ? 'Close Vendors' : 'Open Vendors'}
          </button>
        </div>
        {isLibraryOpen && (
          <div className="vendor-library-wrapper">
            <VendorLibrary data={[{ vendors: vendorData }]} onCheck={handleCheckVendor} />
          </div>
        )}
      </div>
      <div className="area-right" style={{ width: isLibraryOpen ? '70%' : '100%' }}>
        <ListVendors vendors={selectedProducts} onSelectProduct={handleSelectProduct} />
      </div>
    </div>
  );
};

export default VendorView;

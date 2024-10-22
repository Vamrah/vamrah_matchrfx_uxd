import React, { useState } from 'react';
import { FaBuilding, FaProductHunt, FaUser, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactVendorForm = ({ vendor }) => {
  const [timestamp, setTimestamp] = useState(null);

  if (!vendor) {
    return <div>Please select a vendor to view details.</div>;
  }

  const handleSendClick = () => {
    const currentTimestamp = new Date().toLocaleString();
    setTimestamp(currentTimestamp);
  };

  return (
    <div className="contact-vendor-form">
      <h2>Vendor Details</h2>
      <div className="form-group">
        <label>
          <FaBuilding />
          Vendor Name:
        </label>
        <input type="text" value={vendor.vendor_name} readOnly />
      </div>
      <div className="form-group">
        <label>
          <FaProductHunt />
          Product Name:
        </label>
        <input type="text" value={vendor.product_name} readOnly />
      </div>
      <div className="form-group">
        <label>
          <FaUser />
          Contact 1:
        </label>
        <input type="text" value={vendor.contact1.full_name} readOnly />
        <label>
          <FaEnvelope />
          Email:
        </label>
        <input type="email" value={vendor.contact1.email} readOnly />
      </div>
      <div className="form-group">
        <label>
          <FaUser />
          Contact 2:
        </label>
        <input type="text" value={vendor.contact2.full_name} readOnly />
        <label>
          <FaEnvelope />
          Email:
        </label>
        <input type="email" value={vendor.contact2.email} readOnly />
      </div>
      <button onClick={handleSendClick}>Send</button>
      {timestamp && (
        <div className="timestamp">
          <FaClock /> Sent at: {timestamp}
        </div>
      )}
    </div>
  );
};

export default ContactVendorForm;

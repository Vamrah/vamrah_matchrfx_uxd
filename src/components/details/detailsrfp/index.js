import React, { useState, useEffect } from 'react';

const DetailsRFP = ({ rfpDetails, onUpdate }) => {
    const [formData, setFormData] = useState(rfpDetails);

    useEffect(() => {
        setFormData(rfpDetails);
    }, [rfpDetails]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleMultiSelectChange = (e) => {
        const { name, options } = e.target;
        const selectedValues = Array.from(options)
            .filter((option) => option.selected)
            .map((option) => option.value);
        setFormData((prevData) => ({
            ...prevData,
            [name]: selectedValues,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="rfp-details-form-container">
            <div className="form-group-row">
                <div className="form-group">
                    <label>RFP Title</label>
                    <input type="text" name="rfpTitle" value={formData.rfpTitle} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>RFP ID</label>
                    <input type="text" name="id" value={formData.id} readOnly />
                </div>
            </div>
            <div className="form-group-row">
                <div className="form-group">
                    <label>Company/Client Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Status</label>
                    <input type="text" name="status" value={formData.status} readOnly />
                </div>
            </div>
            <div className="form-group-row">
                <div className="form-group">
                    <label>Project Start Date</label>
                    <input type="date" name="projectStartDate" value={formData.projectStartDate} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Proposal Deadline</label>
                    <input type="date" name="proposalDeadline" value={formData.proposalDeadline} onChange={handleChange} />
                </div>
            </div>
            <div className="form-group-row">
                <div className="form-group">
                    <label>Target Decision Date</label>
                    <input type="date" name="targetDecisionDate" value={formData.targetDecisionDate} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Target Live Date</label>
                    <input type="date" name="targetLiveDate" value={formData.targetLiveDate} onChange={handleChange} />
                </div>
            </div>
            <div className="form-group">
                <label>Solution Category</label>
                <select name="solutionCategory" multiple value={formData.solutionCategory} onChange={handleMultiSelectChange}>
                    <option value="Life">Life</option>
                    <option value="STD">STD</option>
                    <option value="LTD">LTD</option>
                    <option value="Dental">Dental</option>
                    <option value="Vision">Vision</option>
                </select>
            </div>
            <div className="form-group-row">
                <div className="form-group">
                    <label>Company/Client Industry</label>
                    <select name="companyIndustry" value={formData.companyIndustry} onChange={handleChange}>
                        <option value="Financial">Financial</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Public Sector">Public Sector</option>
                        <option value="Energy">Energy</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Employees/Lives</label>
                    <input type="text" name="employees" value={formData.employees} onChange={handleChange} />
                </div>
            </div>
            <button type="submit">Update</button>
        </form>
    );
};

export default DetailsRFP;

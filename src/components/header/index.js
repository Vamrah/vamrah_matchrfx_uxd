import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const [navType, setNavType] = useState('buyer'); // default to 'buyer' or 'seller'

    const getNavClass = (path) => {
        return location.pathname === path ? 'navigation-item current' : 'navigation-item';
    };

    const getPrimaryClass = (path) => {
        return location.pathname === path ? 'primary-item current' : 'primary-item';
    };

    const handleNavTypeChange = (type) => {
        setNavType(type);
    };

    return (
        <header className="main-header">
            <div className="inner-header">
                <div className="logo-box">
                    <img src="https://assets.codepen.io/1690529/matchRFX_logo_2.svg" alt="logo" />
                    <div className="central-links">
                        <a href="#" onClick={() => handleNavTypeChange('buyer')}>Brokers</a><span>&nbsp;:&nbsp;</span>
                        <a href="#" onClick={() => handleNavTypeChange('seller')}>Carriers</a>
                    </div>
                </div>
                <div className="top-navigations">
                    {navType === 'buyer' ? (
                        <div className="navigation-wrapper nw-horiz">
                            <div className="navigation-wrapper-lines"></div>
                            <div className={getNavClass('/dashboard')}>
                                <NavLink to="/dashboard" className={getPrimaryClass('/dashboard')}>
                                    <div className="box-marker"></div>
                                    <label>RFP Dashboard</label>
                                </NavLink>
                            </div>
                            <div className={getNavClass('/build-qa-questions')}>
                                <NavLink to="/build-qa-questions" className={getPrimaryClass('/build-qa-questions')}>
                                    <div className="box-marker"></div>
                                    <label>Build Requirements</label>
                                </NavLink>
                            </div>
                            <div className={getNavClass('/build-pages-RFP')}>
                                <NavLink to="/build-pages-RFP" className={getPrimaryClass('/build-pages-RFP')}>
                                    <div className="box-marker"></div>
                                    <label>Build Pages</label>
                                </NavLink>
                            </div>
                            <div className={getNavClass('/review-final-RFP')}>
                                <NavLink to="/review-final-RFP" className={getPrimaryClass('/review-final-RFP')}>
                                    <div className="box-marker"></div>
                                    <label>Review Final RFP</label>
                                </NavLink>
                            </div>
                            <div className={getNavClass('/invite-vendors')}>
                                <NavLink to="/invite-vendors" className={getPrimaryClass('/invite-vendors')}>
                                    <div className="box-marker"></div>
                                    <label>Invite Vendors</label>
                                </NavLink>
                            </div>
                            <div className={getNavClass('/compare-proposals')}>
                                <NavLink to="/compare-proposals" className={getPrimaryClass('/compare-proposals')}>
                                    <div className="box-marker"></div>
                                    <label>Compare Proposals</label>
                                </NavLink>
                            </div>
                        </div>
                    ) : (
                        <div className="navigation-wrapper nw-horiz">
                            <div className="navigation-wrapper-lines"></div>
                            <div className={getNavClass('/review-rfp')}>
                                <NavLink to="/review-rfp" className={getPrimaryClass('/review-rfp')}>
                                    <div className="box-marker"></div>
                                    <label>Review RFP</label>
                                </NavLink>
                            </div>
                            <div className={getNavClass('/build-qa-answers')}>
                                <NavLink to="/build-qa-answers" className={getPrimaryClass('/build-qa-answers')}>
                                    <div className="box-marker"></div>
                                    <label>Build Q&amp;A Answers</label>
                                </NavLink>
                            </div>
                            <div className={getNavClass('/match-requirements')}>
                                <NavLink to="/match-requirements" className={getPrimaryClass('/match-requirements')}>
                                    <div className="box-marker"></div>
                                    <label>Match Requirements</label>
                                </NavLink>
                            </div>
                            <div className={getNavClass('/build-pages')}>
                                <NavLink to="/build-pages" className={getPrimaryClass('/build-pages')}>
                                    <div className="box-marker"></div>
                                    <label>Build Pages</label>
                                </NavLink>
                            </div>
                            <div className={getNavClass('/review-submit')}>
                                <NavLink to="/review-submit" className={getPrimaryClass('/review-submit')}>
                                    <div className="box-marker"></div>
                                    <label>Review &amp; Submit</label>
                                </NavLink>
                            </div>
                            <div className={getNavClass('/analyze-results')}>
                                <NavLink to="/analyze-results" className={getPrimaryClass('/analyze-results')}>
                                    <div className="box-marker"></div>
                                    <label>Analyze Results</label>
                                </NavLink>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;

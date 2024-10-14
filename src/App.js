import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import '../src/index.css';
import Header from './components/header/index.js';
import ReviewRFP from './screens/Seller/ReviewRFP/index.js';
import BuildQAndAAnswers from './screens/Seller/BuildQAndAAnswers/index.js';
import MatchRequirements from './screens/Seller/MatchRequirements/index.js';
import BuildPages from './screens/Seller/BuildPages/index.js';
import ReviewSubmit from './screens/Seller/ReviewSubmit/index.js';
import AnalyzeResults from './screens/Seller/AnalyzeResults/index.js';
import BuyerDashboard from './screens/Buyer/BuyerDashboard/index.js';
import BuildRequirements from './screens/Buyer/BuildRequirements/index.js';
import BuildPagesRFP from './screens/Buyer/BuildPagesRFP/index.js';
import ReviewFinalRFP from './screens/Buyer/ReviewFinalRFP/index.js';
import InviteVendors from './screens/Buyer/InviteVendors/index.js';
import CompareProposals from './screens/Buyer/CompareProposals/index.js';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    {/* Seller Routes */}
                    <Route path="/review-rfp" element={<ReviewRFP />} />
                    <Route path="/build-qa-answers" element={<BuildQAndAAnswers />} />
                    <Route path="/match-requirements" element={<MatchRequirements />} />
                    <Route path="/build-pages" element={<BuildPages />} />
                    <Route path="/review-submit" element={<ReviewSubmit />} />
                    <Route path="/analyze-results" element={<AnalyzeResults />} />

                    {/* Buyer Routes */}
                    <Route path="/dashboard" element={<BuyerDashboard />} />
                    <Route path="/build-qa-questions" element={<BuildRequirements />} />
                    <Route path="/build-pages-RFP" element={<BuildPagesRFP />} />
                    <Route path="/review-final-RFP" element={<ReviewFinalRFP />} />
                    <Route path="/invite-vendors" element={<InviteVendors />} />
                    <Route path="/compare-proposals" element={<CompareProposals />} />
                    {/* Default Route */}
                    <Route path="/" element={<Navigate to="/dashboard" />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

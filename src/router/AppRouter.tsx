import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';

// Page Components
import HomePage from '../pages/HomePage';
import SolutionsPage from '../pages/SolutionsPage';
import AIStrategyPage from '../pages/solutions/AIStrategyPage';
import IndustrySolutionsPage from '../pages/solutions/IndustrySolutionsPage';

// SAP Services
import CXServicesPage from '../pages/solutions/CXServicesPage';
import S4HANAPage from '../pages/solutions/S4HANAPage';
import FSMPage from '../pages/solutions/FSMPage';
import BTPCPIPage from '../pages/solutions/BTPCPIPage';
import CDCPage from '../pages/solutions/CDCPage';
import CommerceCPQPage from '../pages/solutions/CommerceCPQPage';
import ManagedSAPPage from '../pages/solutions/ManagedSAPPage';

// AI Strategy
import AssessmentPage from '../pages/solutions/ai/AssessmentPage';
import GovernancePage from '../pages/solutions/ai/GovernancePage';
import RASPPage from '../pages/solutions/ai/RASPPage';
import PredictivePage from '../pages/solutions/ai/PredictivePage';
import ConversationalPage from '../pages/solutions/ai/ConversationalPage';
import TelemetryPage from '../pages/solutions/ai/TelemetryPage';

// Industries
import IndustriesPage from '../pages/IndustriesPage';
import ManufacturingPage from '../pages/industries/ManufacturingPage';
import CPGPage from '../pages/industries/CPGPage';
import UtilitiesPage from '../pages/industries/UtilitiesPage';
import FinancialServicesPage from '../pages/industries/FinancialServicesPage';

import AboutPage from '../pages/AboutPage';
import OurStoryPage from '../pages/about/OurStoryPage';
import OurTeamPage from '../pages/about/OurTeamPage';
import CareersPage from '../pages/about/CareersPage';
import PartnershipsPage from '../pages/about/PartnershipsPage';
import ResourcesPage from '../pages/ResourcesPage';
import CaseStudiesPage from '../pages/resources/CaseStudiesPage';
import BlogPage from '../pages/resources/BlogPage';
import WhitepapersPage from '../pages/resources/WhitepapersPage';
import VideosPage from '../pages/resources/VideosPage';
import ContactPage from '../pages/ContactPage';
import SalesInquiryPage from '../pages/contact/SalesInquiryPage';
import GeneralInquiryPage from '../pages/contact/GeneralInquiryPage';
import SupportPage from '../pages/contact/SupportPage';
import InvestorsPage from '../pages/contact/InvestorsPage';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <HeaderNav />
        
        <main className="flex-grow">
          <Routes>
            {/* Home */}
            <Route path="/" element={<HomePage />} />
            
            {/* Solutions */}
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/solutions/ai-strategy-transformations" element={<AIStrategyPage />} />
            <Route path="/solutions/industry-solutions" element={<IndustrySolutionsPage />} />
            
            {/* SAP Services */}
            <Route path="/solutions/cx" element={<CXServicesPage />} />
            <Route path="/solutions/s4hana" element={<S4HANAPage />} />
            <Route path="/solutions/fsm" element={<FSMPage />} />
            <Route path="/solutions/btp-cpi" element={<BTPCPIPage />} />
            <Route path="/solutions/cdc" element={<CDCPage />} />
            <Route path="/solutions/commerce-cpq" element={<CommerceCPQPage />} />
            <Route path="/solutions/managed-sap" element={<ManagedSAPPage />} />
            
            {/* AI Strategy */}
            <Route path="/solutions/ai/assessment" element={<AssessmentPage />} />
            <Route path="/solutions/ai/governance" element={<GovernancePage />} />
            <Route path="/solutions/ai/rasp" element={<RASPPage />} />
            <Route path="/solutions/ai/predictive" element={<PredictivePage />} />
            <Route path="/solutions/ai/conversational" element={<ConversationalPage />} />
            <Route path="/solutions/ai/telemetry" element={<TelemetryPage />} />
            
            {/* Industries */}
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/solutions/industry-solutions" element={<IndustriesPage />} />
            <Route path="/industries/manufacturing" element={<ManufacturingPage />} />
            <Route path="/industries/cpg" element={<CPGPage />} />
            <Route path="/industries/utilities" element={<UtilitiesPage />} />
            <Route path="/industries/financial-services" element={<FinancialServicesPage />} />
            
            {/* About */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/our-story" element={<OurStoryPage />} />
            <Route path="/about/our-team" element={<OurTeamPage />} />
            <Route path="/about/careers" element={<CareersPage />} />
            <Route path="/about/partnerships" element={<PartnershipsPage />} />
            
            {/* Resources */}
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/case-studies" element={<CaseStudiesPage />} />
            <Route path="/resources/blog" element={<BlogPage />} />
            <Route path="/resources/whitepapers" element={<WhitepapersPage />} />
            <Route path="/resources/videos" element={<VideosPage />} />
            
            {/* Contact */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/contact/sales-inquiry" element={<SalesInquiryPage />} />
            <Route path="/contact/general-inquiry" element={<GeneralInquiryPage />} />
            <Route path="/contact/support" element={<SupportPage />} />
            <Route path="/contact/investors" element={<InvestorsPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
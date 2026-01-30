import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';
import GridBackground from '../components/GridBackground';

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

// New Service Pages
import SAPSolutionsPage from '../pages/services/SAPSolutionsPage';
import EnterpriseCXPage from '../pages/services/EnterpriseCXPage';
import AIOrchestrationPage from '../pages/services/AIOrchestrationPage';
import JouleEnablementPage from '../pages/services/JouleEnablementPage';
import UpgradeSAPPage from '../pages/services/UpgradeSAPPage';

// AI Strategy
import AssessmentPage from '../pages/solutions/ai/AssessmentPage';
import GovernancePage from '../pages/solutions/ai/GovernancePage';
import RASPPage from '../pages/solutions/ai/RASPPage';
import PredictivePage from '../pages/solutions/ai/PredictivePage';
import ConversationalPage from '../pages/solutions/ai/ConversationalPage';
import TelemetryPage from '../pages/solutions/ai/TelemetryPage';

// Industries
import ManufacturingPage from '../pages/industries/ManufacturingPage';
import CPGPage from '../pages/industries/CPGPage';
import UtilitiesPage from '../pages/industries/UtilitiesPage';
import FinancialServicesPage from '../pages/industries/FinancialServicesPage';

// About Pages
import About from '../components/About';
import OurStoryPage from '../pages/about/OurStoryPage';
import OurTeamPage from '../pages/about/OurTeamPage';
import CareersPage from '../pages/about/CareersPage';
import PartnershipsPage from '../pages/about/PartnershipsPage';

// About components
import Leadership from '../components/Leadership';
import Careers from '../components/Careers';
import InvestorRelations from '../components/InvestorRelations';
import Partnerships from '../components/Partnerships';
import Alliances from '../components/Alliances';

// Resources
import ResourcesPage from '../pages/ResourcesPage';
import BlogPage from '../pages/resources/BlogPage';
import WhitepapersPage from '../pages/resources/WhitepapersPage';
import VideosPage from '../pages/resources/VideosPage';
import ThoughtLeadershipPage from '../pages/resources/ThoughtLeadershipPage';
import ResearchReportsPage from '../pages/resources/ResearchReportsPage';
import EventsPage from '../pages/resources/EventsPage';

// Contact
import ContactPage from '../pages/ContactPage';
import SalesInquiryPage from '../pages/contact/SalesInquiryPage';
import GeneralInquiryPage from '../pages/contact/GeneralInquiryPage';
import SupportPage from '../pages/contact/SupportPage';
import InvestorsPage from '../pages/contact/InvestorsPage';

// Main Pages
import Solutions from '../pages/Solutions';
import CaseStudies from '../pages/CaseStudies';
import Resources from '../pages/Resources';
import Contact from '../pages/Contact';
import BlogPost from '../pages/BlogPost';
import CaseStudyDetail from '../pages/CaseStudyDetail';

// 404 Page
import NotFoundPage from '../pages/NotFoundPage';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col relative">
        {/* Subtle Grid Background for all pages */}
        <GridBackground opacity={0.02} gridSize={40} color="#000000" />

        <HeaderNav />

        <main className="flex-grow relative">
          <Routes>
            {/* Home */}
            <Route path="/" element={<HomePage />} />

            {/* Services */}
            <Route path="/services" element={<SolutionsPage />} />
            <Route path="/ai" element={<AIStrategyPage />} />
            <Route path="/system" element={<IndustrySolutionsPage />} />

            {/* New Service Pages */}
            <Route path="/services/sap-solutions" element={<SAPSolutionsPage />} />
            <Route path="/services/enterprise-cx" element={<EnterpriseCXPage />} />
            <Route path="/services/ai-orchestration" element={<AIOrchestrationPage />} />
            <Route path="/services/joule-enablement" element={<JouleEnablementPage />} />
            <Route path="/services/upgrade-sap" element={<UpgradeSAPPage />} />

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
            <Route path="/industries" element={<IndustrySolutionsPage />} />
            <Route path="/industries/manufacturing" element={<ManufacturingPage />} />
            <Route path="/industries/cpg" element={<CPGPage />} />
            <Route path="/industries/utilities" element={<UtilitiesPage />} />
            <Route path="/industries/financial-services" element={<FinancialServicesPage />} />

            {/* About */}
            <Route path="/about" element={<About />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/investor-relations" element={<InvestorRelations />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/alliances" element={<Alliances />} />
            <Route path="/about/our-story" element={<OurStoryPage />} />
            <Route path="/about/our-team" element={<OurTeamPage />} />
            <Route path="/about/careers" element={<CareersPage />} />
            <Route path="/about/partnerships" element={<PartnershipsPage />} />

            {/* Solutions (Main) */}
            <Route path="/solutions" element={<Solutions />} />

            {/* Resources */}
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/case-studies" element={<CaseStudies />} />
            <Route path="/resources/blog" element={<BlogPage />} />
            <Route path="/resources/whitepapers" element={<WhitepapersPage />} />
            <Route path="/resources/videos" element={<VideosPage />} />
            <Route path="/resources/thought-leadership" element={<ThoughtLeadershipPage />} />
            <Route path="/resources/research-reports" element={<ResearchReportsPage />} />
            <Route path="/resources/events" element={<EventsPage />} />

            {/* Blog and Case Study Details */}
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/case-study/:slug" element={<CaseStudyDetail />} />

            {/* Alternate routes (for SEO/backwards compatibility) */}
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/insights" element={<BlogPage />} />
            <Route path="/tech-updates" element={<BlogPage />} />

            {/* Contact */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/sales-inquiry" element={<SalesInquiryPage />} />
            <Route path="/contact/general-inquiry" element={<GeneralInquiryPage />} />
            <Route path="/contact/support" element={<SupportPage />} />
            <Route path="/contact/investors" element={<InvestorsPage />} />

            {/* Legacy redirects - keep for backwards compatibility */}
            <Route path="/resources-legacy" element={<ResourcesPage />} />
            <Route path="/solutions-legacy" element={<SolutionsPage />} />
            <Route path="/contact-legacy" element={<ContactPage />} />

            {/* 404 - Catch all unmatched routes */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;

import React from "react";
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Header from "../src/include/Header";
import Footer from "./include/Footer";
import HomePage from "./pages/home";
import AboutPage from "./pages/About";
import VisionMissionPage from "./pages/vision-mission";
import InfrastructurePage from "./pages/Infrastructure";
import ManagementPage from "./pages/Management";
import TeachersListPage from "./pages/TeachersList";
import AcademicPage from "./pages/Academic";
import CurriculumPage from "./pages/Curriculum";
import SchoolFeesPage from "./pages/SchoolFees";
import PromotionRulesPage from './pages/PromotionRules';
import StudentCarePage from './pages/StudentCare';
import AdmissionPage from './pages/Admission';
import EventsPage from './pages/Events';
import AnnouncementsPage from './pages/Announcements';
import PhotoGalleryPage from './pages/PhotoGallery';
import PublicationsPage from './pages/Publications';
import AchievementsPage from './pages/Achievements';
import WinnersListPage from './pages/WinnersList';
import ResultsPage from './pages/Results';
import SuccessStoriesPage from './pages/SuccessStories';
import FacilituesPage from './pages/Facilitues';
import AboutTheSchoolPage from './pages/AboutTheSchool';
import './App.css';
import FaqPage from "./pages/Faq";
import Careers from "./pages/Careers";
import TermsandPolicies from "./pages/TermsandPolicies";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/about" element={<AboutPage />} />
              <Route path="/about-the-school" element={<AboutTheSchoolPage />} />
              <Route path="/vision-mission" element={<VisionMissionPage />} />
              <Route path="/infrastructure" element={<InfrastructurePage />} />
              <Route path="/management" element={<ManagementPage />} />
              <Route path="/teachers-list" element={<TeachersListPage />} />

              <Route path="/academic" element={<AcademicPage />} />
              <Route path="/curriculum" element={<CurriculumPage />} />
              <Route path="/school-fees" element={<SchoolFeesPage />} />
              <Route path="/promotion-rules" element={<PromotionRulesPage />} />
              <Route path="/student-care" element={<StudentCarePage />} />
              <Route path="/exam-time-table" element={<TeachersListPage />} />
              
              <Route path="/admission" element={<AdmissionPage />} />
              
              <Route path="/events" element={<EventsPage />} />
              <Route path="/announcements" element={<AnnouncementsPage />} />
              <Route path="/photogallery" element={<PhotoGalleryPage />} />
              <Route path="/publications" element={<PublicationsPage />} />

              <Route path="/achievements" element={<AchievementsPage />} />
              <Route path="/winners-list" element={<WinnersListPage />} />
              <Route path="/success-stories" element={<SuccessStoriesPage />} />
              <Route path="/results" element={<ResultsPage />} />
              
              <Route path="/facilities" element={<FacilituesPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/careers" element={<Careers/>} />
              <Route path="/termsandpolicies" element={<TermsandPolicies/>} />
              

          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; 
import Treatments from './Pages/Treatments/Treatments';
import Header from './Components/Header';
import Contact from './Pages/Contact/Contact';
import Employees from './Pages/Employees/Employees';
import About from './Pages/About/About';
import Referral from './Pages/Referral/Referral';
import AppointmentLetter from './Pages/AppointmentLetter/AppointmentLetter';
import TreatmentDetail from './Pages/Treatments/TreatmentDetail';


function MainPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollToId) {
      const element = document.getElementById(location.state.scrollToId);
      if (element) {
        const offset = location.state.offset || 0;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    }
  }, [location]);

  return (
    <div id='main'>
      <About />
      <Treatments />
      <Referral />
      <Employees />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <Router>  
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/treatment/:treatmentName" element={<TreatmentDetail />} />
          <Route path="/in" element={<AppointmentLetter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

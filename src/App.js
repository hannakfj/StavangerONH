import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import About from './Pages/About/About';
import Referral from './Pages/Referral/Referral';
import Treatments from './Pages/Treatments/Treatments';
import Header from './Components/Header';
import Contact from './Pages/Contact/Contact';
import Employees from './Pages/Employees/Employees';

function App() {
  return (

    <Router>  
      <div>
        <Header/>
        <About/>
        <Treatments/>
        <Referral/>
        <Employees/>
        <Contact/>
      </div>
    </Router>
  );
}

export default App;

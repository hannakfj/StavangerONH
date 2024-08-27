import React from "react";
import './About.css';
import Referral from "../Referral/Referral";
import Treatments from "../Treatments/Treatments";
import Employees from "../Employees/Employees";

function About() {
    return (
        <div className="info">
            <section className="intro-section">
                <h1 className="header" id="about">Stavanger Øre-Nese-Hals</h1>
                <p className="intro-text" id="intro">En spesialistpraksis for utredning, diagnostisering og behandling av problemstillinger i Øre-nese-hals-området.</p>
                <p className="intro-text" id="intro">Vi holder til i Boganesveien 10 i Hinna sentrum. Inngangen er i motsatt ende fra Rema 1000</p>
            </section>
        </div>
    );
}

export default About;

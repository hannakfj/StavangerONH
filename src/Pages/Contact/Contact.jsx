import React from "react";
import './Contact.css'
import linkedin from '../../Assets/images/linkedin.png'; // Import the image using require

function Contact() {
    return (
        <div id="contact" className="scroll-offset">
            <h1 className="headerK">Kontakt oss</h1>
            <div className="contact-info">
                <p><strong>Email:</strong> <a href="mailto:epost@stavangeronh.no">post@stavangeronh.no</a></p>
                <p><strong>Phone:</strong> <a href="tel: 51 88 35 00">51 88 35 00</a></p>
                <p><strong>Address:</strong> Boganesveien 10, 4020 Stavanger</p>
                <p><strong>Åpningstider:</strong> Man-Fre: 08:00-16:00</p>
                <p><strong>Åpningstider telefon:</strong> Man-Fre: 09:00-14:00</p>
                <p>Send en hendvelndelse på epost derom du ikke kommer gjennom på telefon...idk</p>
            </div>
            <div className="box">
                <iframe 
                    className="gmap" 
                    src="https://www.google.com/maps/embed/v1/place?q=Stavanger+Øre-Nese-Hals+-+ØNH+spesialist+og+PhD+Elin-Johanne+Katle,+Boganesveien,+Stavanger,+Norge&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    title="Google Map"
                    frameBorder="0"
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex="0">
                </iframe>
            </div>
        </div>
    );
}

export default Contact;

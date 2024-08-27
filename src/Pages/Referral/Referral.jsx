import React from "react";
import './Referral.css'
import group from '../../Assets/images/group.jpg'; 

function Referral(){
    return(
        <div className="contentRef" id="referral">
        <section id="text" className="info-ref">
        <h1 className= "header">
            Henvisning
        </h1>
        <p className="infotext-div">Denne praksisen er del av spesialisthelsetjenesten under Helse Vest. Fastlegen din sender en henvisning til oss med relevant informasjon. Basert på opplysningene fra fastlegen kaller vi deg inn til time hos ØNH spesialisten.</p>
        <p className="infotext-div">Du får SMS’er med dato, klokkeslett og link til innkallingsbrev fra oss når du er satt opp til time. Det kan være fornuftig at du sjekker at legen din har riktig adresse og telefonnummer til deg i sin journal.</p>
        <p className="infotext-div">Dersom du er over 70 år vil du få innkalling pr brev.</p>
        <p className="infotext-div">Vi har stor pågang og prøver derfor å utnytte all kapasitet. Dersom timen ikke passer for deg, ber vi om at du kontakter oss snarest – se kontaktinformasjon</p>
        </section>
        <section className="info-ref">
            <img src={group} alt="Inngang" className="img"/>
        </section>
        </div>


    )
}


export default Referral; 
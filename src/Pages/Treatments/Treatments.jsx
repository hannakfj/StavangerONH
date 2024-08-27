import React from "react";
import TreatmentBox from "../../Components/treatmentbox";
import './Treatments.css';
import operasjon from '../../Assets/images/operasjon.jpg'; 
import allergi from '../../Assets/images/allergi.jpeg'
import horsel from '../../Assets/images/horsel.jpg'

const treatmentsData = [
    { treatment: "Operasjon", descriptionShort: "Operasjon av neseskilleveggen", descriptionLong: "Husk å pusse nesen og ta paracet før du kommer til operasjons hos oss:)", image: {operasjon} },
    { treatment: "Allergi", descriptionShort: "Vaksinering og prikktest", image: {allergi} },
    { treatment: "Hørsel", descriptionShort: "Description of Hørsel treatment", image: {horsel} },{ treatment: "Operasjon", descriptionShort: "Operasjon av neseskilleveggen", descriptionLong: "Husk å pusse nesen og ta paracet før du kommer til operasjons hos oss:)", image: {operasjon} },
    { treatment: "Allergi", descriptionShort: "Vaksinering og prikktest", image: {allergi} },
    { treatment: "Hørsel", descriptionShort: "Description of Hørsel treatment", image: {horsel} }
];

function Treatments() {
    return (
        <div id="treatments" className="scroll-offset">
            <h1 className="header">Behandlingstilbud</h1>
            <section className="element-row">
                {treatmentsData.map((t, index) => (
                    <TreatmentBox 
                        key={index}
                        treatment={t.treatment}
                        descriptionShort={t.descriptionShort}
                    />
                ))}
            </section>
        </div>
    );
}

export default Treatments;

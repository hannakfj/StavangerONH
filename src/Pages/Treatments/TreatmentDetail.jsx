import React from "react";
import { useParams } from "react-router-dom";
import './TreatmentDetail.css';
import operasjon from '../../Assets/images/operasjon.jpg'; 
import allergi from '../../Assets/images/allergi.jpeg'
import horsel from '../../Assets/images/horsel.jpg'

const treatments = [
    { treatment: "Operasjon", descriptionShort: "Operasjon av neseskilleveggen", descriptionLong: "Husk å pusse nesen og ta paracet før du kommer til operasjons hos oss:)", image: operasjon },
    { treatment: "Allergi", descriptionShort: "Vaksinering og prikktest", image: allergi },
    { treatment: "Hørsel", descriptionShort: "Description of Hørsel treatment", descriptionLong: "Her er info om høreapparat leverandører",image: horsel },
    
];

function TreatmentDetail() {
    const { treatmentName } = useParams();
    const treatment = treatments.find(t => t.treatment === treatmentName);

    if (!treatment) {
        return <div>Treatment not found</div>;
    }

    return (
        <div className="treatmentdescription">
            <h1 className="header">{treatment.treatment}</h1>
            <p>{treatment.descriptionLong}</p>
            <img className="treatment-image" src={treatment.image} alt="image" />
        </div>
    );
}

export default TreatmentDetail;

import React from "react";
import { useNavigate } from "react-router-dom";

function TreatmentBox({ treatment, descriptionShort }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/treatment/${treatment}`);
    };

    return (
        <div className="treatmentbox" onClick={handleClick}>
            <h1 id="treatmentname">{treatment}</h1>
            <p className="treatment-description">{
        }</p>
        </div>
    );
}

export default TreatmentBox;

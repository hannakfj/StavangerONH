// Employeebox.jsx
import React from "react";
import './Employeebox.css';

function Emplyeebox({ Name, img, title,description }) { // Destructure props here
    return(
        <div className="employeebox">
            <img className="profile-picture" src={img} alt="profile img" />
            <h2 className="name">{Name}</h2>
            <p className="employee-description">{title}</p>
            <p className="employee-description">{description}</p>
            
        </div>
    );
} 

export default Emplyeebox; 

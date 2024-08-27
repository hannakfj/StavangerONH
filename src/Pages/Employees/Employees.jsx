import React from "react";
import Emplyeebox from "../../Components/Employeebox";
import ej from '../../Assets/images/e-j.jpeg'; 
import et from '../../Assets/images/elisabeth-edited.jpg';
import ea from '../../Assets/images/ea.jpg'; 
import os from '../../Assets/images/os.jpg'; 
import tj from '../../Assets/images/tj.jpg'; 
import './Employees.css'; // Import the CSS file

function Employees() {
    return(
        <div id="employees" className="scroll-offset">
            <h1 className="header">Ansatte</h1>
            <section className="employee-row">
                <Emplyeebox 
                    Name="Elin-Johanne Katle" 
                    img={ej} 
                    title='Øre-Nese-Hals spesialist og PDF' 
                /> 
                <Emplyeebox 
                    Name="Elizabeth Tjørhom" 
                    img={et} 
                    title='Helsesekretær' 
                /> 
                <Emplyeebox 
                    Name="Elitsa Diyanova Aleksieva" 
                    img={ea} 
                    title='Helsesekretær' 
                /> 
            </section>
            <section className="employee-row">
                <Emplyeebox 
                    Name="Tiril Jordahl" 
                    img={tj} 
                    title='Audiograf' 
                /> 
                <Emplyeebox 
                    Name="Oda Elise Svartsund" 
                    img={os} 
                    title='Audiograf' 
                /> 
            </section>
        </div>
    )
}

export default Employees;

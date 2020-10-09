import React from 'react';
import './components.css';


function FifthComponent(){
    return(
        <div className="fifth">
            <h3><u>Fifth Component Starts Here :</u></h3>
            <p>Login Simulation</p>
            <form>
                <label for="fname"> First name:</label><br/>
                <input for="fname" type="text" id="name"/><br/>
                <label for="lname">Last name:</label><br/>
                <input for="lname" id="lname"/>
                <br/>
                <input type="submit" value="Login"/>
            </form>
            <br/>
            <hr></hr>
        </div>
    );
}

export default FifthComponent;
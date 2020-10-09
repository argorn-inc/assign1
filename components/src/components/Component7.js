import React from 'react';
import './components.css';
import Logo from '../img/logo.jpg';


function SeventhComponent(){
    return(
        <div className="seventh">
            <h2>Seventh Component. Nav Logo</h2>
            <img className="logo" src={Logo} alt="Logo" />
        </div>
    );
}
export default SeventhComponent;
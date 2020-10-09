import React from 'react';
import pic from '../img/mypic.jpg';
import './components.css';

function SecondComponent(){
    return(
        <div className="pic_component">
        <p>Attempting to import a picture below</p>
        <img className="pic" src={pic} alt="logo"/>
        <hr/>
        </div>
    );
}

export default SecondComponent;
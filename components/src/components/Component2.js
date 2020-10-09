import React from 'react';
import pic from '../img/mypic.jpg';
import './components.css';

function SecondComponent(){
    return(
        <div class="pic_component">
        <p>Attempting to import a picture below</p>
        <img class="pic" src={pic} alt="logo"/>
        </div>
    );
}

export default SecondComponent;
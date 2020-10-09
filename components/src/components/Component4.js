import React from 'react';
import MyImage from '../img/mypic.jpg';
import './components.css';

function FourthComponent(){
    return(
        <div className="fourth">
            <h3>Forth Component</h3>
            <p>Here are some links for you<br/></p>
            <span><a href="https://facebook.com">Facebook</a></span>
            <span><a href="https://youtube.com">Youtube</a></span>
            <br/>
           
           <br/>
           
            This is my github profile:
           <a id="me" href="https://github.com/argorn-inc"> <img src={MyImage} alt="My Pic"/></a>
          
            <hr/>
        </div>
    );
}

export default FourthComponent;
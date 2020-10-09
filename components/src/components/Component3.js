import React from 'react';
import './components.css';


function ThirdComponent() {
    return(
        <div className="myTable">
            <h1>Third Component</h1><br/>
            <p>Trying something out with tables</p>
            <table className="myTable">
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                </tr>
                <tr>
                    <td>Jill</td>
                    <td>Smith</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Eve</td>
                    <td>Jackson</td>
                    <td>94</td>
                </tr>
                </table>
            <hr/>
        </div>
    );
}

export default ThirdComponent;
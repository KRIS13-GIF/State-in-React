import React from "react";
import northern_hemisphere from './img/northern_hemisphere.png';
import southern from './img/southern.jpg';





const HemisphereDisplay =(props) =>{
    // this props is for the latitude property

console.log(props.latitude)

// declaring which hemispshere are we choosing.. using ternary operator
const hemisphere=props.latitude>0?'Northern ':'Southern ';
const picture=props.latitude>0 ? northern_hemisphere :  southern; 

return(
        <div className={hemisphere}>
             <h1>{hemisphere}</h1>
            <img src={picture} width='200px' height='180px' alt=""/> 
           
        </div>
    )

}

export default HemisphereDisplay;

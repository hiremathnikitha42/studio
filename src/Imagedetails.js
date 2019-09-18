import React from 'react';
import './Imagedetails.css';


class Imagedetails extends React.Component{
    render(){
        return(
            <div className="image-details-container">
            IMAGE DETAILS
            <div className="image-box">
            <div className="duration-box">
             <div className="upper-text">
                   DURATION
             </div>
             <div className="lower-text">
                2 SESSIONS
                </div>   
            </div>
            <div className="size-box">
            <div className="upper-text">
            SIZE
             </div>
             <div className="lower-text">
             MEDIUM                
             </div> 
                 
            </div>
            <div className="body-placement">
            <div className="upper-text">
                BODY PLACEMENT   
             </div>
             <div className="lower-text">
             FORE ARM
                </div>
            </div>
            </div>
            </div>
        );
    }

}


export default Imagedetails;
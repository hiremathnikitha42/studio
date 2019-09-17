import React from 'react';
import './Imagedetails.css';


class Imagedetails extends React.Component{
    render(){
        return(
            <div className="Imagebox">
            <div className="duration-box">
                DURATION
                2SESSIONS
            </div>
            <div className="size-box">
                SIZE
                MEDIUM
            </div>
            <div className="body-placement">
                BODY PLACEMENT
                FORE ARM
            </div>
            </div>
        );
    }

}


export default Imagedetails;
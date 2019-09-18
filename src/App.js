import React from 'react';
import Tags from './tags';
import Imagedetails from './Imagedetails';
import './App.css';


class App extends React.Component{
  render(){
    return(
      <div className="studio-container">
        <div className="studio-image-box">
          
        </div>
       
        <div className="studio-details-container">
        <span class="pricetag"></span>
          <div className="studio-tattoo-title">
            TIGER, GIRL FACE, TIGER SKIN
          </div>
          <div className="studio-tags">
            <Tags tags="flower"></Tags>
            <Tags tags="mandala"></Tags>
            <Tags tags="wrist"></Tags>
            <Tags tags="leg"></Tags>
            <Tags tags="palm"></Tags>
            <Tags tags="rock"></Tags>
            <Tags tags="numbers"></Tags>
          </div>
          <div className="studio-labels">
          <span class="uniquedesign"></span>
          <div className="painlevel">
            PAIN LEVEL 4
            </div>
          </div>
            <Imagedetails></Imagedetails>
          
        </div>
      </div>
    );
  }
}

export default App; 

import React from 'react';
import './App.css';
import tags from './tags';


class App extends React.Component{
  render(){
    return(
      <div className="studio-container">
        <div className="studio-image-box">
        </div>
        <div className="studio-details-container">
          <div className="studio-tattoo-title">
            TIGER, GIRL FACE, TIGER SKIN
          </div>
          <div className="studio-tags">
            <tags></tags>
          </div>
        </div>
      </div>
    );
  }
}

export default App; 

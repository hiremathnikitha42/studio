import React from 'react';
import './tags.css';

const Tags = props =>{
        return(
            <div className="tags-box">
              <div className="tags">
                {props.tags}
               </div>
               
            </div>
            
    
        );
    
}

export default Tags;
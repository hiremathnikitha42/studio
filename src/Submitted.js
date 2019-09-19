import React from 'react';
import './Submitted.css'

class Submitted extends React.Component{
    render(){
        return(
            <div className="submitted-container">
                <span className="submitted-text">SUBMITTED FOR</span>
                <div className="studio-details-box">
                  <div className="studio-header">
                    <div className="studio-image">
                        <img src="/images/c5.jpg" style={{borderRadius:"55%"}}></img>
                    </div>
                    <div className="studio-name">
                        <div className="studio-text">VERVE STUDIO</div>
                        <div className="studio-address">Basavanagudi,Bengaluru</div>
                        <div className="star-rating-box">
                           <span class="fa fa-star checked"></span>
                           <span class="fa fa-star checked"></span>
                           <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                             <span class="fa fa-star"></span>
                        </div>
                    </div>
                    <div className="studio-available">
                        <div className="studio-button">
                            <span className="button-text">SEE AVAILABIITY</span><span className="button-symbol"> ></span>
                        </div>
                        <span className="button-note">BOOK IN NEXT 30MINS TO GET 40% OFFER</span>
                    </div>
                  </div>
                  <div className="studio-images">
                    <img src="/images/p1.jpg" style={{marginRight:"2%"}}></img>
                    <img src="/images/p2.jpg"style={{marginRight:"2%"}}></img>
                    <img src="/images/p3.jpg"style={{marginRight:"2%"}}></img>
                    <div className="faded"></div>
                    <div className="vl"></div>
                    <div className="more-images">MORE IMAGES
                     <div className="more-symbol"> > </div>
                     </div>
                  </div>
                  <div className="studio-chat-text">This studio typically replies within a few hours</div>
                  <div className="studio-comment-box">
                  <div className="star-rating-box-comments">
                           <span class="fa fa-star checked"></span>
                           <span class="fa fa-star checked"></span>
                           <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                             <span class="fa fa-star"></span>
                        </div>
                        <div className="comment-box">
                     <div className="backward-arrow">
                     <img src="/images/a2.png"></img>
                         </div>                        
                         <div className="comment-text">
                            "Love the experience, Attention to detail,courteous staff,nice studio would defientely
                             recommended the artist for a great tattoo"
                             
                        </div>
                        <div className="forward-arrow">
                        <img src="/images/a1.jpg"></img>
                        </div>
                        </div>
                  </div>
                </div>
            </div>
        );
    }
}

export default Submitted;
import React from 'react';
import './fetauredBooks.css';
const featuredBooksComponent=(props)=>{
   
    return (
        <div className="parentF" style={{backgroundColor:`${props.colorBg}`}}>

        <div className="childF1">
            <span className="fa-stack fa-2x" id="iconparent">
                <i className="fas fa-circle fa-stack-2x" style={{color:"rgba(0,0,0,0.5)"}}></i>
               <i className="fas fa-graduation-cap fa-stack-1x fa-inverse"></i>
           </span>
        </div>
        
        <div className="childF2">
           <h5 style={{margin:"0px"}}>{props.bookName}</h5>
           <small className="smallClass">Author {props.bookAuthor}</small>
        </div>
        
        <div className="childF3">
            <span>
           <i className="fas fa-download" id="downloadIcon"></i>
           <br></br>
           <i className="fas fa-heart" id="heartIcon"></i>
           </span>
        </div>
        
        </div>
    );
}
export default featuredBooksComponent;
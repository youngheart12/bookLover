import React from 'react';
import './fetauredBooks.css';
const featuredBooksComponent=(props)=>{
   
    return (
        <div className="parentF" style={{backgroundColor:`${props.colorBg}`}}>

        <div className="childF1">
            <span class="fa-stack fa-2x" id="iconparent">
                <i class="fas fa-circle fa-stack-2x" style={{color:"rgba(0,0,0,0.5)"}}></i>
               <i class="fas fa-graduation-cap fa-stack-1x fa-inverse"></i>
           </span>
        </div>
        
        <div className="childF2">
           <h5 style={{margin:"0px"}}>{props.bookName}</h5>
           <small className="smallClass">Author {props.bookAuthor}</small>
        </div>
        
        <div className="childF3">
           <i class="fas fa-download" id="downloadIcon"></i>
           <br></br>
           <i class="fas fa-heart" id="heartIcon"></i>
        </div>
        
        </div>
    );
}
export default featuredBooksComponent;
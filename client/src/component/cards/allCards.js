import React from 'react';
import './cards.css'
const allCards=(props)=>{
    return(
        
        <div className="layout">
        <div className="insideLayout">
            
            <h2>Share Your Book Collection To World</h2>
            <h3>Experience & Review</h3>
            <br></br>
            <button className="layoutButton">Create Your Own Collection</button>
           {/* <Button style={{backgroundColor:"#4ACFAC",borderColor:"#4acfac",fontWeight:600,opacity:"1"}}>Create Your Own Collection</Button> */}
        </div>
        </div>
            
        
    )
}
export default allCards
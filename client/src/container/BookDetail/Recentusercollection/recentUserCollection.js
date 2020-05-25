import React from 'react'
import {Jumbotron} from 'reactstrap';
import '../bookdetails.css';
export default function recentUserCollection() {
    return (
        <div>
             <Jumbotron style={{backgroundColor:"black",padding:"12px 16px"}}>
                                <h6 style={{color:"wheat"}}>Recent User Collection</h6>
                                <hr style={{borderColor:"#fafafa"}}></hr>
                                <div className="containermarquee">
                                    <div className="marquee">
                                <div style={{color:"white",opacity:"87%",padding:"0px 16px",marginBottom:"12px"}}>Dilip Kumar <span style={{float:"right"}}>20s ago</span></div>
                                <div style={{color:"white",opacity:"87%",padding:"0px 16px"}}>Dilip Kumar <span style={{float:"right"}}>20s ago</span></div>
                                <div style={{color:"white",opacity:"87%",padding:"0px 16px",marginBottom:"12px"}}>Dilip Kumar <span style={{float:"right"}}>20s ago</span></div>
                                <div style={{color:"white",opacity:"87%",padding:"0px 16px"}}>Dilip Kumar <span style={{float:"right"}}>20s ago</span></div>
                                <div style={{color:"white",opacity:"87%",padding:"0px 16px",marginBottom:"12px"}}>Dilip Kumar <span style={{float:"right"}}>20s ago</span></div>
                                <div style={{color:"white",opacity:"87%",padding:"0px 16px"}}>Dilip Kumar <span style={{float:"right"}}>20s ago</span></div>
                                </div>
                                </div>
                            </Jumbotron>
        </div>
    )
}

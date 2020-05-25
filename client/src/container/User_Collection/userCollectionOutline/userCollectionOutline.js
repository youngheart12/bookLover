import React from 'react'
import {Row,Col,Jumbotron} from 'reactstrap';
import '../userCollection.css';
export default function userCollectionOutline() {
   return (
      <div>
         <div className="usercollectiondesktopView">
           <Jumbotron style={{padding:"20px",border:"3px solid pink",backgroundColor:"inherit",color:"#bdbdbd"}}>
                            <Row>
                                <Col md="4" style={{textAlign:"center"}}>
                                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}} >
                                <span className="fa-stack fa-4x" >
                    <i className="fas fa-circle fa-stack-2x" style={{color:"rgba(0,0,0,0.5)"}}></i>
                     <i className="fas fa-user-astronaut fa-stack-1x fa-inverse"  id="genreIcon"></i>
                </span>
                         
                                </div>
                              <small style={{color:"wheat",fontSize:"1em"}}>Total Books Reviewed:45|Gener like most:Crime</small> 
                                   
                                </Col>
                                <Col md="8" className="userabout">
                                 <h2>Dilip Kumar</h2>
                                 <small>About me</small>
                                 <p >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. .</p>
                                <hr></hr>
                                <span class="fa-stack fa-1x">
                                  <i class="fas fa-circle fa-stack-2x" style={{color:"red"}}></i>
                                 <i class="fas fa-heart fa-stack-1x fa-inverse"  ></i>
                                </span>
                                <span class="fa-stack fa-1x">
                                  <i class="fas fa-circle fa-stack-2x" style={{color:"dodgerblue"}}></i>
                                 <i class="fas fa-share fa-stack-1x fa-inverse"  ></i>
                                </span>
                                </Col>
                            </Row>
                            
                        </Jumbotron>
                        </div>
      </div>
   )
}

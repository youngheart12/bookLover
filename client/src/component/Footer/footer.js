import React from 'react'
import {Container,Row,Col} from 'reactstrap';
import './footer.css';
export default function footer() {
    return (
       <Container style={{backgroundColor:"rgba(0,0,0,0.5)",color:"white",position:"absolute",marginTop:"45px"}} fluid>
           <Row style={{margin:"0px"}}>
            <Col md="5" sm="12" xs="12" style={{padding:"30px"}}>
               <h6 id="footerHeader">About BookTrap</h6> 
                <br></br>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. 

Sed velit lectus, porttitor eu convallis sit amet, semper eget mauris. Integer in pulvinar mauris. Donec facilisis placerat magna sed cursus. </p>
            </Col>
            <Col md="3" sm="4" xs="4" style={{padding:"30px"}}>
        <h6 id="footerHeader" >Quick links</h6>
        <br></br>
        <div className="footerQuick">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Signup</a></li>
        </ul>
        </div>
            </Col>
            <Col md="4" sm="8" xs="8" style={{padding:"30px 0px",margin:"0px"}}>
            <h6 id="footerHeader"> Contact info</h6><br></br>
            <address>Main Road Jharia,828111
            Dhanbad  ( Jharkhand ), India
            </address>
            <h6>Drop Mail at</h6>
            manishkumar1992222@gmail.com <br></br>
            <small>All right reserved @copyright youngheart12</small>
            </Col>
            <Col xs="12" sm="12" md="12" style={{padding:"0px",margin:"0px"}}>
                <div className="footermedia">
                <i class="fab fa-facebook" id="facebook"></i>
                <i class="fab fa-instagram" id="instagram"></i>
                <i class="fab fa-twitter" id="twitter"></i>
                </div>
            </Col>
           </Row>
          
       </Container>
    )
}

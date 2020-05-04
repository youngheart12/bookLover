import React from 'react';
import Card from './cards';
import {Container,Row,Col, Jumbotron, Button} from 'reactstrap';
import './cards.css'
const allCards=(props)=>{
    return(
        // <Container fluid>
        //     <Row style={{padding:"45px"}}>
        //         <Col md="4">
        //             <Card title="Books"  assignName="bookStyle"></Card>
        //         </Col>
        //         <Col md="4">
        //             <Card title="Movies" assignName="movieStyle"></Card>
        //         </Col>
        //         <Col md="4">
        //             <Card title="Food" assignName="dishStyle"></Card>
        //         </Col>
        //     </Row>
        // </Container>
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
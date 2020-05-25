import React, { Component } from 'react'
import Auth from '../Authentication/authentication';
import { Container,Row,Col } from 'reactstrap';
import UserCollectionComponent from './userCollectionOutline/userCollectionOutline';
import RecentUserCollection from '../BookDetail/Recentusercollection/recentUserCollection'
import './userCollection.css';
export class userCollection extends Component {
    render() {
        return (
            <div>
               <Auth></Auth>
               <Container>
                   <Row>
                   <Col md="8">
                        <UserCollectionComponent></UserCollectionComponent>
                        <UserCollectionComponent></UserCollectionComponent>
                   </Col>
                   <Col md="4">
                       <RecentUserCollection/>
                   </Col>
                   </Row>
               </Container> 
            </div>
        )
    }
}

export default userCollection

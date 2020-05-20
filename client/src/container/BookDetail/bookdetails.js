import React, { Component } from 'react'
import Auth from '../Authentication/authentication';
import { Jumbotron, Container ,Row,Col, Button,Input,Card,CardBody,CardText,CardSubtitle,CardImg,CardTitle, CardFooter} from 'reactstrap';
import {connect} from 'react-redux';
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton';
import * as actionCreator from '../../action/Collection/collectionAction';
import IconsDiv from './iconsDiv';
import './bookdetails.css';
export class bookdetails extends Component {
    componentDidMount()
    {
        const{match:{params}}=this.props;
        const {bookId}=params;
       
        this.props.ongetIndividualBookDetail(bookId);
    }
    showNotification=()=>{
        alert("This feature will soon be available");
    }
    submitFeedbackHandler=()=>{
        if(this.props.collection.auth)
        {
            alert("This feature will soon be there");
        }else{
            alert("You must be logged in to  review this book")
        }
    }
    render() {
        let data;
          if(this.props.collection.bookDetail)
          {
              data=this.props.collection.bookDetail
          }
          return (
            <div>
                <Auth></Auth>
                <Container>
                    <Row>
                        <Col md="8" className="desktopViewBookDetails">
                            <Jumbotron style={{padding:"8px 8px"}}>
                               
                               {data? <div className="bookdetails">
                                    <div>
                                    <img src={data.book_image} width="183" height="275" alt="imagegroup" ></img>
                                    </div>
                                    <div className="bookdetailsContent">
                                    <h4>{data.title}</h4>
                                    <h6>{data.author}</h6>
                                    <br></br>
                                    <p>{data.description} </p>
                                    <hr></hr>
                               
                                    <div className="bookdetailsRating">
                                        <IconsDiv></IconsDiv>
                                        </div>
                                        {/* internal rating div end */}
                                    </div>
                                </div>:<div style={{backgroundColor:"dodgerblue",height:"275px"}}>
                                    <i class="fas fa-star" style={{color:"white"}}></i></div>}
                               
                            
                            </Jumbotron>
                        </Col>
                        <Col md="8" className="mobileViewBookDetails">
                        
                               
                               {data? <Card style={{boxShadow:"0px 2px 10px 0px rgba(0,0,0,0.5)"}}>
        <CardImg top width="60%" height="240px" src={data.book_image} alt="Card image cap" style={{borderRadius:"5px"}}/>
        <CardBody>
          <CardTitle><b>{data.title}</b></CardTitle>
          <CardSubtitle style={{fontWeight:"600"}}>by {data.author}</CardSubtitle>
          
          <CardText style={{marginTop:"5px"}}>{data.description}</CardText>
          
        </CardBody>
        <CardFooter>
            <div className="footerCardicons">
            <IconsDiv></IconsDiv>
            </div>
        </CardFooter>
      </Card>:  <SkeletonTheme color="#37474F" highlightColor="#546E7A" >
                   <Skeleton height={145}></Skeleton>
                   <p style={{margin:"0px"}}><Skeleton  width={260}></Skeleton></p>
                   <Skeleton  width={160}></Skeleton>
    
               </SkeletonTheme>}
                               
                            
                           
                        </Col>
                        
                        <Col md="4">
                            
                            
                            {data?
                            <Jumbotron style={{padding:"40px 16px"}}>
                            <div className="aboutAuthor">
                            <small>About the author</small>
                           
                            <h6>{data.author}</h6>
                            <p>{data.author} is best known in the field of{data.tags[0]}. His book {data.title} is New York Times {data.rank} bestseller. {data.author} has some series of book that can make someone strong in {data.tags[0]}.Find more about {data.author}.</p>
                            </div>
                            </Jumbotron>:<SkeletonTheme color="#37474F" highlightColor="#546E7A" >
                   <Skeleton height={145}></Skeleton>
                   <p style={{margin:"0px"}}><Skeleton  width={260}></Skeleton></p>
                   <Skeleton  width={160}></Skeleton>
    
               </SkeletonTheme>}
                          
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col md="12">
                            <Jumbotron style={{padding:"0px"}}>
                               <div className="RateIt" >
                                   <div>Rate it</div>
                               
                                   <div>
                                       <Button color="success" style={{margin:"0px"}} onClick={this.showNotification}>Read the book</Button>
                                   </div>
                                   <div>
                                       <Button color="success" style={{margin:"0px"}} onClick={this.showNotification}>Download the book</Button>
                                   </div>
                                   <div>
                                       <Button color="info" style={{margin:"0px"}} onClick={this.showNotification}>Add to read later</Button>
                                   </div>
                               </div>
                               <div className="RateItMob">
                                   <Button size="md" color="success" style={{display:"inline",marginRight:"20px"}}  onClick={this.showNotification}>Read the book</Button>
                                   <Button size="md" color="primary" style={{display:"inline"}}  onClick={this.showNotification}>Open the book</Button>
                               </div>
                            </Jumbotron>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <Jumbotron>
                                What People are Saying
                                <hr></hr>
                                <Input type="textarea" placeholder="Your Comment on this"style={{height:"120px"}}></Input>
                                <br></br>
                                <Button color="success" onClick={this.submitFeedbackHandler}>Submit</Button>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
collection:state.collection
})
const mapDispatchToProps=(dispatch)=>{
    return {
        ongetIndividualBookDetail:(bookId)=>dispatch(actionCreator.getIndividualBookDetail(bookId))
    }
}
export default connect (mapStateToProps,mapDispatchToProps)( bookdetails)

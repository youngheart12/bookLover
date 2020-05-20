import React, { Component } from 'react'
import Auth from '../Authentication/authentication';
import HeadingTitle from '../../component/HeadingTitle/headingTitle';
import * as actionCreator from '../../action/Collection/collectionAction'
import FeaturedBooksComponent from '../../component/Featured_Books/featuredBooksComponent';
import { Container, Jumbotron} from 'reactstrap';
import {connect} from 'react-redux';
export class selectedGener extends Component {
   
     componentDidMount()
     {
       this.props.ongetBookCollectionListSpecific(); 
     }
  
    render() {
        const nameSearch=sessionStorage.getItem("search")
        const data=this.props.collection.bookListCollectionSpecific[nameSearch]
       
        return (
            <div>
                <Auth></Auth>
                <Container>
                    <Jumbotron style={{padding:"16px 32px",backgroundColor:"#6773AE"}}>
                    <HeadingTitle title="Showing your search result"></HeadingTitle>
                    </Jumbotron>
                    <Jumbotron className="bookListJumbo" style={{backgroundColor:"#B9C6C8",position:"relative"}}>
            <div className="bookListContainer">
            {data?data.map((book)=>{
                    return  <FeaturedBooksComponent bookName={book.title}
                    aboutBook={book.description}
                    link={book.book_image}
                    width="183"
                    height="270"
                    id={book._id}
           ></FeaturedBooksComponent>
           
                }):null}
            </div>
            
           
        </Jumbotron>
                        
                      
                </Container>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    collection:state.collection
  })
  const mapDispatchToProps=dispatch=>{
    return{
      ongetBookCollectionListSpecific:()=>dispatch(actionCreator.getBookCollectionListSpecific())
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(selectedGener);

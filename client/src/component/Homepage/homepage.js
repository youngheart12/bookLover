import React, { Component } from 'react'
import './homepage.css';
import AllCard from '../cards/allCards'
import FeaturedBooks from '../Featured_Books/fetauredBooks'
import Authentication from '../../container/Authentication/authentication';
import Genre from '../../component/GenreCat/genrecat';
import MonthsPick from '../../container/MonthsPick/monthsPick';

import Usercol from '../../container/UserCol/userCol';
import Footer from '../Footer/footer';
import {connect} from 'react-redux';
import *as actionCreator from '../../action/../action/Collection/collectionAction';


export class Homepage extends Component {
 
  state={
    monthsPick:null,
    loading:false,
    isLoading:false
 }
 componentDidMount()
 {
   this.props.ongetBookCollectionList();  
 }
 componentDidUpdate(prevProps,nextState)
 {
   if(this.props.collection.bookListCollection !== nextState.monthsPick)
   {
     console.log(prevProps,this.props.collection.bookListCollection);
    const t=this.props.collection.bookListCollection;
    console.log(t);
    this.setState({
      isLoading:true,
      monthsPick:t
    })
 }
}



  render() {
    console.log(this.state,"i am getting the data");
    return (
      <div>
      
    <Authentication></Authentication>
     <AllCard></AllCard>
     <FeaturedBooks loadingState={this.state.isLoading} bookData={this.state.monthsPick}></FeaturedBooks>
     <Genre loadingState={this.state.isLoading} bookData={this.state.monthsPick}></Genre>
     <MonthsPick loadingState={this.state.isLoading} bookData={this.state.monthsPick}></MonthsPick>
     <Usercol></Usercol>
    
      <Footer></Footer>
      
     </div>
    )
  }
}

const mapStateToProps=(state)=>({
  collection:state.collection
})
const mapDispatchToProps=dispatch=>{
  return{
    ongetBookCollectionList:()=>dispatch(actionCreator.getBookCollectionList())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Homepage);

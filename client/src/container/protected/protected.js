import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Switch,Route,Redirect} from 'react-router-dom';
import HomePage from '../../component/Homepage/homepage';
import Signup from '../Singup/signup';
import Login from '../Login/login';
import Footer from '../../component/Footer/footer';
import BookDetail from '../BookDetail/bookdetails';
import Dashboard from '../Dashboard/dashboard';
import SelectedGener from '../SelectedGenre/selectedGener';
import About from '../../component/About/about';
const data=sessionStorage.getItem("state");
const dataid=JSON.parse(data);
let authenticated=false;
if(dataid)
{
    authenticated=true
}

const privateRoute=({component:Component,...rest})=>(
    <Route {...rest} render={(props)=>(
       authenticated?<Component {...props}/>:
        <Redirect to="/login"></Redirect>
    )}></Route>
)
const mapStateToProps=state=>({
    auth:state.auth
})

export default connect(mapStateToProps,null)(privateRoute)

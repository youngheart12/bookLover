import React,{ useState } from 'react';
import {Card,CardBody,CardHeader, CardFooter} from 'reactstrap';
import './userCollectionComponent.css';
const UserCollectionComponent=(props)=>{
   
    return (
       <div className="usercollectionwrap">
               <Card  className="userCollectionOutlineWrap"style={{backgroundColor:"#0C0B0D",borderRadius:"15px"}}> 

                {!props.isImg ?
                   <CardHeader style={{padding:"10px",textAlign:"center"}}>
                            <img src={require('../../../image/dilip.jpg')} width="100px" height="100px" style={{borderRadius:"50%"}}></img> 
                    </CardHeader>:
                    <CardHeader style={{padding:"10px",textAlign:"center",backgroundColor:"mediumseagreen",color:"white"}}>
                       <span class="fa-stack fa-2x" >
                        <i class="fas fa-circle fa-stack-2x" style={{color:"rgba(0,0,0,0.5)"}}></i>
                        <h1 className="display-3">{props.firstLetter}</h1>
                        </span>
                    </CardHeader>
                     }
                    <p className="nameStyle" >{props.firstLetter}</p>
             
             <CardBody style={{color:"white",opacity:"87%",textAlign:"center"}}>
                {props.aboutUser}
             </CardBody>

             <CardFooter style={{opacity:"0.9",color:"white",textAlign:"center"}}>
                200<i class="fas fa-external-link-alt" style={{padding:"2px 10px"}} onClick={props.launchHandler} id="iconStyle"></i>
                500<i class="fas fa-heart" style={{padding:"2px 10px"}} onClick={props.heartHandler} id="iconStyle"></i>
             </CardFooter>
         </Card>
              
       </div>
    )
}
export default UserCollectionComponent;
import React, { Component } from 'react'
import './authentication.css';
import { Dropdown, Button } from 'reactstrap';
import {connect} from 'react-redux';
export class authentication extends Component {
        state={
            user:null,
            isAuthenticated:false,
            changeicon:false,
            current:"none"
        }
        toggleHandler=()=>{
          this.setState({
            current:"flex",
            changeicon:false
          })
        }
        toggleHandlerCross=()=>{
          this.setState({
            changeicon:true,
            current:"none"
          })
        }
        componentDidMount()
        {
            if(sessionStorage.getItem("state"))
            {
                const data=JSON.parse(sessionStorage.getItem("state"));
                this.setState({user:data});
               this.setState({isAuthenticated:true})
            }
            this.setState({changeicon:true})
        }
       
        logOutHandler=()=>{
            
            sessionStorage.clear();
            this.setState({isAuthenticated:false})
        }
    render() {
      console.log(this.state)
        return (
          <div className="pp">
          {/* desktop authenticate */}
            <div className="authentication-flex">
               <div className="nav-header">
                   <h2>BookTrap</h2>
               </div>
               <div style={{flexGrow:1,backgroundColor:"#262833"}}></div>
               {/* apply authenticate here */}
               <div className="nav-body">
                {this.state.isAuthenticated?
                <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/dashboard">Dashboard</a>
                <a href="/" style={{color:"white"}}>{this.state.user.user.name}</a>
                <a onClick={this.logOutHandler}>Logout</a>
              </nav>:
                 <nav>
                 <a href="/">Home</a>
                 <a href="/about">About</a>
                 <a href="/signup">Signup</a>
                 <a href="/login">Login</a>
               </nav>
               

                }
               </div>
            </div>


            {/* desktop authenticate end here */}

            {/* Mobile authenticate start here */}

              <div className="authenticate-flex-mob">
                
                
              <div>
                  <nav>
                    <a href="/">BookTrap</a>
                  </nav>
               </div>

                <div style={{flexGrow:1}}></div>

                {/* logic part  */}
              <div>

          {this.state.changeicon?<i class="fas fa-bars" style={{fontSize:"1.5em",padding:"15px",opacity:0.6}} onClick={this.toggleHandler}></i>
          :<i class="fas fa-times" style={{fontSize:"1.5em",padding:"15px",opacity:0.6}} onClick={this.toggleHandlerCross}></i> 
           }
             </div>
       
              </div>
              <div style={{display:`${this.state.current}`}} onClick={this.toggleHandlerCross}>
              <div style={{height:"30vh",backgroundColor:"inherit",width:"100%",zIndex:100,position:"relative",boxShadow:"0px 10px 10px 0 rgba(0,0,0,0.2)"}}></div>
              <div className="authenticate-mob-open" style={{top:"45px",width:"100%",zIndex:200,position:"absolute"}}>
               
               {/* authentication will go here */}
                {this.state.isAuthenticated? 

                <div>
                  <nav>
                    <a href="/dashboard">Dashboard</a>
                  </nav>
                  <nav>
                  <a href="/" style={{color:"white"}}>{this.state.user.user.name}</a>
                  </nav>
                  <nav>
                  <a onClick={this.logOutHandler}>Logout</a>
                  </nav>
                  <nav>
                    <a href="/about">About</a>
                  </nav>
                </div>:
                 <div>
                 <nav>
                   <a href="/login">Login</a>
                 </nav>
                 <nav>
                 <a href="/signup">Signup</a>
                 </nav>
                 <nav>
                 <a href="/about">About</a>
                 </nav>
               </div>}
               
                {/* authentication will end here */}
              </div>
              </div>

            </div>
            
        )
    }
}
const mapStateToProps=state=>({
    auth:state.auth
})
export default connect(mapStateToProps,null) (authentication)

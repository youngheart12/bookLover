import React from 'react'
import './about.css';
import Footer from '../Footer/footer';
import HeadingTitle from '../HeadingTitle/headingTitle';
export default function about() {
    return (
        <div>
        <div className="aboutpage">
          <HeadingTitle title="About Me"></HeadingTitle>
          <br></br>
          <div>
             <p>I am React Developer who likes to build cool websites
             <br></br>
             and spend most of my time around web. Sometime just for fun and sometime haha.
             </p>
          </div>
          <HeadingTitle title="Why I Built This" margin="400px 0px 20px 0px"></HeadingTitle>
          <p>I always find it tough to search for books that i should read next <br></br> 
          and review and rating of books</p>
        
        </div>
        <Footer></Footer>
        </div>
    )
}

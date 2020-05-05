import React from 'react'
import {Row,Col,Card, CardBody, CardHeader, Jumbotron, Button} from 'reactstrap';
import FeaturedBooksComponent from './featuredBooksComponent';
import './fetauredBooks.css';
export default function fetauredBooks() {
    return (
       <div className="featuredExtra">
            <h2>Featured Books</h2>
            <br></br>
            <div className="infoBoxFeatured">Searching for wich books to read in this quarentinee we got some for you 
            
            </div>
                <div className="featuredExtraInside">
                    <FeaturedBooksComponent bookName="Rich Dad and Poor Dad" bookAuthor="Rhyan dhyan"></FeaturedBooksComponent>
                    <FeaturedBooksComponent colorBg="#494A63" bookName="Suspicious Mind" bookAuthor="Lara Bene"></FeaturedBooksComponent>              
                    <FeaturedBooksComponent colorBg="#3EB488" bookName="Interstellar" bookAuthor="Dilip Kumar"></FeaturedBooksComponent>
                </div>
       </div>
    )
}

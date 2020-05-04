import React from 'react'
import {Row,Col,Card, CardBody, CardHeader} from 'reactstrap';
import FeaturedBooksComponent from './featuredBooksComponent';
import './fetauredBooks.css';
export default function fetauredBooks() {
    return (
       <div className="featuredExtra">
            <h2>Featured Books</h2>
                <div className="featuredExtraInside">
                    <FeaturedBooksComponent bookName="Rich Dad and Poor Dad" bookAuthor="Rhyan dhyan"></FeaturedBooksComponent>
                    <FeaturedBooksComponent colorBg="#494A63" bookName="Suspicious Mind" bookAuthor="Lara Bene"></FeaturedBooksComponent>              
                    <FeaturedBooksComponent colorBg="#3EB488" bookName="Interstellar" bookAuthor="Dilip Kumar"></FeaturedBooksComponent>
                </div>
       </div>
    )
}

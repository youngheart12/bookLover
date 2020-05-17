import React, { Component } from 'react'
import './monthsPick.css';
import '../../component/Homepage/homepage.css';
import {connect} from 'react-redux';
import HeadingTitle from '../../component/HeadingTitle/headingTitle';
import HeadingTitleMob from '../../component/HeadingTitle/headingTitleMob';

import ImageCard from '../../component/ImageCard/imageCard';
import ImageCardMob from '../../component/ImagecardMob/imageCardMob';
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton';

export class monthsPick extends Component {
  
    clickBookHandler=(id)=>{
        console.log(id);
    }

    render() {
        let datalist;
        if(this.props.loadingState)
        {
        datalist=this.props.bookData.splice(1,15);
        }
        return (
            <div>
            <div className="desktopViewMonth">
               <HeadingTitle title="Top Month's pick for you" margin="50px 0px"></HeadingTitle> 
               <div className="monthsPickContainer">  
                   {this.props.loadingState?
                   datalist.map((book,id)=>{
                       return<ImageCard 
                                key={id}
                                bookName={book.title}
                                aboutBook={book.description}
                                link={book.book_image}
                                height="275"
                                width="183"
                                id={book._id}
                       ></ImageCard>
                   })
                   :Array(15).fill().map(()=>
                   <SkeletonTheme color="#37474F" highlightColor="#546E7A">
                      
                       <Skeleton height={275} width={183}>
                       </Skeleton>
                   </SkeletonTheme>)}

               </div>
            </div>

            <div className="mobileViewMonth">
               <HeadingTitleMob title="Top Month's pick for you" margin="10px 0px"></HeadingTitleMob> 
               <div className="monthsPickContainer">  
                   {this.props.loadingState?
                   datalist.map((book,id)=>{
                       return<ImageCardMob 
                                key={id}
                                bookName={book.title}
                                aboutBook={book.description}
                                link={book.book_image}
                               
                                id={book._id}
                       ></ImageCardMob>
                   })
                   :Array(2).fill().map(()=>
                   <SkeletonTheme color="#37474F" highlightColor="#546E7A">
                      
                       <Skeleton height={220} width={140}>
                       </Skeleton>
                   </SkeletonTheme>)}

               </div>
            </div>


            </div>
        )
    }
}

const mapStateToProps=(state)=>(
    {
        collection:state.collection
    }
)
export default connect(mapStateToProps,null)(monthsPick);

const express = require('express');
const router =  express.Router();
const BookCollection=require('../../Model/BookCollection/bookCollection');


// router.post('/bookcollection',async(req,res)=>{

  
    
    
//     axios.get("https://api.nytimes.com/svc/books/v3/lists/current/Family?api-key=tSeNjo35fgt58QGVy0ywqC3HGqhPSWhV")
//     .then((response)=>{
//         if(response)
//         {
//             const length=(response.data.results.books.length);
//             const bookdata=response.data.results.books;
//             for(let i=0;i<length;i++)
//             {
//                 const newBookCollection=new BookCollection({
//                     rate:bookdata[i].rate,
//                     title:bookdata[i].title,
//                     author:bookdata[i].author,
//                     book_image:bookdata[i].book_image,
//                     description:bookdata[i].description,
//                     tags:["Family"]
//                 });
//                 newBookCollection.save(); 
//             }
//             res.status(200).send("successful");
//         }
//     }).catch((e)=>console.log(e))
   
  

// });


router.get('/api/:bookId',async(req,res)=>{
    const {bookId}=req.params;
    BookCollection.findById(bookId).then((result)=>
    res.status(200).send(result)).catch((e)=>console.log(e))
    })

 module.exports=router;
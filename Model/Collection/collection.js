import {Schema,model} from 'mongoose';
const IndCollectionSchema=new Schema({
    bookTitle:{
        type:String,
        require:true
    },
    bookAuthor:{
        type:String,
        require:true
    },
    bookReview:{
        type:String,
        require:true
    },
   

})
const IndCollection=model('indcollection',IndCollectionSchema);
export default IndCollection;
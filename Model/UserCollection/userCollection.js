import {Schema,model} from 'mongoose';
const UserCollectionSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true
    }
  

})
const UserCollection=model('collection',UserCollectionSchema);
export default UserCollection;
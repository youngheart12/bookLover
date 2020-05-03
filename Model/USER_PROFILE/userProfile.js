import { Schema, model } from 'mongoose';

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true
  },
  about:{
      type:String,
      require:true
  },
 
  register_date: {
    type: Date,
    default: Date.now
  },
  ownerCollection:[{
    type:Schema.Types.ObjectId,
    ref:'indcollection'
  }],
});

const User = model('user', UserSchema);

export default User;
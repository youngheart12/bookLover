import { Router } from 'express';
import User from '../../Model/USER_PROFILE/userProfile';
import IndCollection from '../../Model/Collection/collection';
import { Collection } from 'mongoose';
const router = Router();
router.post('/owner/:userId',async(req,res)=>{
    const {userId}=req.params;

    const {bookReview,bookAuthor,bookTitle}=req.body;

    const newIndCollection=new IndCollection({
        bookAuthor,bookTitle,bookReview
    });
   
    const userProfile=await User.findById(userId);
    
    newIndCollection.owner=userProfile;
    await newIndCollection.save();

    userProfile.ownerCollection.push(newIndCollection);
    await userProfile.save().then((num)=>{
        res.status(200).json({
            num
        })
    });
    
})


router.get('/owner/:userId',async(req,res)=>{
    const {userId}=req.params;
    const userProfile=await User.findById(userId).populate('ownerCollection');
    res.status(200).send(userProfile.ownerCollection);
  
})

router.delete('/owner/update/:collectionId',async(req,res)=>{
    const {collectionId}=req.params;
    const deletedCollection= await IndCollection.findByIdAndDelete(collectionId);
    res.status(200).send(deletedCollection);
})

router.patch('/owner/update/:collectionId',async(req,res)=>{
    const {collectionId}=req.params;
    const updatedCollection= await IndCollection.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
    res.status(200).send(updatedCollection);
})
export default router;

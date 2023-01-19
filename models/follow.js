import mongoose from 'mongoose';

const followSchema = mongoose.Schema({
    follower:{
        type:String,
        required:true    
    },
    following:{
        type:String,
        required:true    
    },
    timestamp:{
        type:Date
    }
})

const follow = mongoose.model('follow', followSchema);

export default follow;
import mongoose from "mongoose";


const postSchema = new mongoose.Schema({
    /**poster is a post uploaded photo and it should be stored in a third party database
     * here we just store a url of the post
     */
    content :{
        type: String, 
        required : 'post content is required.'
    },
    poster :{
        type: String, 
        required : 'the poster is required.'
    },

    reply :[{
        type: String
    }],

    createdDate :{
        type: Date, 
        default : Date.now
    },
    modifiedDate :{
        type: Date, 
        default : Date.now
    }

}, {versionKey: false});

postSchema.virtual('id', () => this._id.toHexString());
postSchema.set('toJSON', {virtual : true});

const postModel = mongoose.model('post', postSchema);

export default postModel;
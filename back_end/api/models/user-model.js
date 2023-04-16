import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    /**poster is a user uploaded photo and it should be stored in a third party database
     * here we just store a url of the user
     */
    username :{
        type: String, 
        required : 'username is required.',
        min: 5,
        max:20,
        unique:true
    },
    password :{
        type: String, 
        required : 'password is required.',
        min:8
    },
    email :{
        type: String,
        required:true,
        max:50,
        unique:true
    },

    profilePicture: {
        type: String,
        default: "",
      },
      coverPicture: {
        type: String,
        default: "",
      },
    followers:{
        type:Array,
        default:[]
    },
    followings:{
        type:Array,
        default:[]
    },
    likes :{
        type: Number,
        default:0
    },
    desc: {
        type: String,
        max: 50,
      },
      city: {
        type: String,
        max: 50,
      },
    createdDate :{
        type: Date, 
        default : Date.now
    },
    modifiedDate :{
        type: Date, 
        default : Date.now
    }

}, {versionKey: false});

userSchema.virtual('id', () => this._id.toHexString());
userSchema.set('toJSON', {virtual : true});

const userModel = mongoose.model('user', userSchema);

export default userModel;
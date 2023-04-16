import mongoose from "mongoose";

const userImageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    img:
    {
        data:Buffer,
        contentType: String
    }
})

const userImageModel =mongoose.model("userImage",userImageSchema);

export default userImageModel;
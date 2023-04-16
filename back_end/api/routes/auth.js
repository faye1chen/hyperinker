import express from 'express';
import User from '../models/user-model.js';
import bcrypt from 'bcrypt';
const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        //Generate an encrypted password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        //create new user  
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword

        })
        //save user and return response
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err)
    }
})

//User Login
router.post("/login", async (req, res) => {
    //try {
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(404).json("user not found");
  
      const validPassword = await bcrypt.compare(req.body.password, user.password)
      !validPassword && res.status(400).json("wrong password")
  
      res.status(200).json(user)
    // } catch (err) {
    //   res.status(500).json(err)
    //   console.log("hello")
    // }
  });
  
  export default router;
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import usersRoutes from './routes/index.js';
import postsRoutes from './routes/post-router.js';
import {userImageModel} from './models/index.js';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';
import multer from 'multer';
const __filenameNew = fileURLToPath(import.meta.url)
const __dirnameNew = path.dirname(__filenameNew)
import userModel from './models/index.js';
import authRoute from './routes/auth.js';
import morgan from 'morgan';
import helmet from 'helmet';


const app = express();
/**this part of code deal with user profile
 * different data is stored in different database
 */
mongoose.connect('mongodb://localhost:27017/usersdb');
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


/**this following part deal with picture storage 
 * require is not defined in ES module scope, you can use import instead
 * bodyParser =require('body-parser');
fs=require('fs');
path =require('path');
require('dotenv/config');
*/

mongoose.connect('mongodb://localhost:27017/userImagesdb',
    { useNewUrlParser: true, useUnifiedTopology: true }, err => {
        console.log('connected')
    });
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set("view engine","ejs");

//set up multer for storing uploaded files
var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'api/uploads')
	},
	filename: (req, file, cb) => {
		cb(null,file.originalname)
		//cb(null, file.fieldname + '-' + Date.now()+'.png')
	}
});

var upload = multer({ storage: storage,
	fileFilter:function(req,file,callback){
		if(
			file.mimetype=="image/png" ||
			file.mimetype=="image/jpg"
		){
			callback(null,true)
		} else{
			console.log("only png or jpg file supported")
			callback(null,false)
		}
	}
});

//set up request
//the GET request handler that provides the HTML UI
const setErrorResponse = (error, res) => {
    res.status(500);
    res.json(error);
}

/* query is not used in const contact = await contactsService.remove(id);
 */

const setSuccessResponse = (obj, res) => {
    res.status(200);
    res.json(obj);
}

app.get('/userImages',async(req, res) => {
	
	const allData= await userImageModel.find()
	res.json(allData)
	
	// try{
	// 	const id =req.params.id;
	// 	const userImage=userImageModel.findById(id);
	// 	console.log(userImage.name);
	// 	setSuccessResponse(userImage, res);
	// }
	// catch(error){
	// 	setErrorResponse(error, res);
	// }


	// userImageModel.find({}, (err, items) => {
	// 	if (err) {
	// 		console.log(err);
	// 		res.status(500).send('An error occurred', err);
	// 	}
	// 	else {
	// 		res.render('imagesPage', { items: items });
	// 	}
	// });
});

//the POST handler for processing the uploaded file

app.post('/userImages', upload.single('image'), (req, res, next) => {

	var obj = {
		name: req.body.name,
		desc: req.body.desc,
		img: {
			
			data: fs.readFileSync(path.join(__dirnameNew + '/uploads/' + req.file.filename)),
			contentType: 'image/png'
		}
	}
	userImageModel.create(obj, (err, item) => {
		if (err) {
			console.log(err);
		}
		else {
			item.save();
			// res.send('image is saved')
			console.log("post is triggered")
			//res.redirect('/');
		}
	});
});






/*do not miss this step*/
usersRoutes(app);
postsRoutes(app);

app.use("/api", authRoute);
export default app;
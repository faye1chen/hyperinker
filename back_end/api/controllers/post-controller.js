import postModel from '../models/post-model.js';
import * as postsService from '../services/post-service.js';

const setErrorResponse = (error, response) => {
    response.status(500);
    response.json(error);
}

/* query is not used in const post = await postsService.remove(id);
 */

const setSuccessResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}


export const post = async (request, response) => {
    try{
        const payload = request.body;
        const post = await postsService.save(payload);
        setSuccessResponse(post, response);
    }
    catch(error){
        setErrorResponse(error, response);
    } 
}



export const index = async (request, response) => {
    try{
        // console.log(request.query);
        // console.log(request.query.search);
        // const query = {"poster":request.query.search};
        // console.log(query);
        // const posts = await postsService.search(query);
        const search = request.query.search ||"";
        const posts = await postModel.find({ content: { $regex: search, $options: "i" } });
        
        console.log(posts);
        setSuccessResponse(posts, response);
    }
    catch(error){
        setErrorResponse(error, response);
    } 
}


export const get = async (request, response) => {
    try{
        const id = request.params.id;
        const posts = await postsService.get(id);
        setSuccessResponse(posts, response);
    }
    catch(error){
        setErrorResponse(error, response);
    } 
}


export const update = async (request, response) => {
    try{
        const id = request.params.id;
        const updated = {...request.body};
        updated.id = id;
        const post = await postsService.update(updated);
        setSuccessResponse(post, response);
    }
    catch(error){
        setErrorResponse(error, response);
    } 
}

/* query is not used in const post = await postsService.remove(id);
 */
export const remove = async (request, response) => {
    try{
        const id = request.params.id;
        const post = await postsService.remove(id);
        setSuccessResponse({message: `Successfully removed ${id}`}, response);
    }
    catch(error){
        setErrorResponse(error, response);
    } 
}


import * as usersService from '../services/user-service.js';
import userModel from '../models/user-model.js';

const setErrorResponse = (error, response) => {
    response.status(500);
    response.json(error);
}

/* query is not used in const user = await usersService.remove(id);
 */

const setSuccessResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}


export const post = async (request, response) => {
    try{
        const payload = request.body;
        const user = await usersService.save(payload);
        setSuccessResponse(user, response);
    }
    catch(error){
        setErrorResponse(error, response);
    } 
}



export const index = async (request, response) => {
    try{
        const username = request.query.username ||"";
        const users= await userModel.find({ username: { $regex: username, $options: "i" } });
        //const users = await usersService.search(query);
        setSuccessResponse(users, response);
    }
    catch(error){
        setErrorResponse(error, response);
    } 
}


export const get = async (request, response) => {
    try{
        const id = request.params.id;
        const users = await usersService.get(id);
        setSuccessResponse(users, response);
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
        const user = await usersService.update(updated);
        setSuccessResponse(user, response);
    }
    catch(error){
        setErrorResponse(error, response);
    } 
}

/* query is not used in const user = await usersService.remove(id);
 */
export const remove = async (request, response) => {
    try{
        const id = request.params.id;
        const user = await usersService.remove(id);
        setSuccessResponse({message: `Successfully removed ${id}`}, response);
    }
    catch(error){
        setErrorResponse(error, response);
    } 
}


import User from '../models/user-model.js';

/**
 * method to save a user
 * @param {userDetails} newUser 
 * @returns user
 */
export const save = (newUser) => {
    const user = new User(newUser);
    return user.save();
}


/**
 * method to search for a user 
 * @param {} query 
 * @returns user
 */
export const search = (query) => {
    const params = {...query};
    return User.find(params).exec();
}

/**
 * method to fetch a user based on their Id
 * @param {*} id 
 * @returns 
 */
export const get = (id) => {
    const user = User.findById(id).exec();
    return user;
}

/**
 * method to update a user with the given values
 * @param {*} updateUser 
 * @returns 
 */
export const update = (updatedUser) => {
    updatedUser.modifiedDate = new Date();
    const user = User.findByIdAndUpdate(updatedUser.id, updatedUser).exec();
    return user;
}

/**
 * method to delete a user based on the passed userId
 * @param {*} id 
 * @returns 
 */
export const remove = (id) => {
    const user = User.findByIdAndDelete(id).exec();
    return user;
}
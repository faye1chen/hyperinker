import Post from '../models/post-model.js';

/**
 * method to save a post
 * @param {postDetails} newPost 
 * @returns post
 */
export const save = (newPost) => {
    const post = new Post(newPost);
    return post.save();
}


/**
 * method to search for a post 
 * @param {} query 
 * @returns post
 */
export const search = (query) => {
    const params = {...query};
    return Post.find(params).exec();
}

/**
 * method to fetch a post based on their Id
 * @param {*} id 
 * @returns 
 */
export const get = (id) => {
    const post = Post.findById(id).exec();
    return post;
}

/**
 * method to update a post with the given values
 * @param {*} updatePost 
 * @returns 
 */
export const update = (updatedPost) => {
    updatedPost.modifiedDate = new Date();
    const post = Post.findByIdAndUpdate(updatedPost.id, updatedPost).exec();
    return post;
}

/**
 * method to delete a post based on the passed postId
 * @param {*} id 
 * @returns 
 */
export const remove = (id) => {
    const post = Post.findByIdAndDelete(id).exec();
    return post;
}
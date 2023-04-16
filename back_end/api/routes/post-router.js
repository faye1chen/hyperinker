import express from "express";
import * as postController from '../controllers/post-controller.js';
const postsRoutes = express.Router();

/**
 * requests to the posts object that do not involve contactId are stacked together
 */
 postsRoutes.route('/posts')
.post(postController.post)
.get(postController.index);

/**
 * requests to the posts object that involve postId are stacked together
 */
 postsRoutes.route('/posts/:id')
.get(postController.get)
.put(postController.update)
.delete(postController.remove);

export default  (app) => {
    app.use('/', postsRoutes);
}
import express from "express";
import * as userController from '../controllers/user-controller.js';
const router = express.Router();

/**
 * requests to the contacts object that do not involve contactId are stacked together
 */
router.route('/users')
.post(userController.post)
.get(userController.index);

/**
 * requests to the todos object that involve contactId are stacked together
 */
router.route('/users/:id')
.get(userController.get)
.put(userController.update)
.delete(userController.remove);

export default router
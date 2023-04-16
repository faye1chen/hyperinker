import userModel from './user-model.js';
import userImageModel from './user-image-model.js';
import postModel from './post-model.js';

/**can not write as 
 * export default {userModel};
 * export defalt  {userImageModel};
 * because one js file can only have one default export
 */
export default {userModel};
export {userImageModel};
export {postModel};
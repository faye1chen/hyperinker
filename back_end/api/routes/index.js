import usersRouter from './user-router.js';

export default (app) => {
    app.use('/', usersRouter);
}
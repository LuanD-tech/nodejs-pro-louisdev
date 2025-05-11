import express, {Express} from 'express'
import { getHomePage, getCreateUserPage, postCreateUser, postDeleteUser, getViewUser, postUpdateUser } from 'controllers/user.controller';

const router = express.Router();

const webRoutes = (app: Express) => {
    // GET Method
    router.get('/', getHomePage);
    router.get('/create-user', getCreateUserPage);
    router.get('/handle-view-user/:id', getViewUser);
    // POST Method
    router.post('/handle-create-user', postCreateUser);
    router.post('/handle-delete-user/:id', postDeleteUser);
    router.post('/handle-update-user', postUpdateUser);
    
    
    app.use('/', router);
}

export default webRoutes;
import express, {Express} from 'express'
import { getHomePage, getCreateUserPage, postCreateUser, postDeleteUser, getViewUser, postUpdateUser } from 'controllers/user.controller';
import { getAdminUserPage, getDashboardPage, getAdminProductPage, getAdminOrderPage } from 'controllers/admin/dashboard.controller';

const router = express.Router();

const webRoutes = (app: Express) => {
    // GET Method
    router.get('/', getHomePage);
    router.get('/handle-view-user/:id', getViewUser);
    // POST Method
    router.post('/handle-create-user', postCreateUser);
    router.post('/handle-delete-user/:id', postDeleteUser);
    router.post('/handle-update-user', postUpdateUser);
    
    // adin routes
    router.get('/admin', getDashboardPage);
    // Admin User
    router.get('/admin/user', getAdminUserPage);
    router.get('/admin/create-user', getCreateUserPage);

    router.get('/admin/product', getAdminProductPage);
    router.get('/admin/order', getAdminOrderPage);
    
    app.use('/', router);
}

export default webRoutes;
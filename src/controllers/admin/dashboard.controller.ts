import { Request, Response } from "express";
import { getAllUsers } from "services/user-services";

// Home Page
const getDashboardPage = async (req: Request, res: Response) => {

    return res.render('admin/dashboard/show.ejs');
}

// Admin Page
const getAdminUserPage = async (req: Request, res: Response) => {
    const users = await getAllUsers();
    return res.render('admin/user/showUser.ejs', {
        users: users
    });
}

// Product Page
const getAdminProductPage = async (req: Request, res: Response) => {

    return res.render('admin/product/showProduct.ejs');
}

// Order Page
const getAdminOrderPage = async (req: Request, res: Response) => {

    return res.render('admin/order/showOrder.ejs');
}

// Export
export {getDashboardPage, getAdminUserPage, getAdminProductPage, getAdminOrderPage}
import { Request, Response } from "express";

// / Home Page
const getDashboardPage = async (req: Request, res: Response) => {

    return res.render('admin/dashboard/show.ejs');
}

// / Admin Page
const getAdminUserPage = async (req: Request, res: Response) => {

    return res.render('admin/user/show.ejs');
}

export {getDashboardPage, getAdminUserPage}
import { Request, Response } from "express";

// / Home Page
const getDashboardPage = async (req: Request, res: Response) => {

    return res.render('admin/dashboard.ejs');
}

export {getDashboardPage}
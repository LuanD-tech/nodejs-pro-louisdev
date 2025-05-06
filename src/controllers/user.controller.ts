import { Request, Response } from "express";

// Home Page
const getHomePage = (req: Request, res: Response) => {
    return res.render('home');
}
// Create-User Method
const getCreateUserPage = (req: Request, res: Response) => {
    return res.render('create-user');
}

// Post-User Method
const postCreateUser = (req,res) => {
    console.log('>>> check data: ', req.body);
    return res.redirect('/');
}

export { getHomePage, getCreateUserPage, postCreateUser };
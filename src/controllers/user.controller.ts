import { Request, Response } from "express";
import { handleCreateUser } from "../services/user-services";

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

    const {fullName, email, address} = req.body; 

    // handle create user
    handleCreateUser(fullName, email, address)

    return res.redirect('/');
}

export { getHomePage, getCreateUserPage, postCreateUser };
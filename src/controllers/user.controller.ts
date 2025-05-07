import { Request, Response } from "express";
import { getAllUsers, handleCreateUser } from "../services/user-services";
import { name } from "ejs";

// Home Page
const getHomePage = async (req: Request, res: Response) => {
    // get Users
    const users = await getAllUsers();
    console.log('>>> check user: ', users);

    return res.render('home', {
        users: users
    });
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
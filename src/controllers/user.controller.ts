import { Request, Response } from "express";
import { getAllUsers, handleCreateUser, handleDeleteUser } from "services/user-services";
import { name } from "ejs";

// Home Page
const getHomePage = async (req: Request, res: Response) => {
    // get Users
    const users = await getAllUsers();
    
    return res.render('home', {
        users: users
    });
}
// Create-User Method
const getCreateUserPage = (req: Request, res: Response) => {
    return res.render('create-user');
}

// Post-User Method
const postCreateUser = async (req,res) => {

    const {fullName, email, address} = req.body; 

    // handle create user
    await handleCreateUser(fullName, email, address)

    return res.redirect('/');
}

// Post-User Method
const postDeleteUser = async (req,res) => {
    const {id} = req.params;
    await handleDeleteUser(id);
    return res.redirect('/');
}

export { getHomePage, getCreateUserPage, postCreateUser, postDeleteUser };
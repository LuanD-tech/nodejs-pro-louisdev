import { Request, Response } from "express";
import { getAllUsers, getUserById, handleCreateUser, handleDeleteUser } from "services/user-services";

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

// Get-View-User Method
const getViewUser = async (req: Request, res: Response) => {
    const {id} = req.params;
    // get user by id
    const user = await getUserById(id);
      
    return res.render('view-user.ejs', {
        id: id,
        user: user
    })
}

export { getHomePage, getCreateUserPage, postCreateUser, postDeleteUser, getViewUser };
import { Request, Response } from "express";
import { getAllUsers, getUserById, handleCreateUser, handleDeleteUser, updateUserById } from "services/user-services";

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
    return res.render('admin/user/create.ejs');
}

// Post-User Method
const postCreateUser = async (req,res) => {

    const {fullName, email, address} = req.body; 

    // handle create user
     await handleCreateUser(fullName, email, address)

    return res.redirect('/');
}

// Post-User Method
const postDeleteUser = async (req: Request, res: Response) => {
    const {id} = req.params;
    const a = await handleDeleteUser(id);
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

const postUpdateUser = async (req: Request, res: Response) => {
    const {id, email, address, fullName} = req.body;
    // update user by id
    const a = await updateUserById(id, email, address, fullName);
      
    return res.redirect('/');
}

export { getHomePage, getCreateUserPage, postCreateUser, postDeleteUser, getViewUser, postUpdateUser };
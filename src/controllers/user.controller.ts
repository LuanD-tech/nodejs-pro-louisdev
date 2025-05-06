import { Request, Response } from "express";

// Home Page
const getHomePage = (req: Request, res: Response) => {
    return res.render('home')
}
// Create-User Page
const getCreateUserPage = (req: Request, res: Response) => {
    return res.render('create-user')
}

export { getHomePage, getCreateUserPage };
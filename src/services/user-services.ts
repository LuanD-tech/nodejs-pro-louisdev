import getConnection from "config/database";
import { prisma } from "config/client";

const handleCreateUser = async (
    fullName: string,
    email: string,
    address: string) => {

    

    // Method Create Of Prisma
    const newUser = await prisma.user.create({
        data: {
            name: fullName,
            email: email,
            address: address
        }
    })
    return newUser;
}

const getAllUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
}

const handleDeleteUser = async (id: string) => {
    const result =  await prisma.user.delete({
        where: {id: +id}
    })
    return result;
}

const getUserById = async (id: string) => {
    const user = await prisma.user.findUnique({where: {id: +id}});
    return user;
}

// Update User By ID
const updateUserById = async (id: string, email: string, address: string, fullName: string) => {
    const updatedUser = await prisma.user.update({
        where: {id: +id}, //thêm dấu cộng biến từ String thành INT chỉ dùng cho JS
        data: {
            name: fullName,
            email: email,
            address: address
        }
    })
    return updatedUser;
}

export { handleCreateUser, getAllUsers, handleDeleteUser, getUserById, updateUserById }
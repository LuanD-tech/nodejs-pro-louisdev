import { prisma } from "config/client";

const initDatabase = async () => {
    const countUser = await prisma.user.count();
    const countRole = await prisma.role.count();
    if (countUser === 0) {
        prisma.user.createMany({
            data: [
                {
                    username: "louisdev@email.com",
                    password: "123456",
                    accountType: "SYSTEM"
                },
                {
                    username: "admin@email.com",
                    password: "123456",
                    accountType: "SYSTEM"
                },
            ]
        })
    }

    else if (countRole === 0) {
        await prisma.role.createMany({
            data: [
                {
                    name: 'ADMIN',    
                    description: 'Admin full quyền'
                },

                {
                    name: 'USER',    
                    description: 'User thông thường'
                },
            ]
        })
    }
    
    else {
        console.log(">>> ALREADY INIT DATA...");
    }
} // Lưu ý có lỗi ở đây!!!

export default initDatabase;
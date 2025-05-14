import { prisma } from "config/client";

const initDatabase = async () => {
    const countUser = await prisma.user.count();
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
    } else {
        console.log(">>> ALREADY INIT DATA...");
    }
} // Lưu ý có lỗi ở đây!!!

export default initDatabase;
const { PrismaClient } = require("@prisma/client");
const usersSeed = require('./seeds/user');
const rolesSeed = require('./seeds/role');

// model Post {
//     id        Int      @id @default(autoincrement())
//     title     String   @db.VarChar(255)
//     createdAt DateTime @default(now()) @db.Timestamp(6)
//     content   String?
//     published Boolean  @default(false)
//     author    User     @relation(fields: [authorId], references: [id])
//     authorId  Int
// }

const prisma = new PrismaClient();

async function main() {
    console.log("Start seeding...");
    // for (let user of usersSeed) {
    //     await prisma.user.createMany({ data: user })
    // }
    for (let role of rolesSeed) {
        await prisma.role.createMany({ data: role })
    }
}

main().catch((e) => {
    console.log(e);
    process.exit(1);
}).finally(() => {
    prisma.$disconnect()
});

console.log("Bottom of script");
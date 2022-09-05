const express = require("express");
const router = express.Router();
// const { PrismaClient } = require('@prisma/client')

// const prisma = new PrismaClient()

router.get("/users", async (req, res) => {
    // const newUser = await prisma.user.create({
    //     data: {
    //       name: 'Alice',
    //       email: 'alice@gmail.comsw',
    //       jobTitle: "ssssss"
    //     },
    // })
    res.send({ name1: "john", name2: "john2" })
});

router.get("/user", (req, res) => {
    res.send({ name1: "john" })
});

module.exports = router;
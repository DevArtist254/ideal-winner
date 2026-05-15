const express = require("express");

const router = express.Router();

router.get("/login", (req, res) => {
    res.render("login", {
        title: "Login to your account",
        message: "Hello there!"
    })
})

router.get("/signup", (req, res) => {
    res.render("signup", {
        title: "Sign up to your account",
        message: "Hello there!"
    })
})
module.exports = router;

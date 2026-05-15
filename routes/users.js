const { log } = require("console");
const express = require("express");
const fs = require("fs");

const router = express.Router();

router.post("/login", (req, res) => {
    const currentUser = req.body.email;
    log(currentUser)
    let signedupUser;

    fs.readFile("./data/user.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log(`File read filed: ${err}`)
            return;
        }

        try {
            const user = JSON.parse(jsonString);
            signedupUser = user.email;
        } catch (err) {
            console.log(err);
        }
    })
    if (!signedupUser && signedupUser === currentUser) {
        res.render("index", {
            title: `Your have successfully login`,
            message: `Hello there ${signedupUser.username}!`
        })
    } else {
        res.render("signup", {
            title: "Sign up to your account",
            message: "No such user please signup"
        })
    }

});

router.post("/signup", (req, res) => {
    const data = req.body;

    const jsonData = JSON.stringify(data, null, 2);

    fs.writeFile('./data/user.json', jsonData, 'utf8', (err) => {
        if (err) console.log(err);
        console.log('Success');
    })

    res.status(200).json({
        status: "success"
    })
})

module.exports = router;

const express = require("express");
const path = require("path");

const userRouter = require("./routes/users");
const viewsRouter = require("./routes/views");
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    type: "application/x-www-form-urlencoded",
    extended: true
}))
app.use(express.json({ limit: "100kb" }));

app.use("/api/v1/", userRouter);
app.use(viewsRouter);

module.exports = app;

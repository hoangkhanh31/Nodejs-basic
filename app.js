require("dotenv").config();
const morgan = require("morgan"); //HTTP request logger middleware for node.js
const express = require("express"); //commonjs     //--or-- import express from 'express';    // es modules
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");

const app = express(); // app express
const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME;

//config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

//config template engine
configViewEngine(app);

//Middleware: App
app.use((req, res, next) => {
    // check điều kiện => return redirect hoặc là cho request đi tiếp
    next(); // cho request đi tiếp
});
//Middleware: Log request
app.use(morgan("combined"));
//Khai báo route
app.use("/", webRoutes);
app.use("/api/v1/", apiRoutes);

//Middleware: handle 404 not found (bắt buộc nằm ở sau các khai báo route, vì nếu không tìm thấy route thì sẽ trả về 404)
app.use((req, res) => {
    return res.render("404.ejs");
});

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});

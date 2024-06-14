const connection = require('../config/database');

const getHomePage = (req, res) => {
    return res.render('home.ejs') //render ra view
}

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    // let {email, name, city} = req.body;

    const sql = "INSERT INTO Users (email, name, city) VALUES (?, ?, ?)";
    const values = [email, name, city];

    const [result, fields] = await connection.execute(sql, values);

    res.send('Created user succeed !');
}

const getCreateUserPage = (req, res) => {
    res.render('create.ejs')
}

module.exports = {
    getHomePage, postCreateUser, getCreateUserPage
}
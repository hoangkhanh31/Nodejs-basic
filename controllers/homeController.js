const connection = require('../config/database');
const { getAllUsers } = require('../services/UserService')

const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { users: results });
}

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    // let {email, name, city} = req.body;

    let sql = "INSERT INTO Users (email, name, city) VALUES (?, ?, ?)";
    let values = [email, name, city];

    let [result, fields] = await connection.execute(sql, values);

    res.send('Created user succeed !');
}

const getCreateUserPage = (req, res) => {
    res.render('create.ejs')
}

module.exports = {
    getHomePage, postCreateUser, getCreateUserPage
}
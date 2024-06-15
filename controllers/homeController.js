const connection = require('../config/database');
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/UserService')

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

    res.redirect('/');
}

const getCreateUserPage = (req, res) => {
    res.render('create.ejs')
}

const getUpdateUserPage = async (req, res) => {
    let userId = req.params.id;
    let user = await getUserById(userId);
    res.render('edit.ejs', { user: user });
}

const postUpdateUser = async (req, res) => {
    let id = req.body.id;
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    await updateUserById(id, email, name, city);

    res.redirect('/');
}

const postDeleteUser = async (req, res) => {
    let userId = req.params.id;
    await deleteUserById(userId);
    res.redirect('/');
}

module.exports = {
    getHomePage, postCreateUser,
    getCreateUserPage, getUpdateUserPage,
    postUpdateUser, postDeleteUser
}
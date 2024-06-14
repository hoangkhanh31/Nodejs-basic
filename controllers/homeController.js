const connection = require('../config/database');

const getHomePage = (req, res) => {
    return res.render('home.ejs') //render ra view
}

const postCreateUser = (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    // let {email, name, city} = req.body;

    const sql = "INSERT INTO Users (email, name, city) VALUES (?, ?, ?)";
    const values = [email, name, city];

    connection.query(sql, values, (err, result, fields) => {
        if (err instanceof Error) {
            console.log(err);
            return;
        }
        console.log(result);
    });

    res.send('Created user succeed !');
}

module.exports = {
    getHomePage, postCreateUser
}
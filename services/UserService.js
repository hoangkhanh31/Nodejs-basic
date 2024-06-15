const connection = require('../config/database');

const getAllUsers = async () => {
    let sql = "SELECT * FROM Users";
    let [results, fields] = await connection.execute(sql);
    return results;
}

const getUserById = async (id) => {
    let sql = "SELECT * FROM Users WHERE id = ?";
    let values = [id];
    let [results, fields] = await connection.execute(sql, values);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}

const updateUserById = async (id, email, name, city) => {
    let sql = "UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?";
    let values = [email, name, city, id];
    let [results, fields] = await connection.execute(sql, values);
}

module.exports = {
    getAllUsers, getUserById,
    updateUserById
}
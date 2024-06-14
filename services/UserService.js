const connection = require('../config/database');

const getAllUsers = async () => {
    let sql = "SELECT * FROM Users";
    let [results, fields] = await connection.execute(sql);
    return results;
}

module.exports = {
    getAllUsers
}
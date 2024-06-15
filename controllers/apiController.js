const connection = require('../config/database');

const index = async (req, res) => {
    let sql = "SELECT * FROM Users";
    let [results, fields] = await connection.execute(sql);

    return res.status(200).json({
        message: 'ok',
        data: results
    });
}

const store = async (req, res) => {
    let { email, name, city } = req.body;

    if (!email || !name || !city) {
        return res.status(200).json({
            message: 'missing required params',
        });
    }

    let sql = "INSERT INTO Users (email, name, city) VALUES (?, ?, ?)";
    let values = [email, name, city];
    let [results, fields] = await connection.execute(sql, values);

    return res.status(200).json({
        message: 'Created user successfully',
    });
}

const update = async (req, res) => {
    let id = req.params.id;
    let { email, name, city } = req.body;

    if (!id || !email || !name || !city) {
        return res.status(200).json({
            message: 'missing required params',
        });
    }

    let sql = "UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?";
    let values = [email, name, city, id];
    let [results, fields] = await connection.execute(sql, values);

    return res.status(200).json({
        message: 'Updated user successfully',
    });
}

const destroy = async (req, res) => {
    let id = req.params.id;

    if (!id) {
        return res.status(200).json({
            message: 'missing required params',
        });
    }

    let sql = "DELETE FROM Users WHERE id = ?";
    let values = [id];
    let [results, fields] = await connection.execute(sql, values);

    return res.status(200).json({
        message: 'Deleted user successfully',
    });
}

module.exports = {
    index, store, update, destroy
}
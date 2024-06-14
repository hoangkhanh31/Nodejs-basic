const express = require('express');
const router = express.Router();
const { getHomePage, postCreateUser, getCreateUserPage } = require('../controllers/homeController');

router.get('/test', (req, res) => {
    res.send('<h1>Test!!!</h1>')
})

router.get('/', getHomePage);
router.get('/create', getCreateUserPage);
router.post('/create-user', postCreateUser);


module.exports = router;    //export default
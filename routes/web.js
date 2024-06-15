const express = require('express');
const router = express.Router();
const { getHomePage, postCreateUser, getCreateUserPage, getUpdateUserPage, postUpdateUser
} = require('../controllers/homeController');

router.get('/test', (req, res) => {
    // res.send('<h1>Test!!!</h1>')
    res.render('index.ejs')
})

router.get('/', getHomePage);
router.get('/users/create', getCreateUserPage);
router.post('/users/store', postCreateUser);
router.get('/users/update/:id', getUpdateUserPage);
router.post('/users/update/:id', postUpdateUser);


module.exports = router;    //export default
const express = require('express');
const router = express.Router();
const { getHomePage, postCreateUser, getCreateUserPage, getUpdateUserPage, postUpdateUser, postDeleteUser
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
router.post('/users/delete/:id', postDeleteUser);


module.exports = router;    //export default
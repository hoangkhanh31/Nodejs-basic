const express = require('express');
const router = express.Router();
const { getHomePage } = require('../controllers/homeController');

router.get('/test', (req, res) => {
    res.send('<h1>Test!!!</h1>')
})

router.get('/', getHomePage)

module.exports = router;    //export default
const getHomePage = (req, res) => {
    res.render('index.ejs') //render ra view
}

const getTest = (req, res) => {

}

module.exports = {
    getHomePage, getTest
}
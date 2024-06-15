const express = require('express');
const apiRouter = express.Router();
const { index, store, update, destroy } = require('../controllers/apiController');

apiRouter.get('/users', index);
apiRouter.post('/users', store);
apiRouter.put('/users/:id', update);
apiRouter.delete('/users/:id', destroy);


module.exports = apiRouter;
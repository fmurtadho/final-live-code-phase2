const router = require('express').Router()
const userController = require('../controllers/userController')
// const middleware = require('../middleware/middleware')

router.post('/signup',userController.signup)
router.post('/signin',userController.signin)

module.exports = router
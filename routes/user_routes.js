// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const {errorHandler}=require("../middleware/error_handler")

router.post('/create',errorHandler, userController.createUser);
router.get('/all',errorHandler, userController.getAllUsers);
router.get('/getUserById/:id', userController.getUserById);
router.delete('/deleteUser/:id', userController.deleteUser);
router.put('/updateUser/:id', userController.updateUser);

module.exports = router;

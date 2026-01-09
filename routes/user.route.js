const express = require('express');
const router = express.Router();
const {getUsers, getUser, addUser, updateUser, deleteUser} = require('../controller/user.controller');

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', addUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);


module.exports = router;
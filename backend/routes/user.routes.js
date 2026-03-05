const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

//User Routes
//Base path: /users

// GET /users/ne

// POST /users - Handle form submission to create new user
router.post("/", userController.createUser);

// GET /users - Display all users
router.get("/", userController.listUsers);

// GET /users/edit/:id - Show form to edit user
// READ single user
router.get("/:id", userController.getUserById);

// POST /users/edit/:id - Handle form submission to update an existing user
router.put("/:id", userController.updateUser);

// POST /users/delete/:id - Handle form submission to delete a user
router.delete("/:id", userController.deleteUser);

module.exports = router;

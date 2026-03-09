const express = require("express");
const userController = require("../controllers/user.controller");
const auth = require("../middleware/auth.middleware");

const router = express.Router();

// Authentication
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);

//User Routes
//Base path: /users

// GET /users/ne

// GET /users - Display all users
router.get("/", auth, userController.listUsers);

// GET /users/edit/:id - Show form to edit user
// READ single user
router.get("/:id", auth, userController.getUserById);

// POST /users/edit/:id - Handle form submission to update an existing user
router.put("/:id", auth, userController.updateUser);

// POST /users/delete/:id - Handle form submission to delete a user
router.delete("/:id", auth, userController.deleteUser);

module.exports = router;

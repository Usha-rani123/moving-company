const User = require("../models/user.model");

/**
 * POST /users
 * Create new user
 */
exports.createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    const user = await User.create({ name, email, age });

    return res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    // Validation errors
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({ errors: messages });
    }

    // Duplicate email
    if (error.code === 11000) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    // Generic error
    return res.status(500).json({
      message: "Error creating user",
    });
  }
};

/**
 * GET /users
 * Get all users
 */
exports.listUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching users",
    });
  }
};

/**
 * GET /users/:id
 * Get single user
 */
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({
      message: "Invalid user id",
    });
  }
};

/**
 * PUT /users/:id
 * Update user
 */
exports.updateUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, age },
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "User updated successfully",
      user,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({ errors: messages });
    }

    if (error.code === 11000) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    return res.status(500).json({
      message: "Error updating user",
    });
  }
};

/**
 * DELETE /users/:id
 * Delete user
 */
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error deleting user",
    });
  }
};

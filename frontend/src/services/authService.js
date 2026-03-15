const API_URL = "http://localhost:5000/users";

/**
 * Login user
 */
const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // store JWT token
      sessionStorage.setItem("token", data.token);

      // store user info
      sessionStorage.setItem("user", JSON.stringify(data.user));

      return { success: true };
    } else {
      return { success: false, message: data.message };
    }
  } catch (error) {
    return { success: false, message: "Server error" };
  }
};

/**
 * Register new user
 */
const register = async (name, email, password) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, data };
    }

    return { success: false, message: data.message };
  } catch (error) {
    return { success: false, message: "Server error" };
  }
};

/**
 * Logout user
 */
const logout = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
};

/**
 * Check if user is logged in
 */
const isAuthenticated = () => {
  return !!sessionStorage.getItem("token");
};

/**
 * Get stored JWT token
 */
const getToken = () => {
  return sessionStorage.getItem("token");
};

/**
 * Get current user
 */
const getUser = () => {
  return JSON.parse(sessionStorage.getItem("user"));
};

export default {
  login,
  register,
  logout,
  isAuthenticated,
  getToken,
  getUser,
};

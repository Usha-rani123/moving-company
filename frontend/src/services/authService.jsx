class AuthService {
  authenticate(username, password) {
    // HArdcoded validation
    if (username === "usharani12" && password === "password123") {
      sessionStorage.setItem("user", username);
      return { success: true, message: "Login successfull" };
    }
    return { success: false, message: "Invalid credentials" };
  }

  isAuthenticated() {
    return sessionStorage.getItem("user") !== null;
  }

  getCurrentUser() {
    return sessionStorage.getItem("user");
  }

  logout() {
    sessionStorage.removeItem("user");
  }
}

//export default new AuthService();
const authService = new AuthService();
export default authService;

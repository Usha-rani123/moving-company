import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/AuthService";
const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  //const [ userName, setUserName] = useState('');
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (email && password) {
  //     onLogin({ email });
  //   }
  // };
  const isFormValid = username.trim() !== "" && password.trim() !== "";

  useEffect(() => {
    if (authService.isAuthenticated()) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(`username: `,username);

    const result = authService.authenticate(username, password);

    if (result.success) {
      navigate("/dashboard");
    } else {
      setError(result.message);
    }
  };

  return (
    <div
      className="container-fluid vh-100 d-flex flex-column align-items-center justify-content-center"
      style={{
        backgroundImage: "url('./assets/admin1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {error && <div className="text-danger mb-3 text-center">{error}</div>}

      <form
        onSubmit={handleSubmit}
        style={{
          width: "300px",
          border: "none",
          marginLeft: "60px", // 👈 moves the login card to the left side
          backgroundColor: "rgba(255, 255, 255, 0.9)", // light transparent background
          borderRadius: "4px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          padding: "10px",
        }}
      >
        <h3 className="card-title text-center mb-4">Login</h3>
        <div className="mb-3">
          <input
            type="username"
            className="form-control"
            placeholder="UserName"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button
          className="btn btn-primary w-100"
          type="submit"
          disabled={!isFormValid}
        >
          Login
        </button>
        <p className="mt-3 mb-3 text-muted">&copy; 2025-2026</p>
      </form>
    </div>
  );
};
export default Login;

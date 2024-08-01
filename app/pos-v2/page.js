"use client";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../public/styles/login-style.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const url = "http://localhost/pos-api/api.php";

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        url,
        {
          op: "login",
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(response.data);

      if (response.data.success) {
        sessionStorage.setItem("user", JSON.stringify(response.data.data));
        Swal.fire("Success", response.data.message, "success");
        router.push("pos-v2/home/");
      } else {
        Swal.fire("Error", response.error || "Invalid credentials!", "error");
      }
    } catch (error) {
      console.error("Login error: ", error);
      Swal.fire(
        "Error",
        error.response ? error.response.data.message : "Something went wrong!",
        "error"
      );
    }
  };

  useEffect(() => {
    const userLoggedIN = JSON.parse(sessionStorage.getItem("user"));
    if (userLoggedIN) {
      router.push("pos-v2/home/");
    }
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      login(e);
    }
  };

  return (
    <div className="login-container">
      <div className="user-icon">
        <i className="bi bi-person-fill"></i>
      </div>
      <h3 className="text-center mb-4">Robinsons Mall Biringan Cashier</h3>
      <form onSubmit={login}>
        <div className="mb-3">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="User name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress}
              required
              autoFocus
            />
            <span className="input-group-text">
              <i className="bi bi-person"></i>
            </span>
          </div>
        </div>

        <div className="mb-3">
          <div className="input-group">
            <input
              className="form-control"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              required
            />
            <span className="input-group-text">
              <i className="bi bi-key" />
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

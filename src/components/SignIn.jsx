import React from "react";

const SignIn = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(135deg, #2C3E50, #3498DB)",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
      }}
    >
      {/* Sign-In Card */}
      <div
        style={{
          width: "400px",
          padding: "30px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "12px",
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
          color: "#000",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#2C3E50",
            fontWeight: "bold",
          }}
        >
          Welcome Back!
        </h2>
        <p style={{ textAlign: "center", marginBottom: "20px", color: "#555" }}>
          Sign in to continue to IntelliClass
        </p>
        <form>
          <label htmlFor="email" style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "20px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "14px",
            }}
            required
          />
          <label htmlFor="password" style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "20px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "14px",
            }}
            required
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#2C3E50",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#1A252F")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#2C3E50")}
          >
            Sign In
          </button>
        </form>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <a href="#forgot-password" style={{ color: "#3498DB", textDecoration: "none", fontWeight: "bold" }}>
            Forgot Password?
          </a>
        </div>
        <div style={{ textAlign: "center", marginTop: "20px", color: "#777" }}>
          <span>Don't have an account? </span>
          <a href="/create-account" style={{ color: "#3498DB", textDecoration: "none", fontWeight: "bold" }}>
            Create Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
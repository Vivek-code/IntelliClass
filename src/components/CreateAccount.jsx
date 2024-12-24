import React from "react";

const CreateAccount = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(135deg, #8E44AD, #3498DB)",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
      }}
    >
      {/* Create Account Card */}
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
            color: "#8E44AD",
            fontWeight: "bold",
          }}
        >
          Create Your Account
        </h2>
        <p style={{ textAlign: "center", marginBottom: "20px", color: "#555" }}>
          Join IntelliClass and start exploring!
        </p>
        <form>
          <label htmlFor="name" style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "14px",
            }}
            required
          />
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
              marginBottom: "15px",
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
            placeholder="Create a password"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "14px",
            }}
            required
          />
          <label htmlFor="confirmPassword" style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Re-enter your password"
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
              backgroundColor: "#8E44AD",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#732D91")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#8E44AD")}
          >
            Create Account
          </button>
        </form>
        <div style={{ textAlign: "center", marginTop: "20px", color: "#777" }}>
          <span>Already have an account? </span>
          <a href="/signin" style={{ color: "#3498DB", textDecoration: "none", fontWeight: "bold" }}>
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
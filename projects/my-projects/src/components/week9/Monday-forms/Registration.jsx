import { useState } from "react";
import "./Registration.css";

export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const allFieldsFilled = name !== "" && email !== "" && password !== "";

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setName("");
    setEmail("");
    setPassword("");
    setShowPassword(false);
  }

  return (
    <div className="page">
      <div className="card">
        <h1>Create Account</h1>

        {submitted && (
          <p className="success-message">Registration successful!</p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="password-row">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={!allFieldsFilled}
          >
            Register
          </button>
        </form>

        <div className="preview">
          <h2>Live Preview</h2>
          <p><span>Name:</span> {name || "—"}</p>
          <p><span>Email:</span> {email || "—"}</p>
          <p><span>Password:</span> {password ? "•".repeat(password.length) : "—"}</p>
        </div>
      </div>
    </div>
  );
}
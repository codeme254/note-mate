import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="log-in-container">
      <h2 className="form-page-title">Login into your account</h2>
      <form action="" className="log-in-form">
        <div className="form-group">
          <label htmlFor="username" className="form-group-lable">
            Enter your username
          </label>
          <input
            type="text"
            className="form-text-input"
            placeholder="username"
            id="username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-group-lable">
            Enter your password
          </label>
          <input
            type="password"
            className="form-text-input"
            placeholder="password"
            id="password"
          />
        </div>

        <div className="form-bottom-controls">
          <button type="submit" className="form-btn">
            Login
          </button>

          <p className="form-guide">
            Dont have an account? <Link to="/sign-up">Sign up</Link>{" "}
          </p>
          <Link to="/" className="form-back">
            Go back home
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

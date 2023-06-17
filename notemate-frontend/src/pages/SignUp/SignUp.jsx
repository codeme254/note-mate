import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./SignUp.css";
import { motion } from "framer-motion";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <motion.div
      className="sign-up-container"
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      exit={{ opacity: 0.2 }}
    >
      <h2 className="form-page-title">Create your notemate account</h2>

      <form
        action=""
        className="sign-up-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-group">
          <label htmlFor="firstName" className="form-group-lable">
            First Name
          </label>
          <input
            type="text"
            className="form-text-input"
            placeholder="first name"
            id="firstName"
            {...register("firstName", { required: true })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="form-group-lable">
            last Name
          </label>
          <input
            type="text"
            className="form-text-input"
            placeholder="last name"
            id="lastName"
            {...register("lastName", { required: true })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailAddress" className="form-group-lable">
            email address
          </label>
          <input
            type="email"
            className="form-text-input"
            placeholder="email address"
            id="emailAddress"
            {...register("emailAddress", { required: true })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username" className="form-group-lable">
            pick a username
          </label>
          <input
            type="text"
            className="form-text-input"
            placeholder="username"
            id="username"
            {...register("username", { required: true })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-group-lable">
            create a strong password
          </label>
          <input
            type="password"
            className="form-text-input"
            placeholder="password"
            id="password"
            {...register("password", { required: true })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confpass" className="form-group-lable">
            confirm your password
          </label>
          <input
            type="password"
            className="form-text-input"
            placeholder="confirm your password"
            id="confpass"
            {...register("confpass", { required: true })}
          />
        </div>
        <div className="form-bottom-controls">
          <button type="submit" className="form-btn">
            Create account
          </button>

          <p className="form-guide">
            Already have an account? <Link to="/login">login</Link>{" "}
          </p>
          <Link to="/" className="form-back">
            Go back home
          </Link>
        </div>
      </form>
    </motion.div>
  );
};

export default SignUp;

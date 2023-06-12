import { Link } from 'react-router-dom';
import "./SignUp.css";
const SignUp = () => {
    return(
        <div className='sign-up-container'>
            <h2 className='form-page-title'>Create your notemate account</h2>
            <form action="" className='sign-up-form'>
                <div className="form-group">
                    <label htmlFor="firstName" className="form-group-lable">First Name</label>
                    <input type="text" className="form-text-input" placeholder="first name" id="firstName" />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName" className="form-group-lable">last Name</label>
                    <input type="text" className="form-text-input" placeholder="last name" id="lastName" />
                </div>
                <div className="form-group">
                    <label htmlFor="emailAddress" className="form-group-lable">email address</label>
                    <input type="email" className="form-text-input" placeholder="email address" id="emailAddress" />
                </div>
                <div className="form-group">
                    <label htmlFor="username" className="form-group-lable">pick a username</label>
                    <input type="text" className="form-text-input" placeholder="username" id="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-group-lable">create a strong password</label>
                    <input type="password" className="form-text-input" placeholder="password" id="password" />
                </div>
                <div className="form-group">
                    <label htmlFor="confpass" className="form-group-lable">confirm your password</label>
                    <input type="password" className="form-text-input" placeholder="confirm your password" id="confpass" />
                </div>
                <div className="form-bottom-controls">
                <button type="submit" className='form-btn'>Create account</button>

<p className='form-guide'>Already have an account? <Link to="/login">login</Link> </p>
<Link to="/" className='form-back'>Go back home</Link>
                </div>
            </form>
        </div>
    )
}

export default SignUp;
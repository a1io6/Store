import "./register.css";
import { Link } from 'react-router-dom'
import Airpods from "../assets/airpods.jpg";
function Register() {

  return (
    <main>
      <section className="one-section">
        <div className="cont">
          <img src={Airpods} alt="preview" />

          <div className="sign">
            <h2>Create an account</h2>
            <p>Enter your details below</p>

            <div className="inputs">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email or Phone Number" />
              <input type="password" placeholder="Password" />
            </div>

            <div className="actions">
              <button type="submit" className="primary">Create Account</button>

              <button type="button" className="google-btn">
                <span className="gicon" aria-hidden>G</span>
                Sign up with Google
              </button>

              <div className="login">
                <span>Already have account?</span>
             <b><Link to="/login">log in</Link></b>
                
              </div>  
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Register;
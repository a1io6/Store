import "./register.css";
import { Link, useNavigate } from 'react-router-dom';
import Airpods from "../assets/register.png";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.warn("Бардык талааларды толтуруңуз!");
      return;
    }
    try {
      const res = await axios.post("https://689ead013fed484cf877ace7.mockapi.io/users", {
        name,
        email,
        password,
        role: "user"
      });
      localStorage.setItem("user", JSON.stringify(res.data));
      toast.success("Катталдыңыз!");
      navigate("/"); 
    } catch (err) {
      console.error(err);
      toast.error("Катталуу учурунда ката кетти!");
    }
  };

  return (
    <main>
      <section className="register-section">
        <div className="left-block">
          <img src={Airpods} alt="register preview" />
        </div>

        <div className="right-block animate-slide">
          <h2>Create an account</h2>
          <p>Enter your details below</p>

          <form className="inputs" onSubmit={handleRegister}>
            <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" placeholder="Email or Phone Number" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

            <div className="actions">
              <button type="submit" className="primary">Create Account</button>

              <div className="login">
                <span>Already have account?</span>
                <b><Link to="/login">log in</Link></b>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Register;

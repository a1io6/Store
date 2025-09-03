import { Link } from "react-router-dom";
import Airpods from "../assets/airpods.jpg";
import register from "../assets/register.png"
import "./LogIn.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/auth/Login";
import { useNavigate } from "react-router-dom";
function LogIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const user = JSON.parse(localStorage.getItem("user"));
  const hendleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    if (user.role === "admin") {
      navigate("/admin");
    }
  };
  useEffect(() => {
    if (user) {
      if (user.role === "admin") {
        navigate("/admin");
      }
    }
  }, [user, navigate]);
  return (
    <main>
      <section className="one-section">
        <div className="cont">
          <img src={register} alt="preview" />

          <div className="sign">
            <h2>Log in to Exclusive</h2>
            <p>Enter your details below</p>

            <div className="inputs">
              <input
                type="email"
                placeholder="Email or Phone Number"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type=""
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="aaa">
              <button onClick={hendleSubmit} className="mary">
                {loading ? "logIning" : "logIN"}
              </button>

              <Link className="bbb" aria-hidden>
                Forget Password?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LogIn;

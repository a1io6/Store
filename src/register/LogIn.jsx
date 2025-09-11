import { Link } from "react-router-dom";
import register from "../assets/register.png";
import "./LogIn.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/auth/Login";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function LogIn() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    if (user?.role === "admin") {
      navigate("/admin");
    }
  };

  useEffect(() => {
    if (user?.role === "admin") {
      navigate("/admin");
    }
  }, [user, navigate]);

  return (
    <main>
      <section className="one-section">
        <div className="cont">
          <img src={register} alt="preview" />

          <div className="sign">
            <h2>{t("logInToQpick")}</h2>
            <p>{t("enterDetailsBelow")}</p>

            <div className="inputs">
              <input
                type="email"
                placeholder={t("emailOrPhone")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder={t("password")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="aaa">
              <button onClick={handleSubmit} className="mary">
                {loading ? t("loggingIn") : t("logIn")}
              </button>

              <Link className="bbb" aria-hidden>
                {t("forgetPassword")}
              </Link>
            </div>

            {error && <p style={{ color: "red", marginTop: "10px" }}>{t("loginError")}</p>}
          </div>
        </div>
      </section>
    </main>
  );
}

export default LogIn;

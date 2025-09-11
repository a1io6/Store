import "./register.css";
import { Link, useNavigate } from 'react-router-dom';
import Airpods from "../assets/register.png";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useTranslation } from 'react-i18next';

function Register() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.warn(t("fillAllFields"));
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
      toast.success(t("registeredSuccess"));
      navigate("/"); 
    } catch (err) {
      console.error(err);
      toast.error(t("registeredError"));
    }
  };

  return (
    <main>
      <section className="register-section">
        <div className="left-block">
          <img src={Airpods} alt="register preview" />
        </div>

        <div className="right-block animate-slide">
          <h2>{t("createAccount")}</h2>
          <p>{t("enterDetails")}</p>

          <form className="inputs" onSubmit={handleRegister}>
            <input type="text" placeholder={t("name")} value={name} onChange={e => setName(e.target.value)} />
            <input type="text" placeholder={t("emailOrPhone")} value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder={t("password")} value={password} onChange={e => setPassword(e.target.value)} />

            <div className="actions">
              <button type="submit" className="primary">{t("createAccount")}</button>

              <div className="login">
                <span>{t("alreadyHaveAccount")}</span>
                <b><Link to="/login">{t("logIn")}</Link></b>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Register;

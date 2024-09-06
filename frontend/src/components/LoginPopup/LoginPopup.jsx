import { useState, useEffect, useContext } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import TermsOfUse from "../TermsOfUse/TermsOfUse";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currentState, setCurrentState] = useState("Login");
  const [termsModalIsOpen, setTermsModalIsOpen] = useState(false);
  const [privacyModalIsOpen, setPrivacyModalIsOpen] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currentState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  useEffect(() => {
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const openTermsModal = () => setTermsModalIsOpen(true);
  const closeTermsModal = () => setTermsModalIsOpen(false);

  const openPrivacyModal = () => setPrivacyModalIsOpen(true);
  const closePrivacyModal = () => setPrivacyModalIsOpen(false);

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your Name"
              required
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="your email"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>
        {currentState === "Sign Up" && (
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>
              By continuing to use this site, you agree to our{" "}
              <a href="#" onClick={openTermsModal}>
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" onClick={openPrivacyModal}>
                Privacy Policy
              </a>
              .
            </p>
          </div>
        )}
        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrentState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentState("Login")}>Login</span>
          </p>
        )}
      </form>
      <TermsOfUse isOpen={termsModalIsOpen} onRequestClose={closeTermsModal} />
      <PrivacyPolicy
        isOpen={privacyModalIsOpen}
        onRequestClose={closePrivacyModal}
      />{" "}
    </div>
  );
};

export default LoginPopup;

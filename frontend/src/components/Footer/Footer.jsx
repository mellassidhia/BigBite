import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { assets } from "../../assets/assets";
import "./Footer.css";

Modal.setAppElement("#root");

const Footer = () => {
  const [isPrivacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDeliveryClick = () => {
    navigate("/order");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 500);
  };

  const handleHomeClick = () => {
    navigate("/");
    scrollToTop();
  };

  const openPrivacyPolicy = (event) => {
    event.preventDefault();
    setPrivacyPolicyOpen(true);
    document.body.classList.add("no-scroll");
  };

  const closePrivacyPolicy = () => {
    setPrivacyPolicyOpen(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" className="logo" />
          <p>
            Experience exquisite dining with our chef&apos;s signature dishes,
            crafted to perfection just for you.
          </p>
          <div className="footer-social-icons">
            <img className="fb" src={assets.facebook_icon} alt="" />
            <img className="twitter" src={assets.twitter_icon} alt="" />
            <img className="linkedin" src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>
              <a href="#" onClick={handleHomeClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={handleDeliveryClick}>
                Delivery
              </a>
            </li>
            <li>
              <a href="#" onClick={openPrivacyPolicy}>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Contact Us</h2>
          <ul>
            <li>+216 71 200 200</li>
            <li>contact@bigbite.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        © {new Date().getFullYear()} BigBite.com-All rights reserved.{" "}
      </p>

      <Modal
        isOpen={isPrivacyPolicyOpen}
        onRequestClose={closePrivacyPolicy}
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-header">
          <h2>Privacy Policy</h2>
          <img
            onClick={closePrivacyPolicy}
            src={assets.cross_icon}
            alt="Close"
            className="close-icon"
          />
        </div>
        <div className="modal-content">
          <p>
            Your privacy is important to us. This policy explains how we handle
            your personal information:
          </p>
          <h3>1. Information We Collect</h3>
          <p>
            We collect personal information that you provide to us directly,
            such as your name, email address, and other contact details.
          </p>
          <h3>2. How We Use Your Information</h3>
          <p>
            We use your information to provide and improve our services,
            communicate with you, and ensure the security of our services.
          </p>
          <h3>3. Sharing Your Information</h3>
          <p>
            We do not share your personal information with third parties except
            as necessary to provide our services or as required by law.
          </p>
          <h3>4. Security</h3>
          <p>
            We implement security measures to protect your information from
            unauthorized access and misuse.
          </p>
          <h3>5. Changes to This Policy</h3>
          <p>
            We may update this policy from time to time. We will notify you of
            any changes by posting the new policy on this page.
          </p>
        </div>
        <div className="modal-footer">
          <button onClick={closePrivacyPolicy} className="close-button">
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Footer;

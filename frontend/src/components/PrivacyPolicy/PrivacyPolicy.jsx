import Modal from "react-modal";
import "./PrivacyPolicy.css";
import { assets } from "../../assets/assets";

Modal.setAppElement("#root");

const PrivacyPolicyModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-header">
        <h2>Privacy Policy</h2>
        <img
          onClick={onRequestClose}
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
          We collect personal information that you provide to us directly, such
          as your name, email address, and other contact details.
        </p>
        <h3>2. How We Use Your Information</h3>
        <p>
          We use your information to provide and improve our services,
          communicate with you, and ensure the security of our services.
        </p>
        <h3>3. Sharing Your Information</h3>
        <p>
          We do not share your personal information with third parties except as
          necessary to provide our services or as required by law.
        </p>
        <h3>4. Security</h3>
        <p>
          We implement security measures to protect your information from
          unauthorized access and misuse.
        </p>
        <h3>5. Changes to This Policy</h3>
        <p>
          We may update this policy from time to time. We will notify you of any
          changes by posting the new policy on this page.
        </p>
      </div>
      <div className="modal-footer">
        <button onClick={onRequestClose} className="close-button">
          Close
        </button>
      </div>
    </Modal>
  );
};

export default PrivacyPolicyModal;

import "./TermsOfUse.css";
import Modal from "react-modal";
import { assets } from "../../assets/assets";

Modal.setAppElement("#root");

const TermsOfUse = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Terms of Use"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-header">
        <h2>Terms of Use</h2>
        <img
          onClick={onRequestClose}
          src={assets.cross_icon}
          alt="Close"
          className="close-icon"
        />
      </div>

      <div className="modal-content">
        <p>
          Welcome to BigBite. By accessing or using our website and services,
          you agree to be bound by the following terms and conditions ("Terms of
          Use"). If you do not agree to these terms, please do not use our
          services.
        </p>

        <h3>1. Use of Service</h3>
        <p>
          You agree to use our services only for lawful purposes and in
          accordance with these Terms of Use. You must not use the services:
        </p>
        <ul>
          <li>
            In any way that violates any applicable national or international
            law or regulation.
          </li>
          <li>
            For the purpose of exploiting, harming, or attempting to exploit or
            harm minors in any way.
          </li>
          <li>
            To transmit, or procure the sending of, any advertising or
            promotional material without our prior written consent.
          </li>
        </ul>

        <h3>2. Account Responsibilities</h3>
        <p>
          You are responsible for maintaining the confidentiality of your
          account credentials and for all activities that occur under your
          account. You agree to notify us immediately of any unauthorized use of
          your account or any other breach of security.
        </p>

        <h3>3. Intellectual Property Rights</h3>
        <p>
          All content provided through our services, including but not limited
          to text, graphics, logos, and images, is the property of BigBite or
          its content suppliers and is protected by intellectual property laws.
        </p>

        <h3>4. Limitation of Liability</h3>
        <p>
          To the fullest extent permitted by law, BigBite shall not be liable
          for any indirect, incidental, special, consequential, or punitive
          damages, or any loss of profits or revenues, whether incurred directly
          or indirectly, or any loss of data or other intangible losses,
          resulting from:
        </p>
        <ul>
          <li>Your use or inability to use our services.</li>
          <li>
            Any unauthorized access to or use of our servers and/or any personal
            information stored therein.
          </li>
          <li>
            Any errors or omissions in any content or materials provided through
            our services.
          </li>
        </ul>

        <h3>5. Changes to Terms</h3>
        <p>
          We may update these Terms of Use from time to time. We will notify you
          of any changes by posting the new Terms of Use on this page. You are
          advised to review this Terms of Use periodically for any changes.
        </p>

        <h3>6. Governing Law</h3>
        <p>
          These Terms of Use shall be governed by and construed in accordance
          with the laws of our country, without regard to its conflict of law
          principles.
        </p>
      </div>

      <button className="close-button" onClick={onRequestClose}>
        Close
      </button>
    </Modal>
  );
};

export default TermsOfUse;

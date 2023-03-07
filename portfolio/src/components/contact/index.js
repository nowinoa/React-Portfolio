import "./index.css";
import ContactModal from "../modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
    const memoji = require('../Home/img/63256.jpg')
  return (
    <div className="contact">
      <div className=" box contact-form">
        {/* <button id="modal-opener">Contact Form</button>  */}
        <ContactModal />
      </div>
      <div className=" box cv">
        <p>You can also have a lot to my CV! 
        Click the button!</p>
        <button>Go to CV</button>
      </div>
      <div className=" box c-github">
        <FontAwesomeIcon
          icon="fa-brands fa-github"
          className="github-icon"
          style={{ width: 100, height: 100 }}
        />
      </div>
      <div className=" box c-linkedin ">
        <FontAwesomeIcon
          icon="fa-brands fa-linkedin"
          className="linkedin-icon"
          style={{ color: "#77ffcb", width: 100, height: 100 }}
        />
      </div>
      <div className=" box email">
        <FontAwesomeIcon
          icon="fa-solid fa-envelope"
          className="email-icon"
          style={{ width: 100, height: 100 }}
        />
      </div>
    </div>
  );
}
export default Contact;

import "./index.css";
import ContactModal from "../modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  const memoji_desktop = require("../Home/img/63256.jpg");
  const body = (
    <form>
      <label>Name:</label>
      <input className="form-name" type="text" name="name" required />
      <label>Email:</label>
      <input className="form-name" type="text" name="name" required />
      <label>Phone number (optional):</label>
      <input className="form-name" type="text" name="name" />
      <textarea
        className="message"
        required
        placeholder="Write your message here!"
      />
      <input className="submit-btn" type="submit" value="Submit" />
    </form>
  );
  return (
    <div className="contact">
      <div className=" box contact-form">
        {/* <button id="modal-opener">Contact Form</button>  */}
        <ContactModal
         title= 'Contact Form'
          body={body}
        />
      </div>
      <div className=" box cv">
        <img src={memoji_desktop} alt="Ainhoa Prada Developer" />
        <button className="btn-cv">Curriculum PDF</button>
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

import React from "react";
import "./ContactStyles.css";

const Contact = () => {
  return (
    <div name="contact" className="contact">
      <div className="container">
        <div className="top">
          <h1>Contact</h1>
        </div>
        <form>
          <div>
            <label>Name</label>
            <input type="text" placeholder="Enter Your Name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div>
            <label>Message</label>
            <textarea
              cols="30"
              rows="10"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="bottom">
            <button className="btn btn-dakr">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;

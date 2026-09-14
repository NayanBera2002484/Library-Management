import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <p>If you have any queries or need assistance, feel free to reach out to us.</p>

        <div className="contact-info">
          <h4>📍 Address:</h4>
          <p>BBIT Central Library, 3rd Floor, Administrative Block, <br />
             Budge Budge Institute of Technology, Kolkata - 700137</p>

          <h4>📞 Phone:</h4>
          <p>+91 33 2482 1234</p>

          <h4>📧 Email:</h4>
          <p>centrallibrary137@gmail.com</p>
        </div>

        <div className="map-responsive">
          <iframe
            title="BBIT Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.867009872151!2d88.24303947493285!3d22.585929732415244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027bdbb144fa51%3A0x267b47b99a9b15b4!2sBudge%20Budge%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1629354020246!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;

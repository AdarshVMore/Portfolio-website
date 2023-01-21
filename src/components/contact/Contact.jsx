import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { GrMail } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
    // emailjs
    //   .sendForm(
    //     "service_xsv7shd",
    //     "template_3xsprxd",
    //     form.current,
    //     "6fo4x42aWSS_lT_RE"
    //   )
    //   .then(
    //     () => {
    //       alert("email sent Succesfully ✅");
    //     },
    //     (error) => {
    //       alert(error.text);
    //     }
    //   );
    alert("❌ ERROR 404 : Message not sent, please use Email ❗");
  };
  return (
    <section id="contact">
      <h5>Got Work for me</h5>
      <h2>Contact Me</h2>

      <div className="contact_container container">
        <div className="contact_option">
          <article>
            <GrMail className="contact_icon" />
            <h3>Mail</h3>
            <h5>adarshv.more18@gmail.com</h5>
            <a href="mailto:adarshv.more18@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article>
            <BsWhatsapp className="contact_icon" />
            <h3>Whatsapp</h3>
            <h5>+91 9067684680</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+919067684680"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" />
          <input type="text" name="email" placeholder="Your Email Id" />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

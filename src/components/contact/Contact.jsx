import React from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { GrMail } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const form = useRef();
  const contactHeaderRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const contactHeader = contactHeaderRef.current;
    const contact = contactRef.current;

    gsap.fromTo(
      ".contact_header",
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.2,
        stagger: 0.1,
        scrollTrigger: {
          trigger: contactHeader,
          start: "top 70%",
          end: "bottom 10%",
          toggleActions: "restart reverse restart reverse",
          // markers: true,
        },
      }
    );

    gsap.fromTo(
      ".contact_option_one",
      {
        opacity: 0,
        x: -15,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: contact,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
          // markers: true,
        },
      }
    );

    gsap.fromTo(
      ".contact_option_two",
      {
        opacity: 0,
        x: 15,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: contact,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
          // markers: true,
        },
      }
    );
  });

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
    emailjs
      .sendForm(
        "service_xsv7shd",
        "template_1spu4ru",
        form.current,
        "6fo4x42aWSS_lT_RE"
      )
      .then(
        () => {
          alert(
            "❌ Error: Direct Message is not working , send an Email or whatsapp me"
          );
        },
        (error) => {
          alert(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h5 className="contact_header" ref={contactHeaderRef}>
        Got Work for me
      </h5>
      <h2 className="contact_header" ref={contactHeaderRef}>
        Contact Me
      </h2>

      <div className="contact_container container" ref={contactRef}>
        <div className="contact_option">
          <article className="contact_option_one">
            <GrMail className="contact_icon" />
            <h3>Mail</h3>
            <h5>adarshv.more18@gmail.com</h5>
            <a href="mailto:adarshv.more18@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact_option_one">
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
        {/* <form
          ref={form}
          action="https://formsubmit.co/adarshisworking@gmail.com"
          onSubmit={sendEmail}
          className="contact_option_two"
          method="POST"
        >
          <input type="text" name="name" placeholder="Your Name" />
          <input type="text" name="email" placeholder="Your Email Id" />
          <textarea
            name="message"
            id="message"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form> */}
        <form
          ref={form}
          action="https://formsubmit.co/adarshisworking@gmail.com
          "
          className="contact_option_two"
          method="POST"
          class="contact__form grid"
        >
          <div class="contact__inputs grid">
            <div class="contact__content">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                class="contact__input"
              />
            </div>
            <div class="contact__content">
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                class="contact__input"
              />
            </div>
          </div>

          <div class="contact__content">
            <textarea
              name="message"
              id=""
              cols="0"
              rows="7"
              class="contact__input"
              placeholder="Message"
            ></textarea>
          </div>

          <div>
            <button type="submit" class="button button--flex">
              Send Message
              <i class="uil uil-message button__icon"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;

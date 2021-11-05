import React from "react";
import useTraverse from "../../useTraverse";
import "./contact.scss";
// Icons
import { FaGithubSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";

export default function Contact() {
  useTraverse("wheel");

  const phoneCopyClick = () => {
    navigator.clipboard.writeText("+381693361653");
  };
  return (
    <div className="contact_content">
      <div className="contact_text_container">
        <h4 className="contact_tagline">
          I do JS and CSS <br />
          So you don't have to!
        </h4>
        <p className="contact_text">
          If you would like to see more you can check out my Github page. <br />
          Also, you can contact me via{" "}
          <a href="mailto: mvaluh@gmail.com" className="mail">
            Email
          </a>
          , or any other social media below!
        </p>
      </div>
      <div className="contact_socials_container">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/marko-valuh/"
          className="socials_link"
          id="linkedin">
          <FaLinkedin className="social_icon" />
        </a>
        <a
          target="_blank"
          href="https://github.com/Valuh-Marko"
          className="socials_link"
          id="github">
          <FaGithubSquare className="social_icon" />
        </a>
        <a href="tel: +381693361653" className="socials_link" id="whatsapp">
          <FaWhatsappSquare className="social_icon" />
        </a>
      </div>
      <h2 className="contact_backdrop_text">CONTACT</h2>
    </div>
  );
}

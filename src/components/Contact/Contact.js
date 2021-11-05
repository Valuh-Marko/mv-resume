import React from "react";
import useTraverse from "../../useTraverse";
// Tooltip Imports
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

import "./contact.scss";
// Icons
import { FaGithubSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";

export default function Contact() {
  // Tooltip Customization
  const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#454545",
      color: "#fafafa",
      maxWidth: 220,
      fontSize: 16,
      fontWeight: "500",
      padding: "10px 20px",
    },
    [`& .${tooltipClasses.arrow}`]: {
      color: "#454545",
    },
  }));

  // Scrolling
  useTraverse("wheel");

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
          <CustomTooltip
            arrow
            placement="bottom-start"
            title="mvaluh@gmail.com">
            <a href="mailto: mvaluh@gmail.com" className="mail">
              Email
            </a>
          </CustomTooltip>
          , or any other social media below!
        </p>
      </div>
      <div className="contact_socials_container">
        <CustomTooltip arrow title="LinkedIn">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/marko-valuh/"
            className="socials_link"
            id="linkedin">
            <FaLinkedin className="social_icon" />
          </a>
        </CustomTooltip>
        <CustomTooltip arrow title="GitHub">
          <a
            target="_blank"
            href="https://github.com/Valuh-Marko"
            className="socials_link"
            id="github">
            <FaGithubSquare className="social_icon" />
          </a>
        </CustomTooltip>
        <CustomTooltip arrow title="Phone: +381693361653">
          <a href="tel: +381693361653" className="socials_link" id="whatsapp">
            <FaWhatsappSquare className="social_icon" />
          </a>
        </CustomTooltip>
      </div>
      <h2 className="contact_backdrop_text">CONTACT</h2>
    </div>
  );
}

import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import "../styles/Footer.css";
import { createPortal } from "react-dom";

function Footer() {
  return createPortal(
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
        <LinkedInIcon />
        <EmailIcon/>
      </div>
    </div>, document.getElementById("Footer") as Element
  );
}

export default Footer;
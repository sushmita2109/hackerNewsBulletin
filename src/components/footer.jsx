import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import './styles/footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerHeader">
        Follow us on
      </div>
      <a href="https://www.youtube.com/c/thehackernews"
        target="_blank"
        className="youtubesocial">
        <FontAwesomeIcon color="white" icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/thehackernews/"
        target="_blank"
        className="facebooksocial">
        <FontAwesomeIcon color="white" icon={faFacebook} size="2x" />
      </a>
      <a href="https://twitter.com/TheHackersNews?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        target="_blank" className="twittersocial">
        <FontAwesomeIcon color="white" icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/thehackernews/?hl=en"
        target="_blank"
        className="instagramsocial">
        <FontAwesomeIcon color="white" icon={faInstagram} size="2x" />
      </a>
    </div>
  )
}

export default Footer;
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FooterStyle } from "./style";

function Footer() {
  return (
    <FooterStyle>
      <ul>
        <li>
          <BsLinkedin />
        </li>
        <li>
          <BsInstagram />
        </li>
        <li>
          <MdOutlineMarkEmailUnread />
        </li>
      </ul>
    </FooterStyle>
  );
}

export default Footer;

import StyledSpeaker, {
  FullName,
  About,
  Contacts,
  SocialNetworks,
} from "./Speaker.styled";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Speaker = ({ profilePhoto, fullName, about, contacts }) => {
  return (
    <StyledSpeaker id={"speaker"}>
      <img src={profilePhoto} alt={fullName} />

      <FullName>{fullName}</FullName>
      <Contacts>
        <h4>{contacts.origin}</h4>
        <SocialNetworks>
          <a href={contacts.socialNetworks.facebook}>
            <FaFacebook />
          </a>
          <a href={contacts.socialNetworks.twitter}>
            <FaTwitter />
          </a>
          <a href={contacts.socialNetworks.instagram}>
            <FaInstagram />
          </a>
        </SocialNetworks>
      </Contacts>
    </StyledSpeaker>
  );
};

export default Speaker;
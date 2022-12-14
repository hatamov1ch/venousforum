import StyledSpeaker, {
  FullName,
  About,
  Contacts,
  SocialNetworks,
} from "./Speaker.styled";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Speaker = ({ speaker }) => {
  return (
    <StyledSpeaker id={"speaker"}>
      <div className="image-wrapper">
        <Image
          width={100}
          height={100}
          src={speaker.profile.photoURL}
          alt={speaker.first_name}
          layout={"responsive"}
        />
      </div>

      <FullName>
        {speaker.profile.first_name} {speaker.profile.last_name}
      </FullName>

      <Contacts>
        <h4>{speaker.contacts.location}</h4>
        <SocialNetworks>
          <a href={speaker.contacts.socialNetworks.facebook}>
            <FaFacebook />
          </a>
          <a href={speaker.contacts.socialNetworks.twitter}>
            <FaTwitter />
          </a>
          <a href={speaker.contacts.socialNetworks.instagram}>
            <FaInstagram />
          </a>
        </SocialNetworks>
      </Contacts>
    </StyledSpeaker>
  );
};

export default Speaker;
import profile_picture from "../../assets/images/profile_picture.png";
import {
  Button,
  Container,
  IconsContainer,
  Image,
  TextContainer,
} from "./styles";
import { LinkedIn, GitHub, Instagram } from "@mui/icons-material";

function Profile() {
  return (
    <Container>
      <Image src={profile_picture} alt="profile" />
      <TextContainer>
        <div>
          <h1>olá!</h1>
          <p>meu nome é Ana Clara,</p>
          <p>eu tenho 28 anos e</p>
          <p>sou uma dev front-end</p>
          <Button>saiba mais sobre mim!</Button>
        </div>
        <IconsContainer>
          <a href={"https://www.linkedin.com/in/anaclaragf/"} target="_blank">
            <LinkedIn sx={{ color: "#000000", fontSize: "6rem" }} />
          </a>
          <a href={"https://github.com/anaclara-gf"} target="_blank">
            <GitHub sx={{ color: "#000000", fontSize: "6rem" }} />
          </a>
          <a href={"https://www.instagram.com/anaclaragf/"} target="_blank">
            <Instagram sx={{ color: "#000000", fontSize: "6rem" }} />
          </a>
        </IconsContainer>
      </TextContainer>
    </Container>
  );
}

export { Profile };

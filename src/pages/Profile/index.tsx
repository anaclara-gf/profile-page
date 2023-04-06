import { useState } from "react";
import profile_picture from "../../assets/images/profile_picture.png";
import dog from "../../assets/images/dog.png";
import couple from "../../assets/images/couple.jpg";
import trip from "../../assets/images/trip.png";
import {
  Button,
  CardContainer,
  Container,
  DetailsContainer,
  IconsContainer,
  Image,
  RoundImage,
  TextButton,
  TextContainer,
} from "./styles";
import {
  LinkedIn,
  GitHub,
  Instagram,
  KeyboardArrowLeft,
} from "@mui/icons-material";
import Collapse from '@mui/material/Collapse';

function Profile() {
  const [details, setDetails] = useState(false);

  const skills = [
    "Javascript",
    "Typescript",
    "HTML5",
    "CSS3",
    "React",
    "React Native",
    "Styled-components",
    "Node.js",
    "NestJS",
    "Express.js",
    "API REST",
    "OpenAPI",
    "JSON",
    "Jest",
    "React Testing Library",
    "Detox",
    "Git",
    "MongoDB",
    "MockServer",
    "Firebase",
    "Swift",
    "Agile methodologies",
    "Teamwork",
    "Communication",
    "Public speaking",
  ];

  return (
    <>
      <Collapse in={!details}>
        <Container>
          <Image src={profile_picture} alt="profile" />
          <TextContainer>
            <div>
              <h1>olá!</h1>
              <p>meu nome é Ana Clara,</p>
              <p>eu tenho 28 anos e</p>
              <p>sou uma dev front-end</p>
              <Button onClick={() => setDetails(true)}>
                saiba mais sobre mim
              </Button>
            </div>
            <IconsContainer>
              <a
                href={"https://www.linkedin.com/in/anaclaragf/"}
                target="_blank"
              >
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
      </Collapse >
      <Collapse in={details}>
        <Container>
          <DetailsContainer>
            <TextButton onClick={() => setDetails(false)}>
              <KeyboardArrowLeft sx={{ color: "#25392d", fontSize: "4rem" }} />
              VOLTAR
            </TextButton>
            <p>
              Formada em Arquitetura e Urbanismo, no meio da pandemia fiz
              transição de carreira para desenvolvimento front-end. Em abril de
              2021 concluí o curso da Laboratória Brasil, um bootcamp intensivo
              de seis meses no qual aprendi JavaScript, HTML, CSS, React.js,
              NodeJS, etc.
            </p>
            <p>
              Atualmente estou trabalhando com desenvolvimento fullstack com
              JavaScript/TypeScript. No meu dia-a-dia, utilizo o React.js para o
              front-end, o React Native para o desenvolvimento mobile híbrido, o
              NestJS (framework Node.js) para o backend, Jest e React Testing
              Library para testes unitários, Detox para testes E2E e
              versionamento com Git. Já trabalhei com Redux, MongoDB, Firebase,
              Mockserver, Figma, entre outros. Acredito fortemente no
              aprendizado contínuo para meu desenvolvimento pessoal, então
              atualmente estou cursando uma pós em desenvolvimento mobile para
              aprofundar meu conhecimento e aprender novas linguagens.
            </p>
            <p>
              Pessoalmente, eu amo passar tempo com meu cachorro, um pug chamado
              Bacon, e com meu marido. Além disso, minha maior paixão é viajar e
              conhecer lugares novos.
            </p>
            <IconsContainer>
              <RoundImage src={dog} alt="dog" />
              <RoundImage src={couple} alt="couple" margin={true} />
              <RoundImage src={trip} alt="trip" />
            </IconsContainer>
            <div>
              <h1>Skills</h1>
              <CardContainer>
                {skills.map((skill, index) => (
                  <div key={index}>{skill}</div>
                ))}
              </CardContainer>
            </div>
          </DetailsContainer>
        </Container>
      </Collapse >
    </>
  );
}

export { Profile };

import styled from "styled-components";
import background from "../../assets/images/background.jpg";

const Image = styled.img`
  height: 90vh;
  margin-top: 10vh;
`;

const Button = styled.button`
  background-color: #25392d;
  padding: 1rem 3rem;
  color: white;
  font-size: 3rem;
  border-radius: 2rem;
  margin-top: 15rem;
`;

const IconsContainer = styled.div`
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;

  & a:not(:last-child) {
    margin-right: 4rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & h1 {
    font-family: "Oswald", sans-serif;
    font-size: 15rem;
    font-weight: 800;
    margin: 10vh 0 5rem 0;
  }

  & p {
    font-size: 4rem;
  }

  & button {
    width: 100%;
    justify-self: center;
  }
`;

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");

  display: flex;
  justify-content: center;
  align-items: space-between;
  background-image: url(${background});
`;

export { Image, Container, Button, TextContainer, IconsContainer };

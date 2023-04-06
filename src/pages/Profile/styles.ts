import styled from "styled-components";
import background from "../../assets/images/background.jpg";

const Image = styled.img`
  height: 90vh;
  margin-top: 10vh;
`;

const RoundImage = styled.img<ImageStylesProps>`
  height: 500px;
  border-radius: 50%;
  margin-right: -4rem;

  margin-top: ${(props) => props.margin && "5vh"};
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  div {
    background-color: #25392d;
    padding: 1rem 2rem;
    color: white;
    border: 0.1rem solid black;
    border-radius: 2rem;
    width: auto;
    font-size: 2rem;
    margin: 0.5rem 0.5rem;
  }

  div:hover {
    background-color: transparent;
    color: black;
  }
`;

const Button = styled.button`
  font-family: "Oswald", sans-serif;
  background-color: #25392d;
  padding: 1rem;
  color: white;
  font-size: 3.5rem;
  border-radius: 2rem;
  margin-top: 10vh;
  box-shadow: 1rem 1rem 1rem rgba(205, 205, 205, 0.9);
  cursor: pointer;

  &:hover {
    box-shadow: none;
  }
`;

const TextButton = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");

  font-family: "Oswald", sans-serif;
  width: 200px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  font-weight: 600;
  color: #25392d;
  font-size: 3rem;
  margin: 2rem 0;
  cursor: pointer;
`;

const IconsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;

  a {
    padding-bottom: 1rem;
  }

  & a:not(:last-child) {
    margin-right: 4rem;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  height: 100vh;
  padding-bottom: 2vh;

  p {
    margin: 0 1rem;
    font-size: 2.2rem;
  }

  h1 {
    font-family: "Oswald", sans-serif;
    font-size: 4rem;
    margin-bottom: 1rem;
    margin-top: 5rem;
    text-align: center;
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
    color: #25392d;
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
  background-size: cover;
  overflow: scroll;
  overflow-x: hidden;
`;

export {
  Image,
  Container,
  Button,
  TextContainer,
  IconsContainer,
  RoundImage,
  CardContainer,
  TextButton,
  DetailsContainer,
};

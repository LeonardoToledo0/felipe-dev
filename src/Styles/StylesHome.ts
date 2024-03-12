import styled from "styled-components";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaDownload,
} from "react-icons/fa";

export const HomeBody = styled.body`
  background: linear-gradient(to right, grey, white);
  scroll-behavior: hidden;
`;

export const MenuHeader = styled.header`
  position: fixed;
`;
export const MenuLateral = styled.aside`
  width: 400px;
  height: 1000px;
  margin: 30px 60px;
  box-shadow: 2px 0px 7px rgba(0, 0, 0, 0.75);
  border-radius: 8px;
  background: white;
`;
export const MenuDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
export const ImgMenuLatera = styled.img`
  height: 100px;
  border-radius: 50%;
  margin: 10px;
`;
export const Titulo = styled.h1`
  font-size: 2rem;
`;
export const SubTitulo = styled.h2`
  margin: 10px;
  font-size: 1.5rem;
`;
export const Texto = styled.p`
  margin: 10px;
  font-size: 1.2rem;
  text-align: justify;
`;
export const MenuBotao = styled.div`
  max-width: 400px;
  margin: 200px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Facebook = styled(FaFacebook)`
  font-size: 2rem;
  cursor: pointer;
  color: blue;
`;
export const Instagran = styled(FaInstagram)`
  font-size: 2rem;
  cursor: pointer;
  color: red;
`;
export const Linkedin = styled(FaLinkedin)`
  font-size: 2rem;
  cursor: pointer;
  color: navy;
`;
export const ExperienceCard = styled.div`
  max-width: 350px;
  width: 100%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  box-shadow: 2px 0px 7px rgba(0, 0, 0, 0.75);
  border-radius: 8px;
`;
export const ExperienceTitle = styled.h2`
  margin: 10px;
`;
export const ExperienceContent = styled.p`
  margin: 10px;
`;
export const ExperienceCardContent = styled.div`
  max-width: 350px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const ExperienceAge = styled.p`
  margin: 10px;
  font-size: 1rem;
  text-align: justify;
`;
export const DivDonwload = styled.div`
  max-width: 350px;
  width: 70%;
  height: 40px;
  margin: 20px auto;
  box-shadow: 2px 0px 7px rgba(0, 0, 0, 0.75);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const Donwload = styled(FaDownload)`
  align-items: center;
  font-size: 24px;
  cursor: pointer;
`;
export const HomeMain = styled.main`
  max-width: 1240px;
  margin: 0 500px;
  margin-top: -26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const TrabalhosDiv = styled.div`
  margin: 40px;
  border: 4px solid transparent;
  box-shadow: 2px 0px 7px rgba(0, 0, 0, 0.75);
  border-radius: 8px;
  width: 40%;
  overflow: hidden;
`;

export const Trabalhos = styled.img`
  max-width: 1240px;
  height: 100%;
  width: 100%;
  transition: all 0.7s;
  border-radius: 8px;
  filter: grayscale(100%);
  opacity: 0.6;
  cursor: pointer;
  &:hover {
    filter: grayscale(0%);
    transition: 0.7s ease-in-out;
    opacity: 1;
    transform: scale(1.4) rotate(12deg);
  }
`;

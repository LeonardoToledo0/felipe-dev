import React from "react";
import * as S from "../Styles/StylesHome";
import Perfil from "../Assets/image/b9d8201c125c4a72a9746f3e44a1bb83.webp";
import Trampo1 from "../Assets/image/38078.jpg";
import Trampo2 from "../Assets/image/2149309683.jpg";

export const Home: React.FC = () => {
  return (
    <>
      <S.HomeBody>
        <S.MenuHeader>
          <S.MenuLateral>
            <S.MenuDiv>
              <S.ImgMenuLatera src={Perfil} />
              <S.Titulo>Felipe Mello</S.Titulo>
            </S.MenuDiv>
            <S.SubTitulo>Desenvolvedor Full Stack</S.SubTitulo>
            <S.Texto>
              Olá! Eu sou Felipe Mello, um entusiasta da tecnologia e um
              desenvolvedor Full Stack apaixonado por criar soluções inovadoras.
              Com uma sólida formação e experiência em desenvolvimento web,
              estou comprometido em transformar ideias criativas em projetos
              funcionais e eficientes.
            </S.Texto>
            <S.SubTitulo>Experiencia</S.SubTitulo>
            <S.ExperienceCard>
              <S.ExperienceCardContent>
                <S.ExperienceTitle>Cargo</S.ExperienceTitle>
                <S.ExperienceAge>2024</S.ExperienceAge>
              </S.ExperienceCardContent>
              <S.ExperienceContent>
                Mussum Ipsum, cacilds vidis litro abertis. Aenean aliquam
                molestie leo, vitae iaculis nisl. Posuere libero varius. Nullam
                a nisl ut ante blandit hendrerit. Aenean sit amet nisi.{" "}
              </S.ExperienceContent>
            </S.ExperienceCard>
            <S.ExperienceCard>
              <S.ExperienceCardContent>
                <S.ExperienceTitle>Cargo</S.ExperienceTitle>
                <S.ExperienceAge>2024</S.ExperienceAge>
              </S.ExperienceCardContent>
              <S.ExperienceContent>
                Mussum Ipsum, cacilds vidis litro abertis. Aenean aliquam
                molestie leo, vitae iaculis nisl. Posuere libero varius. Nullam
                a nisl ut ante blandit hendrerit. Aenean sit amet nisi.{" "}
              </S.ExperienceContent>
            </S.ExperienceCard>
            <S.DivDonwload>
              <S.SubTitulo>Donwload CV</S.SubTitulo>
              <S.Donwload>Donwload</S.Donwload>
            </S.DivDonwload>
            <S.MenuBotao>
              <S.Instagran>Instagran</S.Instagran>
              <S.Facebook>Facebook</S.Facebook>
              <S.Linkedin>Linkedin</S.Linkedin>
            </S.MenuBotao>
          </S.MenuLateral>
        </S.MenuHeader>
        `
        <S.HomeMain>
          <S.TrabalhosDiv>
            <S.Trabalhos src={Trampo1} />
          </S.TrabalhosDiv>
          <S.TrabalhosDiv>
            <S.Trabalhos src={Trampo2} />
          </S.TrabalhosDiv>
        </S.HomeMain>
        <S.HomeMain>
          <S.TrabalhosDiv>
            <S.Trabalhos src={Trampo1} />
          </S.TrabalhosDiv>
          <S.TrabalhosDiv>
            <S.Trabalhos src={Trampo2} />
          </S.TrabalhosDiv>
        </S.HomeMain>
        <S.HomeMain>
          <S.TrabalhosDiv>
            <S.Trabalhos src={Trampo1} />
          </S.TrabalhosDiv>
          <S.TrabalhosDiv>
            <S.Trabalhos src={Trampo2} />
          </S.TrabalhosDiv>
        </S.HomeMain>
        <S.HomeMain>
          <S.TrabalhosDiv>
            <S.Trabalhos src={Trampo1} />
          </S.TrabalhosDiv>
          <S.TrabalhosDiv>
            <S.Trabalhos src={Trampo2} />
          </S.TrabalhosDiv>
        </S.HomeMain>
      </S.HomeBody>
    </>
  );
};

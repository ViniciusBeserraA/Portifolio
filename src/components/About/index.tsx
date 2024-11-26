import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import {
  ContainerAbout,
  Image,
  SubContainerAbout,
  SubTitle,
  Description,
  ContainerButtons,
  ContactButton,
  TextButton,
} from "./styles";

import photo from "../../assets/photo.jpeg";

interface Props {
  toggleTheme(): void;
}

const About: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <ContainerAbout id="sobre">
      <Image src={photo} alt="Vinícius Beserra" />

      <SubContainerAbout>
        <SubTitle>Sobre mim</SubTitle>

        <Description>
          Minha jornada na programação começou em 2020, quando decidi migrar de
          carreira e abraçar o universo da tecnologia. Desde então, tenho me
          dedicado a aprimorar minhas habilidades nas tecnologias mais
          requisitadas pelo mercado, ao mesmo tempo em que invisto em meu
          desenvolvimento pessoal e profissional.
        </Description>
        <Description>
          Possuo uma base sólida em Java, com experiência no uso do framework
          Spring, mas, atualmente, estou expandindo meus conhecimentos em
          linguagens e frameworks como JavaScript, TypeScript, React, React
          Native, Node.js, entre outras tecnologias que utilizo para desenvolver
          aplicações de alto valor.
        </Description>
        <Description>
          Meu objetivo é continuar me especializando nas ferramentas e
          tecnologias que já domino, além de me manter atualizado e aprender
          novas soluções que atendam às demandas do mercado. Sou movido pela
          busca constante de aprendizado e inovação, sempre focado em entregar
          resultados que gerem impacto.
        </Description>
        <ContainerButtons>
          <ContactButton href="#contato">
            <TextButton>Contato</TextButton>
          </ContactButton>
        </ContainerButtons>
      </SubContainerAbout>
    </ContainerAbout>
  );
};

export default About;

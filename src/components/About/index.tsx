import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ContainerAbout, Image, SubContainerAbout, SubTitle, Description, ContainerButtons, ContactButton, TextButton } from './styles';

import photo from '../../assets/photo.jpeg';

interface Props {
    toggleTheme(): void;
}

const About: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <ContainerAbout id="sobre">
            <Image src={photo} alt="Vinícius Beserra" />

            <SubContainerAbout>
                <SubTitle>
                    Sobre mim
                </SubTitle>

                <Description>
                    Comecei minha jornada na programação em 2020, quando migrei de carreira profissional, optando pela área da tecnologia. Desde então, me aperfeiçoo nas tecnologias requisitadas no mercado e por desenvolvimento pessoal.
                </Description>
                <Description>
                Possuo considerável conhecimento em java, utilizando o framework spring, porém atualmente estou estudando linguagens/frameworks como: Javascript, TypeScript, React, React Native, NodeJS, entre outras tecnologias que uso para criar aplicações de alto valor.
                </Description>
                <Description>
                    Meu objetivo é sempre me aprimorar nas tecnologias que já domino ou que já possuo certo conhecimento, além de sempre aprender novas ferramentas e tecnologias que o mercado exige.</Description>
                <ContainerButtons>
                    <ContactButton href="#contato">
                        <TextButton>
                            Contato
                        </TextButton>
                    </ContactButton>
                </ContainerButtons>
            </SubContainerAbout>
        </ContainerAbout>
    );
}

export default About;
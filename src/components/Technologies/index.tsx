import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ContainerAbout, SubtitleContainer, SubTitle, ContainerTech, BoxTech, TextTech, ImgBox } from './styles';

import TechlogiesData from '../../techlogies';

interface Props {
    toggleTheme(): void;
}

const Technologies: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <ContainerAbout>
            <SubtitleContainer>
                <SubTitle>
                    Linguagens e tecnologias
                </SubTitle>
            </SubtitleContainer>
            <ContainerTech>
                {TechlogiesData.map((item)=>{
                    const { id, name, icone } = item;
                    const imagePath = require(`../../assets/mock/tecnologies/${icone}`);
                    return(
                        <BoxTech key={id}>
                            <ImgBox><img src={imagePath} alt={name} height={25}></img></ImgBox>
                            <TextTech>{name}</TextTech>
                            
                        </BoxTech>
                    );
                })}    
                 
            </ContainerTech>
        </ContainerAbout>
    );
}

export default Technologies;
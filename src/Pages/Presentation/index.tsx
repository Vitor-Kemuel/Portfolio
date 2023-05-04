import { About, ArrowDown, Name, Perfil, Space, } from "./styles";
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Column, PageContainer, Paragraph } from "../../Components";

const Presentation = () => {
  return (
    <PageContainer id="Presentation">
      <Column>
        <Space />
        <Perfil src="https://media.licdn.com/dms/image/D4D03AQEbhG4z1Te2KQ/profile-displayphoto-shrink_200_200/0/1683049621953?e=1688601600&v=beta&t=8sw8LZHwkLXghi8eBfkL8FBM0CxrehsQPXEfYxkKeBs" alt="Perfil" />
        <Name>{"<Vitor Kemuel />"}</Name>
        <About>
          <Paragraph>
            Sou estudante de análise e desenvolvimento de sistemas.
            Tenho conhecimento em desenvolvimento de aplicações web e mobile.
            Meus projetos têm como principais tecnologias:
            ReactJs, Flutter, C#, HTML, CSS e PHP.
          </Paragraph>
        </About>
        <ArrowDown>
          <AiOutlineArrowDown />
        </ArrowDown>
      </Column>
    </PageContainer>
  );
};

export default Presentation;
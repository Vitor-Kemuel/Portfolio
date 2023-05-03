import { About, Column, Contact, IconContainer, Name, PageContainer, Perfil, Space, } from "./styles";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowDown } from 'react-icons/ai';

const Presentation = () => {
  return (
    <PageContainer>
      <Column>
        <Perfil src="https://media.licdn.com/dms/image/D4D03AQEbhG4z1Te2KQ/profile-displayphoto-shrink_200_200/0/1683049621953?e=1688601600&v=beta&t=8sw8LZHwkLXghi8eBfkL8FBM0CxrehsQPXEfYxkKeBs" alt="Perfil" />
        <Name>{"<Vitor Kemuel />"}</Name>
        <Contact>
          <IconContainer href="https://github.com/Vitor-Kemuel" target="_blank">
            <AiFillGithub />
          </IconContainer>
          <IconContainer href="https://www.linkedin.com/in/vitor-kemuel/" target="_blank">
            <AiFillLinkedin />
          </IconContainer>
        </Contact>
        <About>
          Sou estudante de análise e desenvolvimento de sistemas.
          Tenho conhecimento em desenvolvimento de aplicações web e mobile.
          Meus projetos têm como principais tecnologias:
          ReactJs, Flutter, C#, HTML, CSS e PHP.
        </About>
        <Space></Space>
        <About>
          <AiOutlineArrowDown />
        </About>
      </Column>
    </PageContainer>
  );
};

export default Presentation;
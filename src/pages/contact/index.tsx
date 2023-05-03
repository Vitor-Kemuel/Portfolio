import { About, Column, Copyright, Email, IconContainer, PageContainer, Row, Space, Title } from "./styles";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Contact = () => {
    return(
        <PageContainer>
            <Column>
                <Row>
                    <Title>{"<Contato />"}</Title>
                </Row>
                <Row>
                    <About>
                        Sinta-se à vontade para entrar em contato se tiver alguma dúvida
                        ou se apenas deseja se conectar!
                    </About>
                </Row>
                <Row>
                    <Email href="mailto:kemuvitor@gmail.com">
                        kemuvitor@gmail.com
                    </Email>
                </Row>
                <Row>
                    <IconContainer href="https://github.com/Vitor-Kemuel" target="_blank">
                        <AiFillGithub />
                    </IconContainer>
                    <IconContainer href="https://www.linkedin.com/in/vitor-kemuel/" target="_blank">
                        <AiFillLinkedin />
                    </IconContainer>
                </Row>
                <Space/>
                <Copyright>
                    Handcrafted by me © 2023.
                </Copyright>
            </Column>
        </PageContainer>
    );
};

export default Contact;
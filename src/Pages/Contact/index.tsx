import { Copyright, Email, IconContainer, Space } from "./styles";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Column, PageContainer, Paragraph, Row, Title } from "../../Components";

const Contact = () => {
    return (
        <PageContainer id="Contact">
            <Space />
            <Column>
                <Row>
                    <Title>{"<Contato />"}</Title>
                </Row>
                <Row>
                    <Paragraph>
                        Sinta-se à vontade para entrar em contato se tiver alguma dúvida
                        ou se apenas deseja se conectar!
                    </Paragraph>
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
                <Copyright>
                    Handcrafted by me © 2023.
                </Copyright>
            </Column>
        </PageContainer>
    );
};

export default Contact;
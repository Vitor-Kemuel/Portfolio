import {
    About,
    Column,
    Title,
    PageContainer,
    Space,
    Row,
    CardProject,
    CardTitle,
    CardDescription,
    CardIcon,
    RowCards,
    ArrowDown,
} from "./styles";
import { AiOutlineArrowDown } from 'react-icons/ai';
import { GoRepo } from "react-icons/go";

const Projects = () => (
    <PageContainer id="Projects">
        <Column>
            <Row>
                <Title>{"<Projects />"}</Title>
            </Row>
            <Row>
                <About>
                    Estes são meus projetos de codigo aberto que estão disponiveis no GitHub.<br />
                    Sinta-se à vontade para realizar um pull request!.
                </About>
            </Row>
            <Space />
            <RowCards>
                <CardProject>
                    <Row>
                        <CardIcon><GoRepo /></CardIcon>
                        <CardTitle target="_blank" href="https://github.com/Vitor-Kemuel/Burguer">Burguer</CardTitle>
                    </Row>
                    <CardDescription>
                        Aplicativo feito utilizando o framework flutter,
                        para realização e controle de pedidos.
                    </CardDescription>
                </CardProject>
                <CardProject>
                    <Row>
                        <CardIcon><GoRepo /></CardIcon>
                        <CardTitle target="_blank" href="https://github.com/Vitor-Kemuel/Pokedex-Flutter">Pokedex-Flutter</CardTitle>
                    </Row>
                    <CardDescription>
                        Aplicativo que consome uma API contendo pokemons e retorna em forma de lista
                    </CardDescription>
                </CardProject>
                <CardProject>
                    <Row>
                        <CardIcon><GoRepo /></CardIcon>
                        <CardTitle target="_blank" href="https://github.com/Vitor-Kemuel/SistemaDeClientes">SistemaDeClientes</CardTitle>
                    </Row>
                    <CardDescription>
                        O sistema se trata de um meio para cadastrar, visualizar,
                        editar e apagar os dados de clientes utilizando HTML5, CSS3, JavaScript, PHP e Ajax.
                    </CardDescription>
                </CardProject>
            </RowCards>
            <RowCards>
                <CardProject>
                    <Row>
                        <CardIcon><GoRepo /></CardIcon>
                        <CardTitle target="_blank" href="https://github.com/Vitor-Kemuel/Pokedex">Pokedex</CardTitle>
                    </Row>
                    <CardDescription>
                        Criando uma lista de Pokémons com .NET
                    </CardDescription>
                </CardProject>
                <CardProject>
                    <Row>
                        <CardIcon><GoRepo /></CardIcon>
                        <CardTitle target="_blank" href="https://github.com/Vitor-Kemuel/DIO-Snake">DIO-Snake</CardTitle>
                    </Row>
                    <CardDescription>
                        Proposta de projeto da Digital Innovarion One.
                        Sobre uma recriação do jogo da cobrinha,
                        mais conhecido pelo nome de "Snake",
                        utilizando HTML 5, CSS 3 e JavaScript.
                    </CardDescription>
                </CardProject>
                <CardProject>
                    <Row>
                        <CardIcon><GoRepo /></CardIcon>
                        <CardTitle target="_blank" href="https://github.com/Vitor-Kemuel/Git-GitHub">Git-GitHub</CardTitle>
                    </Row>
                    <CardDescription>
                        Repositório com códigos do Git.
                    </CardDescription>
                </CardProject>
            </RowCards>
            <ArrowDown>
                <AiOutlineArrowDown />
            </ArrowDown>
        </Column>
    </PageContainer>
);

export default Projects;
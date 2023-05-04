import { Space, RowCards, ArrowDown } from "./styles";
import { AiOutlineArrowDown } from 'react-icons/ai';
import { ProjectItems1, ProjectItems2 } from '../../Types';
import { Column, PageContainer, Paragraph, ProjectCard, Row, Title } from "../../Components";

const Projects = () => (
    <PageContainer id="Projects">
        <Column>
            <Row>
                <Title>{"<Projects />"}</Title>
            </Row>
            <Row>
                <Paragraph>
                    Estes são meus projetos de codigo aberto que estão disponiveis no GitHub.<br />
                    Sinta-se à vontade para realizar um pull request!.
                </Paragraph>
            </Row>
            <Space />
            <RowCards>
                <ProjectCard projects={ProjectItems1} />
            </RowCards>
            <RowCards>
                <ProjectCard projects={ProjectItems2} />
            </RowCards>
            <ArrowDown>
                <AiOutlineArrowDown />
            </ArrowDown>
        </Column>
    </PageContainer>
);

export default Projects;


import React from 'react';
import { CardDescription, CardIcon, CardProject, CardTitle, Row } from './style';
import { GoRepo } from 'react-icons/go';

export const ProjectCard: React.FC<{ projects: {title: string, description: string}[] }> = ({ projects }) => {

    const mappedItems = (
        projects.map(({ title, description }) => (
            <CardProject>
                <Row>
                    <CardIcon><GoRepo /></CardIcon>
                    <CardTitle target="_blank" href={"https://github.com/Vitor-Kemuel/" + title}>{title}</CardTitle>
                </Row>
                <CardDescription>
                    {description}
                </CardDescription>
            </CardProject>
        ))
    );

    return (
        <>
            {mappedItems}
        </>
    );
};
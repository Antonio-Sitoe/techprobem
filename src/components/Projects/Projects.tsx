import React from "react";
import Card from "../Card/Card";
import { MainCard, MainTitle, ProjectsStyle } from "./style";

function Projects() {
  return (
    <ProjectsStyle className="container" id="projects">
      <MainTitle>
        <h2>
          Projetos elaborados pela nossa equipe <span>voluntaria</span>.
        </h2>
      </MainTitle>
      <MainCard>
        <Card
          title="Plataforma de gestao de ativos"
          description="Desenvolvemos uma platforma para a empresa gerenciar os seus ativos."
          className={false}
          company="A Tech Pro Bem"
        />
        <Card
          title="Site institucional."
          description="Site institucnional para aa empresa, e plataforma paara gerenciar o site."
          className={true}
          company="Empresa Voluntarios"
        />
      </MainCard>
    </ProjectsStyle>
  );
}

export default Projects;

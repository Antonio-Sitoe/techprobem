
import styled from 'styled-components';

export const ProjectsStyle = styled.main`
  margin-bottom: 6rem;
`;

export const MainTitle = styled.div`
  max-width: 20rem;
  margin: 2rem auto;
  h2 {
    text-align: center;
    span {
      color: #3d84f0;
    }
  }
`;

export const MainCard = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

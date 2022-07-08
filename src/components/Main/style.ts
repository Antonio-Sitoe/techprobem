import styled from "styled-components";

export const MainStyle = styled.main`
  padding: 6rem 0;
  @media (max-width: 40rem) {
    padding: 1rem ;
  }
`;

export const SectionDiv = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  div {
    h1 {
      font-size: 4rem;
      span {
        display: block;
        color: #3d84f0;
      }
    }
    div {
      display: flex;
      gap: 1rem;
      margin: 1rem 0;
    }
  }

  div.image {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: flex-end;
    img {
      max-width: 25rem;
      margin: 0 auto;
    }
  }
  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
    text-align: center;

    div {
      h1 {
        font-size: 2rem;
      }
      div {
        display: grid;
      }
    }
  }
`;
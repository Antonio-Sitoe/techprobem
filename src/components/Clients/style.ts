import styled from 'styled-components';

export const Section = styled.main`
  margin: 2rem auto;
  background: #ddf6f7;

  div.container {
    padding: 2rem 0;
    color: white;
    h2 {
      text-align: center;
    }
    main {
      display: grid;
      grid-template-columns: 30rem 1fr;
      gap: 1rem;
      align-items: center;

      div.content {
        padding: 3rem;

        img {
          max-width: 13rem;
          margin: 2rem 0;
        }
        p {
          margin: 1rem 0;
          font-size: 1.3rem;
        }

        button {
          font-weight: normal;
        }
      }
      div.sliders {
        display: flex;
        overflow: hidden;
        padding: 4rem 1rem;
      }

      @media (max-width: 1000px) {
        grid-template-columns: 1fr;
        div.content {
          display: none;
        }
      }
    }
  }
`;

export const Slide = styled.div`
  position: absolute;
  bottom: -3rem;
  display: flex;
  z-index: 10;
  border-radius: 0.3rem;
  button {
    background: #22d3ee;
    width: 30px;
    height: 30px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background: #1bc0da;
    }
  }
`;

export const Testemunial = styled.div`
  width: 100%;
  padding: 1rem;
  color: #252525;
  border-radius: 0 0 0.3rem 0.3rem;
  background-color: white;
  border-top: 4px solid #67e8f9;

  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;

    div {
      h5 {
        font-weight: 500;
        font-size: 0.8rem;
      }
      p {
        font-size: 0.8rem;
      }
      display: flex;
      flex-direction: column;
      gap: 0.1rem;
    }
  }
`;

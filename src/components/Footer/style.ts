import styled from "styled-components";
export const FooterStyle = styled.footer`
  margin-top: 3rem;
  padding: 2rem;
  width: 100%;
  background: #2b2b2e;

  ul {
    max-width: 10rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    li {
      cursor: pointer;
    }

    svg {
      fill: white;
      width: 25px;
      height: 25px;
    }
  }
`;
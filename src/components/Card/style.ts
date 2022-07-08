import styled from "styled-components";

export const CardStyle = styled.div`
  padding: 2rem;
  border-radius: 6px;
  background: #ddf6f7;

  div {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-top: 1rem;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      border-radius: 50%;
      background: white;
    }
    span {
      font-weight: bold;
    }
  }

  &.className {
    background: #3d84f0;
    h2,
    span,
    p {
      color: white;
    }
  }
`;
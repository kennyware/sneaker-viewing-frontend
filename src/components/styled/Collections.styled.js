import styled from "styled-components";

export const StyledCollections = styled.section`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  a {
    text-decoration: none;
    color: #111;
  }

  div {
    text-align: center;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.1s;

    &:hover {
      opacity: 70%;
    }

    img {
      max-height: 550px;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  @media (max-width: 426px) {
    grid-template-columns: auto;
    gap: 20px;
  }
`;

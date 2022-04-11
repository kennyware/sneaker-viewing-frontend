import styled from "styled-components";

export const StyledCollections = styled.section`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

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
`;

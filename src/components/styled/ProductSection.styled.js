import styled, { keyframes } from "styled-components";

export const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 50px;
  justify-content: space-between;
  clear: right;
`;

export const StyledProductsHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;

  h2 {
    text-transform: capitalize;
    font-family: "Noto Sans", sans-serif;
  }
`;

const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;

export const StyledLoader = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  top: 0;
  right: 0;

  font-size: 5rem;
  color: #444;
`;

export const Rotate = styled.div`
  display: flex;
  animation: ${rotate} 2s linear infinite;
`;

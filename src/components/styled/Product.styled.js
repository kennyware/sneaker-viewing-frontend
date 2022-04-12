import styled from "styled-components";

export const StyledProduct = styled.div`
  a {
    text-decoration: none;
    color: #333;
    position: relative;
    z-index: 1;
    display: block;
  }

  div {
    button {
      position: absolute;
      top: 20px;
      right: 25px;
      border: 1.5px solid #111;
      border-radius: 50%;
      background: none;
      height: 40px;
      width: 40px;
      cursor: pointer;
      transition: all 0.1s ease-in;
      z-index: 3;

      &:hover {
        background: #111;
        color: #fff;
      }

      svg {
        vertical-align: middle;
        height: 20px;
        width: 20px;
      }
    }
  }

  h4 {
    margin-bottom: 15px;
  }

  h5 {
    margin-bottom: 10px;
  }
`;

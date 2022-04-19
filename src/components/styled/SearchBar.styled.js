import styled, { keyframes, css } from "styled-components";

const moveUp = keyframes`
0% {
  width: 0;
  
}

50% {
  height: 0;
  width: 100%;
}

100% {
  width: 100%;
  height: 60%;
}
`;

const animateMixin = css`
  animation: ${moveUp} 0.3s linear forwards;
`;

export const StyledSearchBar = styled.div`
  .logo {
    order: 1;
  }

  .close-btn {
    order: 3;
  }
  display: flex;
  ${({ searching }) => searching && animateMixin}
  ${({ searching }) =>
    searching
      ? `
      position: fixed;
      background: #fff;
      top: 0;
      right: 0;
      justify-content: center;
      padding: 25px;
      z-index: 50;
      `
      : `
        max-width: 150px;
        margin-right: 30px;
    `}

  .search-container {
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: space-around;
    align-items: center;
  }

  form {
    border: 1.5px solid #000;
    border-radius: 20px;
    height: 40px;
    ${({ searching }) => searching && "width: 40%;"}
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;

    input[type="text"] {
      border: none;
      height: 100%;
      width: 100%;
      font-size: 1.1rem;
    }

    input[type="text"]:focus {
      border: none;
      outline: none;
    }

    .search-btn {
      background: none;
      border: none;
      height: 30px;
      width: 30px;
      margin-right: 5px;

      svg {
        height: 100%;
        width: 100%;
      }
    }
  }

  .close-btn {
    height: 40px;
    width: 40px;
    cursor: pointer;
    border-radius: 50%;
    background: #eee;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: large;

    &:hover {
      background: #ccc;
    }
  }
`;

export const BlurredOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(2px);
  z-index: 20;
`;

import styled from "styled-components";

export const StyledFitlerMenu = styled.div`
  position: fixed;
  width: 40%;
  height: 100%;
  background: #fff;
  top: 0;
  right: 0;
  z-index: 100;
  overflow-y: scroll;

  button {
    cursor: pointer;
  }

  h2 {
    font-family: "Noto sans", sans-serif;
    font-size: 2rem;
  }

  .heading {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #111;
    padding: 20px;

    button {
      border: none;
      background: none;
      font-size: 2rem;
    }
  }

  .brands {
    .brand {
      margin-bottom: 15px;

      input {
        margin-right: 10px;
      }
    }
  }

  .colors .colors-container {
    display: flex;
    flex-wrap: wrap;
  }

  .prices {
    .price {
      margin-bottom: 15px;

      input {
        margin-right: 10px;
      }
    }
  }
`;

export const FilterCategory = styled.div`
  padding: 20px;

  .filter-group {
    transition: all 0.3s ease-in;
    margin: 0 10px;
    height: ${({ toggleCategory }) => (toggleCategory ? "100%" : "0")};
    overflow: hidden;
  }

  .heading {
    font-size: 1rem;
    border: none;
    padding: 0;
    align-items: center;
    margin-bottom: 20px;

    h4 {
      font-size: 1.25rem;
    }

    button {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: ${({ toggleCategory }) =>
        toggleCategory ? "none" : "rotate(180deg)"};

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;
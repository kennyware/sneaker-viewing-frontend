import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px 0;
  width: 100%;

  .logo {
    width: 139px;
    height: 39px;
  }

  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;

    li {
      margin: 0 10px;
      padding-bottom: 10px;
      border-bottom: 2px solid transparent;

      a {
        text-decoration: none;
        color: #222;
      }

      &:hover {
        border-bottom: 2px solid #000;
      }
    }
  }

  .search-bar {
    border: 1.5px solid #000;
    border-radius: 20px;
    height: 30px;
    max-width: 140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    margin-right: 30px;

    input[type="text"] {
      border: none;
      width: 100%;
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
        height: 30px;
        width: 20px;
      }
    }
  }

  .action-icons {
    display: flex;
    align-items: center;

    button {
      background: none;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      width: 40px;
      height: 40px;
      transition: all 0.1s;

      &:hover {
        background: rgba(100, 100, 100, 0.4);
      }
    }
  }

  .bag-btn {
    margin-right: 5px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  .account-btn svg {
    width: 25px;
    height: 25px;
  }
`;

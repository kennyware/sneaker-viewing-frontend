import styled from "styled-components";

export const StyledRegister = styled.section`
  width: 100%;
  display: flex;

  .register-group {
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid #111;
    padding: 20px;

    img {
      width: 80%;
      margin-top: 50px;
    }

    #register-form {
      margin-top: 100px;
      input {
        display: block;
        width: 100%;
        border: none;
        border-bottom: 1.5px solid #aaa;
        padding: 2px 10px;
        transition: all 0.1s;

        &:focus {
          border-color: #000;
          outline: none;
        }
      }

      label {
        position: absolute;
        display: none;
      }

      div {
        position: relative;
        width: 300px;
        margin-bottom: 20px;
      }

      button {
        background: #111;
        width: 300px;
        border: none;
        outline: none;
        color: #fff;
        padding: 10px;
        margin-top: 50px;
        cursor: pointer;
        transition: all 0.1s;

        &:hover {
          opacity: 70%;
        }
      }
    }
  }
`;

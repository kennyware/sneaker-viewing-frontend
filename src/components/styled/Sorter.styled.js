import styled from "styled-components";

export const StyledSorter = styled.div`
  select {
    margin-left: 5px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    color: #666;
    width: 100px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

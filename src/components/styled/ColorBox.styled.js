import styled from "styled-components";

export const ColorBox = styled.div`
  border: 1px solid #111;
  background: ${({ color }) => color};
  width: 15px;
  height: 15px;
  margin-right: 10px;
`;

import { StyledFilter } from "./styled/Filter.styled";
import { MdFilterList } from "react-icons/md";

const Filter = ({ openMenu }) => {
  return (
    <StyledFilter onClick={openMenu}>
      Filter <MdFilterList />
    </StyledFilter>
  );
};

export default Filter;

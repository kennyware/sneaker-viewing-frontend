import Filter from "./Filter";
import { StyledSorter } from "./styled/Sorter.styled";
import { StyledOptions } from "./styled/Options.styled";

const Options = ({ openMenu }) => {
  // const test = () => {
  //   alert("regg");
  // };

  return (
    <StyledOptions>
      <Filter openMenu={openMenu} />
      <StyledSorter>
        Sort By:
        <select name="sort" id="sorter" defaultValue={""}>
          <option value=""></option>
          <option value="newest">Newest</option>
          <option value="lowtohigh">Price: Low to High</option>
          <option value="hightolow">Price: High to Low</option>
        </select>
      </StyledSorter>
    </StyledOptions>
  );
};

export default Options;

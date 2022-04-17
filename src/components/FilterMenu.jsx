import {
  StyledFitlerMenu,
  FilterCategory,
  DarkOverlay,
} from "./styled/FilterMenu.styled";
import { ColorBox } from "./styled/ColorBox.styled";
import { CgClose } from "react-icons/cg";
import { HiChevronDown } from "react-icons/hi";
import { useState } from "react";

const FilterMenu = ({ brands, toggleMenu }) => {
  const colors = [
    "yellow",
    "red",
    "blue",
    "green",
    "orange",
    "white",
    "black",
    "grey",
    "brown",
  ];

  const [toggleBrands, setToggleBrands] = useState(true);
  const [toggleColors, setToggleColors] = useState(false);
  const [togglePrices, setTogglePrices] = useState(false);

  return (
    <>
      <DarkOverlay />
      <StyledFitlerMenu>
        <div className="heading">
          <h2>Filter</h2>
          <button onClick={toggleMenu}>
            <CgClose />
          </button>
        </div>
        <FilterCategory className="brands" toggleCategory={toggleBrands}>
          <div className="heading">
            <h4>Brand</h4>
            <button onClick={() => setToggleBrands(!toggleBrands)}>
              <HiChevronDown />
            </button>
          </div>
          <div className="filter-group">
            {brands.length > 0 &&
              brands.map((brand) => {
                return (
                  <div key={brand} className="brand">
                    <input type="checkbox" name={brand} id="" />
                    {brand}
                  </div>
                );
              })}
          </div>
        </FilterCategory>
        <FilterCategory className="colors" toggleCategory={toggleColors}>
          <div className="heading">
            <h4>Color</h4>
            <button onClick={() => setToggleColors(!toggleColors)}>
              <HiChevronDown />
            </button>
          </div>
          <div className="colors-container filter-group">
            {colors.map((color) => (
              <ColorBox key={color} color={color} />
            ))}
          </div>
        </FilterCategory>
        <FilterCategory className="prices" toggleCategory={togglePrices}>
          <div className="heading">
            <h4>Price</h4>
            <button onClick={() => setTogglePrices(!togglePrices)}>
              <HiChevronDown />
            </button>
          </div>
          <div className="filter-group">
            <div className="price">
              <input type="checkbox" name="" id="" />
              Up to $25
            </div>
            <div className="price">
              <input type="checkbox" name="" id="" />
              $25 to $50
            </div>
            <div className="price">
              <input type="checkbox" name="" id="" />
              $50 to $100
            </div>
            <div className="price">
              <input type="checkbox" name="" id="" />
              $100 to $200
            </div>
            <div className="price">
              <input type="checkbox" name="" id="" />
              $200 &amp; above
            </div>
          </div>
        </FilterCategory>
      </StyledFitlerMenu>
    </>
  );
};

export default FilterMenu;

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Product from "./Product";
import {
  StyledProductsGrid,
  StyledProductsHeading,
} from "./styled/ProductSection.styled";
import Options from "./Options";
import FilterMenu from "./FilterMenu";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { getShoes, getShoeBrands, reset } from "../features/shoes/shoeSlice";
// import { getShoeBrands } from "../features/brands/brandSlice";

const Products = () => {
  const dispatch = useDispatch();

  const { shoes, brands, isError, isLoading, message } = useSelector(
    (state) => state.shoes
  );

  // const { brands } = useSelector((state) => state.brands);

  const [menuOpen, setMenuOpen] = useState(false);
  // const [brands, setBrands] = useState([]);

  let [searchParams] = useSearchParams();
  const gender = searchParams.get("gender");

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getShoes(gender));

    setTimeout(() => {
      dispatch(getShoeBrands());
    }, 2000);

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch, gender]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  if (isLoading || brands.length < 1 || shoes.length < 1) {
    return <Loader />;
  }

  return (
    <>
      <StyledProductsHeading>
        <h2>{gender && <span>{gender}s</span>} Shoes</h2>
        <Options toggleMenu={toggleMenu} />
      </StyledProductsHeading>
      {menuOpen && <FilterMenu brands={brands} toggleMenu={toggleMenu} />}
      <StyledProductsGrid>
        {shoes.map((shoe) => {
          return <Product key={shoe.id} item={shoe} />;
        })}
      </StyledProductsGrid>
    </>
  );
};

export default Products;

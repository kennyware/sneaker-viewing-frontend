import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Product from "./Product";
import { StyledProductSection } from "./styled/ProductSection.styled";
import Options from "./Options";
import FilterMenu from "./FilterMenu";
import Loader from "./Loader";

const Products = () => {
  const [items, setItems] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [brands, setBrands] = useState([]);

  let [searchParams] = useSearchParams();
  const gender = searchParams.get("gender");

  // Check data for missing images
  const checkData = (data) => {
    for (let x in data) {
      if (data.hasOwnProperty(x)) {
        if (x === "media") {
          if (Object.values(data[x])[0] === null) {
            return true;
          }
        }
      }
    }
  };

  useEffect(() => {
    // Remove objects without images
    const removeEmptyData = (data) => {
      return data.filter((item) => !checkData(item));
    };

    const fetchData = async () => {
      // Added delay to avoid "429 too many requests" repsonse
      const delay = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
      const headers = {
        "X-RapidAPI-Host": "v1-sneakers.p.rapidapi.com",
        "X-RapidAPI-Key": "d33eefbeb9msh22abd672c2b24c7p1002dfjsn656f51bdc9b5",
      };

      try {
        // Make api call to get data for sneakers
        const { data: sneakersRes } = await axios.get(
          "https://v1-sneakers.p.rapidapi.com/v1/sneakers",
          {
            params: { limit: 10, gender },
            headers,
          }
        );

        setItems(removeEmptyData(sneakersRes.results));

        // Make api call to get data for brands
        await delay();
        const { data: brandsRes } = await axios.get(
          "https://v1-sneakers.p.rapidapi.com/v1/brands",
          {
            headers,
          }
        );
        setBrands(brandsRes.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [gender]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {items.length > 0 && brands.length > 0 ? (
        <>
          <Options toggleMenu={toggleMenu} />
          {menuOpen && <FilterMenu brands={brands} toggleMenu={toggleMenu} />}
          <StyledProductSection>
            {items.map((item) => {
              return <Product key={item.id} item={item} />;
            })}
          </StyledProductSection>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Products;

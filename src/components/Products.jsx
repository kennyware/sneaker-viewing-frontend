import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Product from "./Product";
import { StyledProductSection } from "./styled/ProductSection.styled";
import Options from "./Options";

const Products = () => {
  const [items, setItems] = useState([]);

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
      const options = {
        params: { limit: "10", gender },
        headers: {
          "X-RapidAPI-Host": "v1-sneakers.p.rapidapi.com",
          "X-RapidAPI-Key":
            "d33eefbeb9msh22abd672c2b24c7p1002dfjsn656f51bdc9b5",
        },
      };

      try {
        const { data: res } = await axios.get(
          "https://v1-sneakers.p.rapidapi.com/v1/sneakers",
          options
        );

        setItems(removeEmptyData(res.results));
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [gender]);

  return (
    <>
      <Options />
      <StyledProductSection>
        {items.map((item) => {
          return <Product key={item.id} item={item} />;
        })}
      </StyledProductSection>
    </>
  );
};

export default Products;

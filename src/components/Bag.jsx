import Product from "./Product";
import { StyledProductSection } from "./styled/ProductSection.styled";
import { useState, useEffect } from "react";
import axios from "axios";

const Bag = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        params: { limit: "10" },
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

        setItems(res.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  return (
    <StyledProductSection>
      {items.map((item) => {
        return <Product key={item.id} item={item} />;
      })}
    </StyledProductSection>
  );
};

export default Bag;

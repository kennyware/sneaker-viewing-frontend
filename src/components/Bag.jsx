import Product from "./Product";
import { StyledBag } from "./styled/Bag.styled";
import { StyledProductsGrid } from "./styled/ProductSection.styled";
import Loader from "./Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSavedItems } from "../features/auth/authSlice";

const Bag = () => {
  // const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const { isLoading, savedItems } = useSelector((state) => state.auth);

  useEffect(() => {
    // const fetchData = async () => {
    //   const options = {
    //     params: { limit: "10" },
    //     headers: {
    //       "X-RapidAPI-Host": "v1-sneakers.p.rapidapi.com",
    //       "X-RapidAPI-Key":
    //         "d33eefbeb9msh22abd672c2b24c7p1002dfjsn656f51bdc9b5",
    //     },
    //   };

    //   try {
    //     const { data: res } = await axios.get(
    //       "https://v1-sneakers.p.rapidapi.com/v1/sneakers",
    //       options
    //     );

    //     setItems(res.results);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };

    // fetchData();

    dispatch(getSavedItems());
  }, [dispatch]);

  if (isLoading) return <Loader />;

  return (
    <StyledBag>
      <h1>Saved Items</h1>
      {savedItems.length > 0 ? (
        <StyledProductsGrid>
          {savedItems.map((item) => {
            return <Product key={item.id} item={item} saved={true} />;
          })}
        </StyledProductsGrid>
      ) : (
        <p>You do not have any sneakers saved.</p>
      )}
    </StyledBag>
  );
};

export default Bag;

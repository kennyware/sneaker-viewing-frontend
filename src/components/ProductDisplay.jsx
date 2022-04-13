import { StyledProductDisplay } from "./styled/ProductDisplay.styled";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDisplay = () => {
  const [item, setItem] = useState({});
  let { id } = useParams();

  useEffect(() => {
    // Fetch single product data from api
    const fetchData = async () => {
      const options = {
        headers: {
          "X-RapidAPI-Host": "v1-sneakers.p.rapidapi.com",
          "X-RapidAPI-Key":
            "d33eefbeb9msh22abd672c2b24c7p1002dfjsn656f51bdc9b5",
        },
      };

      try {
        const {
          data: { results },
        } = await axios.get(
          `https://v1-sneakers.p.rapidapi.com/v1/sneakers/${id}`,
          options
        );
        setItem(results[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  // Function to convert product release date from "YYYY-MM-DD" to "DD/MM/YYYY"
  const convertDate = (inputFormat) => {
    function pad(s) {
      return s < 10 ? "0" + s : s;
    }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
  };

  return (
    <StyledProductDisplay>
      {Object.keys(item).length > 0 && (
        <>
          <div className="product-display">
            <img src={item.media.imageUrl} alt="" />
          </div>
          <div className="product-name">
            <h5>{item.brand}</h5>
            <h3>{item.name}</h3>
          </div>
          <div className="product-details">
            <table>
              <tbody>
                <tr>
                  <th>Retail Price: </th>
                  <td>${item.retailPrice}</td>
                </tr>
                <tr>
                  <th>Release Date: </th>
                  <td>{convertDate(item.releaseDate)}</td>
                </tr>
                <tr>
                  <th>Colorway: </th>
                  <td>{item.colorway}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button>Save</button>
        </>
      )}
    </StyledProductDisplay>
  );
};

export default ProductDisplay;

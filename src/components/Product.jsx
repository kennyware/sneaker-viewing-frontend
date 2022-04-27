import { StyledProduct } from "./styled/Product.styled";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Product = ({ item, saved }) => {
  return (
    <StyledProduct saved={saved}>
      <Link to={`/products/${item.id}`}>
        <div>
          <img src={item.media.smallImageUrl} alt="" />
          <button className="save-btn">
            <FiHeart />
          </button>
        </div>
        <h4>{item.shoe}</h4>
        <h5>{item.name}</h5>
        <p>${item.retailPrice}</p>
      </Link>
    </StyledProduct>
  );
};

export default Product;

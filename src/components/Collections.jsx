import { StyledCollections } from "./styled/Collections.styled";
import mensFeatureImg from "../mens-feature.jpg";
import womensFeatureImg from "../womens-feature.jpg";
import kidsFeatureImg from "../kids-feature.jpg";
import { Link } from "react-router-dom";

const Collections = () => {
  return (
    <StyledCollections>
      <Link to="/products">
        <div>
          <img src={mensFeatureImg} alt="feature with a man sitting" />
          <p>Men's</p>
        </div>
      </Link>

      <Link to="/products">
        <div>
          <img src={womensFeatureImg} alt="feature with a women sitting" />
          <p>Women's</p>
        </div>
      </Link>

      <Link to="/products">
        <div>
          <img src={kidsFeatureImg} alt="feature with a toy and a shoe" />
          <p>Kid's</p>
        </div>
      </Link>
    </StyledCollections>
  );
};

export default Collections;

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
          <img src={mensFeatureImg} alt="feature image with a man sitting" />
          <p>Men's</p>
        </div>
      </Link>

      <div>
        <img src={womensFeatureImg} alt="feature image with a women sitting" />
        <p>Women's</p>
      </div>
      <div>
        <img src={kidsFeatureImg} alt="feature image with a toy and a shoe" />
        <p>Kid's</p>
      </div>
    </StyledCollections>
  );
};

export default Collections;

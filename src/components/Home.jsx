import { StyledHero } from "./styled/Hero.styled";
import { DarkOverlay } from "./styled/DarkOverlay.styled";
import hero from "../home-hero.jpg";
import Collections from "./Collections";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getShoes } from "../features/shoes/shoeSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoes());
  }, [dispatch]);

  const goTo = () => {
    navigate("/products/?year=2022");
  };

  return (
    <>
      <StyledHero heroImgSrc={hero}>
        <div className="hero">
          <DarkOverlay />
          <button className="cta" onClick={goTo}>
            See New Releases
          </button>
        </div>
      </StyledHero>

      <h1>Collections</h1>
      <Collections />
    </>
  );
};

export default Home;

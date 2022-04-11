import { StyledHero } from "./styled/Hero.styled";
import { DarkOverlay } from "./styled/DarkOverlay.styled";
import hero from "../home-hero.jpg";
import Collections from "./Collections";

const Home = () => {
  return (
    <>
      <StyledHero heroImgSrc={hero}>
        <div className="hero">
          <DarkOverlay />
          <button className="cta">See New Releases</button>
        </div>
      </StyledHero>

      <h1>Collections</h1>
      <Collections />
    </>
  );
};

export default Home;

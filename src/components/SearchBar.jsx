import { useState } from "react";
import { StyledSearchBar, BlurredOverlay } from "./styled/SearchBar.styled";
import { MdSearch } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import Logo from "./Logo";
import { useSelector } from "react-redux";
import Product from "./Product";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [searching, setSearching] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const { shoes } = useSelector((state) => state.shoes);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    if (searchText) {
      navigate(`/products?q=${searchText}`);
      setSearching(false);
    }
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);

    const filter = new RegExp(e.target.value, "i");

    setFilteredData(shoes.filter((shoe) => shoe.title.search(filter) !== -1));
  };

  return (
    <>
      {searching && <BlurredOverlay onClick={() => setSearching(false)} />}
      <StyledSearchBar searching={searching}>
        <div className="search-container">
          {searching && (
            <>
              <Logo toggleMenu={() => setSearching(false)} />
              <button className="close-btn" onClick={() => setSearching(false)}>
                <CgClose />
              </button>
            </>
          )}
          <form onSubmit={onSubmit}>
            <button type="submit" className="search-btn">
              <MdSearch />
            </button>
            <input
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={handleSearch}
              onFocus={() => setSearching(true)}
            />
          </form>

          <div
            className={
              searching && searchText ? "search-results show" : "search-results"
            }
          >
            {filteredData.slice(0, 3).map((shoe) => (
              <Product item={shoe} key={shoe.id} showSaveBtn={false} />
            ))}
          </div>
        </div>
      </StyledSearchBar>
    </>
  );
};

export default SearchBar;

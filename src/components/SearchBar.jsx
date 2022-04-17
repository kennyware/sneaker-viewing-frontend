import { useState, useEffect } from "react";
import { StyledSearchBar, BlurredOverlay } from "./styled/SearchBar.styled";
import { MdSearch } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import Logo from "./Logo";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    if (searchText) {
      setSearching(true);
    } else {
      setSearching(false);
    }
  }, [searchText]);
  return (
    <>
      {searching && <BlurredOverlay />}
      <StyledSearchBar searching={searching}>
        <div className="search-container">
          {searching && (
            <>
              <Logo className="logo" />
              <button className="close-btn">
                <CgClose />
              </button>
            </>
          )}
          <form>
            <button type="submit" className="search-btn">
              <MdSearch />
            </button>
            <input
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </form>
        </div>
      </StyledSearchBar>
    </>
  );
};

export default SearchBar;

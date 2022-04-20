import { useState } from "react";
import { StyledSearchBar, BlurredOverlay } from "./styled/SearchBar.styled";
import { MdSearch } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import Logo from "./Logo";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [searching, setSearching] = useState(false);

  const onSubmit = (e) => {
    if (!searchText) {
      e.preventDefault();
    }

    setSearching(true);
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
              onChange={(e) => setSearchText(e.target.value)}
              onFocus={() => setSearching(true)}
            />
          </form>
        </div>
      </StyledSearchBar>
    </>
  );
};

export default SearchBar;

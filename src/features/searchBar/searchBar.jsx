import { useDispatch, useSelector } from "react-redux";
import { setTerm, resetTerm, selectSearchTerm } from "./searchBarSlice";
import { useState, useEffect } from "react";

const SearchBar = () => {
  const width = window.innerWidth;
  const [searchToggle, setSearchToggle] = useState(false);
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);
  const handleChange = (e) => {
    const input = e.target.value;
    dispatch(setTerm(input));
  };
  const handleToggle = () => {
    setSearchToggle((prev) => (prev = !searchToggle));
  };
  useEffect(() => {}, [width]);

  return (
    <div className="main-search-bar">
      <div
        className={
          searchToggle ? "shown-block-search-bar" : "hidden-block-search-bar"
        }
      >
        <input value={searchTerm} onChange={handleChange} type="text" />
        <button
          className="clear-button"
          onClick={() => {
            dispatch(resetTerm());
          }}
        >
          Clear
        </button>
      </div>
      <div>
        <button onClick={handleToggle} className="search-button">
          {searchToggle ? "x" : "search"}
        </button>
      </div>
      <div className="always-shown-search-bar">
        <input
          placeholder="Search Product.."
          value={searchTerm}
          onChange={handleChange}
          type="text"
        />
        <button
          className="clear-button"
          onClick={() => {
            dispatch(resetTerm());
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

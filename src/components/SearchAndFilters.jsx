import { FaSearch } from "react-icons/fa";

const SearchAndFilters = ({
  searchText,
  onSearchChange,
  topRatedFilterActive,
  onTopRatedClick,
}) => {
  return (
    <div className="search-and-filters">
      <div className="search">
        <FaSearch className="search-icon" />
        <input
          className="search-text-box"
          type="text"
          placeholder="type your restaurant here"
          value={searchText}
          onChange={onSearchChange}
        />
      </div>
      <div className="filter-buttons">
        <div className="top-rated-filter">
          <button
            className={`top-rated-btn ${topRatedFilterActive ? "active" : ""}`}
            onClick={onTopRatedClick}
          >
            Top Rated(4.5+⭐️)
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilters;

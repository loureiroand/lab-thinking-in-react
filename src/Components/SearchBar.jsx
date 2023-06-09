const SearchBar = ({ handleSearch, handleStockChange, showInStock }) => {
  return (
    <div className="SearchBar">
      <label>Search</label>
      <input type="text" placeholder="Search..." onChange={handleSearch} />

      <label>
        <input
          type="checkbox"
          checked={showInStock}
          onChange={handleStockChange}
        />{' '}
        Only shows products in stock
      </label>
    </div>
  );
};

export default SearchBar;

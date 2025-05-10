function SearchBar({ location, setLocation, searchLocation }) {
  return (
    <div className="search">
      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyDown={searchLocation}
        placeholder="Enter location"
        type="text"
      />
    </div>
  );
}

export default SearchBar;

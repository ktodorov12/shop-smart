import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (searchQuery) {
      setSearchQuery("");
      navigate(`?name=${encodeURIComponent(searchQuery)}`);
    }
  }

  return (
    <div className="header-search-container">
      <input type="search" name="name" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="search-field" placeholder="Enter your product name..." />

      <button className="search-btn" onClick={handleSearch}>
        <ion-icon name="search-outline"></ion-icon>
      </button>
    </div>
  );
}

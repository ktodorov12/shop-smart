import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (searchQuery) {
      setSearchQuery("");
      navigate(`?name=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate(`/`);
    }
  }

  return (
    <form className="header-search-container" onSubmit={handleSearch}>
      <input
        type="search"
        name="name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-field"
        placeholder="Enter your product name..."
      />

      <button className="search-btn" type="submit">
        {/* @ts-ignore */}
        <ion-icon name="search-outline"></ion-icon>
      </button>
    </form>
  );
}

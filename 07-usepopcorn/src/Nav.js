import { useState } from "react";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <MoviesFound />
    </nav>
  );
};

const Search = () => {
  const [query, setQuery] = useState("");

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

const Logo = () => {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
};

const MoviesFound = () => {
  return (
    <p className="num-results">
      Found <strong>Movies length goes here</strong> results
    </p>
  );
};

export default Nav;

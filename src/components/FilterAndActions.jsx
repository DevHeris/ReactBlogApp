import { useState } from "react";

export default function FilterAndActions({
  posts,
  setShowForm,
  onClearAll,
  sortBy,
  setSortBy,
}) {
  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <div className="filter-actions">
      <div>
        <label htmlFor="sort"></label>
        <select
          name="sort"
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input</option>
          <option value="title">Sort by title</option>
          <option value="author">Sort by author</option>
        </select>
      </div>
      <div>
        <button className="btn" onClick={handleShowForm}>
          NEW
        </button>
        <button className="btn clear-all" onClick={onClearAll}>
          CLEAR All
        </button>
      </div>
    </div>
  );
}

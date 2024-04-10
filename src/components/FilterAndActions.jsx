export default function FilterAndActions() {
  return (
    <div className="filter-actions">
      <div>
        <label htmlFor="sort"></label>
        <select name="sort" id="sort">
          <option value="input">Sort by input</option>
          <option value="input">Sort by title</option>
          <option value="input">Sort by author</option>
        </select>
      </div>
      <button className="btn">NEW</button>
    </div>
  );
}

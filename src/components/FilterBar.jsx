import { categories } from "../data.js";

function FilterBar({ value, onChange }) {
  const options = ["all", ...categories];
  return (
    <div className="filter-row">
      {options.map((c) => (
        <button
          key={c}
          className={"filter-btn" + (value === c ? " active" : "")}
          onClick={() => onChange(c)}
        >
          {c === "all" ? "ທັງໝົດ" : c}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;

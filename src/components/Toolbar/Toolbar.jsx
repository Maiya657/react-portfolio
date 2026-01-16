import { useState } from "react";

export function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className="buttons">
      {filters.map((filter) => (
        <button
          key={filter}
          className={filter === selected ? "active" : ""}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default Toolbar
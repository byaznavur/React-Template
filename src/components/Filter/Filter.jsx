import React from "react";

function Filter({ filterStatus, onFilterChange }) {
  return (
    <div>
      <button
        onClick={() => onFilterChange("all")}
        style={{ fontWeight: filterStatus === "all" ? "bold" : "normal" }}
      >
        Barchasi
      </button>
      <button
        onClick={() => onFilterChange("completed")}
        style={{ fontWeight: filterStatus === "completed" ? "bold" : "normal" }}
      >
        Bajarilgan
      </button>
      <button
        onClick={() => onFilterChange("incomplete")}
        style={{
          fontWeight: filterStatus === "incomplete" ? "bold" : "normal",
        }}
      >
        Bajarilmagan
      </button>
    </div>
  );
}

export default Filter;

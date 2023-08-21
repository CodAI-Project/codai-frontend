'use client'
import React, { useState } from "react";

function SelectCustom({ options, onSelectChange }) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedValue(selectedValue);
    onSelectChange(selectedValue); // Chama a função de retorno com o valor selecionado
  };

  return (
    <label className="custom-select">
      <select value={selectedValue} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default SelectCustom;


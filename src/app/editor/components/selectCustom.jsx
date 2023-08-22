'use client'
import React, { useState, useEffect } from "react";



function SelectCustom({ options, onSelectChange, isValid }) {
  const [selectedValue, setSelectedValue] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [hasBounced, setHasBounced] = useState(false);


  useEffect(() => {
    setIsInvalid(!isValid); 
    if (!isValid && !hasBounced) {
      setHasBounced(true);
      setTimeout(() => {
        setHasBounced(false);
      }, 3000); 
    }
  }, [isValid]);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedValue(selectedValue);
    onSelectChange(selectedValue); 
  };

  const selectClasses = `custom-select ${isInvalid && hasBounced ? 'animate-bounce' : ''}`;

  return (
    <label className={selectClasses}>
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

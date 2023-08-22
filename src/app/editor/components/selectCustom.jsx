'use client'
import React, { useState, useEffect } from "react";

// Dentro do componente SelectCustom

function SelectCustom({ options, onSelectChange, isValid }) {
  const [selectedValue, setSelectedValue] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [hasBounced, setHasBounced] = useState(false);


  useEffect(() => {
    setIsInvalid(!isValid); // Define o estado de inválido baseado na prop isValid
    if (!isValid && !hasBounced) {
      setHasBounced(true);
      console.log(hasBounced)
      setTimeout(() => {
        setHasBounced(false);
      }, 3000); // Reabilita a animação após 3 segundos
    }
  }, [isValid]);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedValue(selectedValue);
    onSelectChange(selectedValue); // Chama a função de retorno com o valor selecionado
  };

  // Adicione uma classe de estilo de acordo com a validade
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

import React, { useState, useEffect } from 'react';
import StyledSelectForm from './StyledSelectForm';

const SelectForm = ({ countries, data, callback, selectedCountry, isDisabled }) => {
  const [value, setValue] = useState(selectedCountry);

  useEffect(() => {
    setValue(selectedCountry);
  }, [selectedCountry]);

  const handleChange = (e) => {
    callback(e.target.value);
  };
  return (
    <StyledSelectForm value={value} onChange={handleChange} disabled={isDisabled}>
      {countries?.map((country, i) => (
        <option key={i} value={country}>
          {country}
        </option>
      ))}
    </StyledSelectForm>
  );
};

export default SelectForm;

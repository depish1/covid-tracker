import React, { useState } from 'react';
import StyledSelectForm from './StyledSelectForm';

const SelectForm = ({ countries, data, callback }) => {
  const [value, setValue] = useState('Poland');

  const handleChange = (e) => {
    setValue(e.target.value);
    const dataset = data.filter((el) => el.country === e.target.value)[0].datasets.datasets;
    callback(dataset);
  };
  return (
    <StyledSelectForm value={value} onChange={handleChange}>
      {countries.map((country, i) => (
        <option key={i} value={country}>
          {country}
        </option>
      ))}
    </StyledSelectForm>
  );
};

export default SelectForm;

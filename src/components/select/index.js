import React from 'react';
import { SelectArea } from './style';

const index = ({ options, ...props}) => {
  if (!Array.isArray(options)) {
    console.error('Options devem ser um array');
    return null;
  }

  return (
    <SelectArea width={props.width || 'auto'} >
      <select {...props}>
        {options.map((option, index) => (
          <option key={index} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
    </SelectArea>
  );
};

export default index;

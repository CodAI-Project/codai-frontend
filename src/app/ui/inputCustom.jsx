import React from 'react';
import { Input } from '@nextui-org/react';

const StyledInput = ({ props }) => {
  // const extendedClassName = `border-slate-700 border-1 rounded-${radius} text-${size} ${className}`;

  return <Input
    className='border-slate-700 border-1 rounded-lg'
    {...props}

  />;
};

export default StyledInput;

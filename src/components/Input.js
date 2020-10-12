import '../styles/input.scss'

import React from 'react';

const Input = props => {
    const { variant, placeholder, name } = props

  return (
    <input type='text' name={name} id={name} className={`input input-${variant}`} placeholder={placeholder}/>
  );
}

export default Input;
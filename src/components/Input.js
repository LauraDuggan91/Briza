import '../styles/input.scss'

import React from 'react';

const Input = props => {
    const { placeholder, name, onChange, isEmpty } = props

  return (
    <input type='text' name={name} id={name} className={isEmpty ? 'input empty' : 'input'} placeholder={placeholder} onChange={onChange}/>
  );
}

export default Input;
import React from 'react';
import styles from '../styles/modules/button.module.scss'
import { getClasses } from '../utils/getClasses';

const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary'
};

const Button = ({children, variant = 'primary', type, ...rest}) => {
  return (
    <button 
    type= {type === 'submit' ? 'submit' :'button'}
     className= {getClasses([styles.button, styles[`button--${buttonTypes[variant]}`]])}>{children}</button>
  )
}

export default Button
import cn from 'classnames'

import classes from './index.module.css'

const Button = ({ type, disabled, className, children, ...other }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(classes.btn, className)}
      {...other}
    >
      {children}
    </button>
  )
}

export default Button

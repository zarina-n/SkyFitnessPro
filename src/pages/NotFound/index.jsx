import { NavLink } from 'react-router-dom'

import classes from './index.module.css'

const NotFound = () => {
  return (
    <div className={classes.wrapper}>
      <p className={classes.text}>
        The page you are looking for can`t be found.
      </p>
      <p className={classes.error}>404</p>
      <NavLink className={classes.link} to={'/'}>
        Go HOME
      </NavLink>
    </div>
  )
}

export default NotFound

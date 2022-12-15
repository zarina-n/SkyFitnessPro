import { Link } from 'react-router-dom'

import LogoIcon from '../../Icons/LogoIcon'

import cn from 'classnames'
import classes from './index.module.css'

const Logo = ({ colorLogo, className }) => {
  const color = colorLogo === 'white' ? 'white' : 'black'

  return (
    <div className={classes.container}>
      <Link to="/">
        <LogoIcon className={cn(className, classes.icon, classes[color])} />
      </Link>
    </div>
  )
}

export default Logo

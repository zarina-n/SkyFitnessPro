import { useEffect, useState } from 'react'
import cn from 'classnames'

import LogoIcon from '../../Icons/LogoIcon'

import classes from './index.module.css'

const Logo = ({ colorLogo, className }) => {
  const [color, setColor] = useState('black')

  useEffect(() => {
    colorLogo === 'white' ? setColor('white') : color
  }, [color])

  return (
    <div className={classes.container}>
      <a href="">
        <LogoIcon className={cn(className, classes.icon, classes[color])} />
      </a>
    </div>
  )
}

export default Logo

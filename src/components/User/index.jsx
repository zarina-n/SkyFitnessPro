import cn from 'classnames'
import { useState } from 'react'
import { ReactComponent as Ellipse } from './ellipse.svg'
import { ReactComponent as Arrow } from './arrow-down.svg'
import classes from './index.module.css'

const User = () => {
  const [isShowNav, setIsShowNav] = useState(false)

  const handleShowNav = () => {
    setIsShowNav(!isShowNav)
  }
  return (
    <div className={classes.user} onClick={handleShowNav}>
      <Ellipse className={classes.avatar} />
      <p className={classes.name}>Сергей</p>
      <Arrow className={cn(classes.arrow, isShowNav && classes.rotate)} />
    </div>
  )
}

export default User

import cn from 'classnames'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { ReactComponent as Ellipse } from './ellipse.svg'
import { ReactComponent as Arrow } from './arrow-down.svg'
import classes from './index.module.css'
import { selectUser } from '../../store/user/userSlice'

const User = () => {
  const [isShowNav, setIsShowNav] = useState(false)
  const { login } = useSelector(selectUser)

  const handleShowNav = () => {
    setIsShowNav(!isShowNav)
  }
  return (
    <div className={classes.user} onClick={handleShowNav}>
      <Ellipse className={classes.avatar} />
      <p className={classes.name}>{login}</p>
      <Arrow className={cn(classes.arrow, isShowNav && classes.rotate)} />
    </div>
  )
}

export default User

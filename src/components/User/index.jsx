import cn from 'classnames'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Ellipse } from './ellipse.svg'
import { ReactComponent as Arrow } from './arrow-down.svg'
import classes from './index.module.css'
import { selectUser } from '../../store/user/userSlice'

const User = ({colorName = 'black'}) => {
  const navigate = useNavigate()

  const [isShowNav, setIsShowNav] = useState(false)
  const { login } = useSelector(selectUser)

  const goProfile = () => {
      navigate(`/profile`)
  }

  const handleShowNav = (e) => {
    e.stopPropagation()
    setIsShowNav(!isShowNav)
  }
  return (
    <div className={cn(classes.user, classes[colorName])} onClick={goProfile}>
      <Ellipse className={classes.avatar} />
      <p className={classes.name}>{login}</p>
      <Arrow className={cn(classes.arrow, isShowNav && classes.rotate)} onClick={handleShowNav}/>
    </div>
  )
}

export default User

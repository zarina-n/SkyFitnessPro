import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { selectUser } from '../../store/user/userSlice'

import cn from 'classnames'
import classes from './index.module.css'

const User = ({ colorName = 'black' }) => {
  const navigate = useNavigate()
  const { login } = useSelector(selectUser)

  const goProfile = () => {
    navigate(`/profile`)
  }

  return (
    <div className={cn(classes.user, classes[colorName])} onClick={goProfile}>
      <img
        className={classes.avatar}
        src="/image/avatar/avatar.png"
        alt="avatar"
      />
      <p className={classes.name}>{login}</p>
    </div>
  )
}

export default User

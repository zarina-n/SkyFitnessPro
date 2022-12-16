import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Ellipse } from './ellipse.svg'
import classes from './index.module.css'
import { selectUser } from '../../store/user/userSlice'

const User = () => {
  const navigate = useNavigate()

  const { login } = useSelector(selectUser)

  const goProfile = () => {
    navigate(`/profile`)
  }

  return (
    <div className={classes.user} onClick={goProfile}>
      <Ellipse className={classes.avatar} />
      <p className={classes.name}>{login}</p>
    </div>
  )
}

export default User

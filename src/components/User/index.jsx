import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import cn from 'classnames'
import { ReactComponent as Ellipse } from './ellipse.svg'
import classes from './index.module.css'
import { selectUser } from '../../store/user/userSlice'

const User = ({colorName = 'black'}) => {
  const navigate = useNavigate()

  const { login } = useSelector(selectUser)

  const goProfile = () => {
    navigate(`/profile`)
  }

  return (
    <div className={cn(classes.user, classes[colorName])} onClick={goProfile}>
      <Ellipse className={classes.avatar} />
      <p className={classes.name}>{login}</p>
    </div>
  )
}

export default User

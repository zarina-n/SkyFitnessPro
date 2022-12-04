import { useNavigate } from 'react-router-dom'
import ButtonGo from '../ButtonGo'

import classes from './index.module.css'

const CourseCart = ({ id, src, button }) => {
  const navigate = useNavigate()

  const goCourse = () => {
    if (!button) {
      navigate(`/${id}`)
    } else return
  }
  return (
    <div className={classes.cart} onClick={goCourse}>
      <img src={src} alt={id} />
      {button ? <ButtonGo /> : null}
    </div>
  )
}

export default CourseCart

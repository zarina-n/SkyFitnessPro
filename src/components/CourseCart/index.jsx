import { useNavigate } from 'react-router-dom'
import ButtonGo from '../ButtonGo'

import classes from './index.module.css'

const CourseCart = ({ id, src, button, title, ...attrs }) => {
  const navigate = useNavigate()

  const goCourse = () => {
    if (!button) {
      navigate(`/about/${title}`)
    } else return
  }
  return (
    <div className={classes.cart} onClick={goCourse}>
      <img id={id} src={src} alt={title} />
      <div className={classes.title}>{title}</div>
      {button ? <ButtonGo {...attrs} /> : null}
    </div>
  )
}

export default CourseCart

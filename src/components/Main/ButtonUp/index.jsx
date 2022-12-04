import classes from './index.module.css'

const ButtonUp = () => {
  const onClick = () => {
    scroll(0, 0)
    return false
  }
  return (
    <a href="#" onClick={onClick} className={classes.up}>
      Наверх ↑
    </a>
  )
}

export default ButtonUp

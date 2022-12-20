import Button from '../Button'

import classes from './index.module.css'

const ButtonGo = ({ idButton, ...attrs }) => {
  return (
    <Button {...attrs} id={idButton} className={classes.go}>
      Перейти →
    </Button>
  )
}

export default ButtonGo

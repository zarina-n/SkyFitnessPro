import Button from '../Button'

import classes from './index.module.css'

const ButtonGo = ({ ...attrs }) => {
  return (
    <Button {...attrs} className={classes.go}>
      Перейти →
    </Button>
  )
}

export default ButtonGo

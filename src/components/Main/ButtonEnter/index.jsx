import Button from '../../Button'

import classes from './index.module.css'

const ButtonEnter = ({ ...attrs }) => {
  return (
    <Button className={classes.enter} {...attrs}>
      Войти
    </Button>
  )
}

export default ButtonEnter

import { useState } from 'react'
import Button from '../Button'

import classes from './index.module.css'

const ButtonGo = ({ ...attrs }) => {
  const [active, setActive] = useState(false)

  const onClick = () => {
    return setActive(!active)
  }
  return (
    <Button {...attrs} className={classes.go} onClick={onClick}>
      Перейти →
    </Button>
  )
}

export default ButtonGo

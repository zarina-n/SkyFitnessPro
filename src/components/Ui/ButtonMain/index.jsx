import { useEffect, useState } from 'react'
import Button from '../../Button'

import cn from 'classnames'
import classes from './index.module.css'

const ButtonMain = ({ colorBtn, text, btnClassName, disabled }) => {
  const [color, setColor] = useState('violet')

  useEffect(() => {
    colorBtn === 'white' ? setColor('white') : color
  }, [color])

  return (
    <Button
      disabled={disabled}
      className={cn(classes.btn, classes[color], btnClassName)}
    >
      {text}
    </Button>
  )
}

export default ButtonMain

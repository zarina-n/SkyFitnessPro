import Button from '../../Button'

import cn from 'classnames'
import classes from './index.module.css'

const ButtonMain = ({ colorBtn, content, btnClassName, ...attrs }) => {
  const color = colorBtn === 'white' ? 'white' : 'violet'

  return (
    <Button
      {...attrs}
      className={cn(classes.btn, classes[color], btnClassName)}
    >
      {content}
    </Button>
  )
}

export default ButtonMain

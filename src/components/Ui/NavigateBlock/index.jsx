import User from '../../User'
import Logo from '../Logo'
import classes from './index.module.css'

import cn from 'classnames'
import ButtonEnter from '../../Main/ButtonEnter'

const NavigateBlock = ({ login, colorLogo, colorName, onClick }) => {
  return (
    <div className={cn(classes.container, classes.sidebar)}>
      <Logo colorLogo={colorLogo} />
      {login !== null ? (
        <User colorName={colorName} />
      ) : (
        <ButtonEnter onClick={onClick} />
      )}
    </div>
  )
}

export default NavigateBlock

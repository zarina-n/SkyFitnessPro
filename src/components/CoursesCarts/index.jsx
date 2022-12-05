import cn from 'classnames'

import CART_IMG from '../../data/CART_IMG'
import CourseCart from '../CourseCart'

import classes from './index.module.css'

const CoursesCarts = ({ idCarts, button, className, ...attrs }) => {
  const images = CART_IMG.filter((img) => idCarts.includes(img.id))

  return (
    <div className={classes.container}>
      <div className={cn(className, classes.courses)}>
        {images.map((img) => (
          <CourseCart
            button={button}
            {...attrs}
            key={img.id}
            id={img.id}
            src={img.src}
          />
        ))}
      </div>
    </div>
  )
}

export default CoursesCarts

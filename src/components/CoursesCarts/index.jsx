import { useEffect, useState } from 'react'

import InfiniteScroll from 'react-infinite-scroll-component'
import CourseCart from '../CourseCart'
import { Loader } from '../Loader'
import CART_IMG from '../../data/CART_IMG'

import classes from './index.module.css'
import cn from 'classnames'

import { chunk, setSrc } from './helpers'

const CoursesCarts = ({ courses, button, className, ...attrs }) => {
  const [page, setPage] = useState(0)
  const [carts, setCarts] = useState([])

  const chunkCourses = chunk(courses)

  useEffect(() => {
    fetchCourses()
  }, [])

  const fetchCourses = () => {
    if (carts.length < courses.length) {
      setCarts([...carts, ...chunkCourses[page]])
      setPage(page + 1)
    } else setCarts(courses)
  }

  return (
    <InfiniteScroll
      dataLength={carts.length}
      next={fetchCourses}
      hasMore={true}
      loader={carts.length !== courses.length && <Loader />}
    >
      <div className={classes.container}>
        <div className={cn(className, classes.courses)}>
          {carts.map((cart, index) => (
            <CourseCart
              button={button}
              {...attrs}
              key={index}
              src={setSrc(CART_IMG, index)}
              id={cart._id}
              title={cart.name}
              pathName={cart.pathName}
            />
          ))}
        </div>
      </div>
    </InfiniteScroll>
  )
}

export default CoursesCarts

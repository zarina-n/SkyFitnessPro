import { useEffect } from 'react'
import Modal from '..'
import { ReactComponent as Success } from './success.svg'
import classes from './index.module.css'

const SuccessModal = ({ setIsSuccessModalShown }) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsSuccessModalShown(false)
    }, 1000)

    return () => clearTimeout(timerId)
  }, [setIsSuccessModalShown])

  return (
    <Modal>
      <div className={classes.content}>
        <h2 className={classes.title}>Ваш прогресс засчитан!</h2>
        <Success />
      </div>
    </Modal>
  )
}

export default SuccessModal

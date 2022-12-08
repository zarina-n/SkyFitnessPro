import Logo from '../../components/Ui/Logo'
import ButtonEnter from '../../components/Main/ButtonEnter'
import ButtonUp from '../../components/Main/ButtonUp'
import CoursesCarts from '../../components/CoursesCarts'
import NewPassword from '../../components/Modal/NewPassword'
import Modal from '../../components/Modal'

import cn from 'classnames'
import classes from './index.module.css'

const Main = () => {
  const isModalVisible = false // Временно! Чисто для демонстрации модального окна.

  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <div className={cn(classes.container, classes.sidebar)}>
          <Logo colorLogo="white" />
          <div className={classes.profile}>
            <ButtonEnter />
          </div>
        </div>
        <div className={cn(classes.container, classes.body)}>
          <div className={classes.content}>
            <div className={classes.text}>
              <div className={classes.subtitle}>
                Онлайн-тренировки для занятий дома
              </div>
              <div className={classes.title}>
                Начните заниматься спортом и улучшите качество жизни
              </div>
            </div>
            <div className={classes.sticker}>
              <img src="image/main/sticker.png" alt="" />
            </div>
          </div>
        </div>
      </header>
      <main className={classes.main}>
        <CoursesCarts
          idCarts={['yoga', 'stretch', 'dance', 'step', 'bodyflex']}
        />
      </main>
      <footer className={cn(classes.container, classes.footer)}>
        <ButtonUp />
      </footer>
      {isModalVisible && (
        <Modal>
          <NewPassword />
        </Modal>
      )}
    </div>
  )
}

export default Main

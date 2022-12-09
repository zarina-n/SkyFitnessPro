import { useState } from 'react'
import { useSelector } from 'react-redux'

import Logo from '../Ui/Logo'
import User from '../User'
import CoursesCarts from '../CoursesCarts'
import ButtonMain from '../Ui/ButtonMain'
import Modal from '../../components/Modal'
import NewPassword from '../../components/Modal/NewPassword'
import NewLogin from '../../components/Modal/NewLogin'
import { selectUser } from '../../store/user/userSlice'

import classes from './index.module.css'

const MyProfile = () => {
  const { login, password } = useSelector(selectUser)
  const [isModalVisible, setModalVisible] = useState(false)
  const [modal, setModal] = useState({
    newLog: false,
    newPass: false,
  })

  const openCloseModal = () => {
    setModalVisible(!isModalVisible)
  }

  const handleClick = (e) => {
    setModalVisible(true)
    if (e.target.name === 'newPass') {
      return setModal({ newLog: false, newPass: true })
    }
    if (e.target.name === 'newLog') {
      return setModal({ newLog: true, newPass: false })
    }
  }

  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <Logo />
        <User />
      </header>
      <div className={classes.information}>
        <h2 className={classes.tittle}>Мой профиль</h2>
        <p className={classes.text}>{login}</p>
        <p className={classes.text}>{password}</p>
        <div className={classes.buttons}>
          <ButtonMain
            name="newLog"
            btnClassName={classes.button}
            content="Редактировать логин"
            onClick={handleClick}
          />
          <ButtonMain
            name="newPass"
            btnClassName={classes.button}
            content="Редактировать пароль"
            onClick={handleClick}
          />
        </div>
      </div>
      <div>
        <h2 className={classes.tittle}>Мои курсы</h2>
        <div className={classes.cards}>
          <CoursesCarts
            button={true}
            idCarts={['yoga', 'stretch', 'bodyflex']}
          />
        </div>
      </div>
      {isModalVisible && (
        <Modal onClick={openCloseModal}>
          {modal.newLog ? <NewLogin /> : <NewPassword />}
        </Modal>
      )}
    </div>
  )
}

export default MyProfile

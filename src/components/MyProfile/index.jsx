import { useState } from 'react'
import { useSelector } from 'react-redux'

import Logo from '../Ui/Logo'
import User from '../User'
import CoursesCarts from '../CoursesCarts'
import ButtonMain from '../Ui/ButtonMain'
import Modal from '../Modal'
import NewPassword from '../Modal/NewPassword'
import NewLogin from '../Modal/NewLogin'
import TrainingChoice from '../TrainingChoice'
import { selectUser } from '../../store/user/userSlice'

import classes from './index.module.css'

const MyProfile = () => {
  const { login, password } = useSelector(selectUser)
  const [isModalVisible, setModalVisible] = useState(false)

  const [modal, setModal] = useState(null)

  const closeModal = () => {
    setModalVisible(false)
  }

  const handleClick = (e) => {
    setModalVisible(true)
    if (e.target.name === 'newPass') {
      return setModal(<NewPassword />)
    }
    if (e.target.name === 'newLog') {
      return setModal(<NewLogin />)
    }
    if (e.target.name === 'select') {
      return setModal(<TrainingChoice />)
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
            name="select"
            idCarts={['yoga', 'stretch', 'bodyflex']}
            onClick={handleClick}
          />
        </div>
      </div>
      {isModalVisible && <Modal onClick={closeModal}>{modal}</Modal>}
    </div>
  )
}

export default MyProfile

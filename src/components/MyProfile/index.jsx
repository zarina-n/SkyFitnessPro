import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from '../../store/user/userSlice'
import {
  selectCourses,
  selectCoursesInfo,
} from '../../store/courses/coursesSlice'
import { revertAll } from '../../store/generalActions'
import { useAuth } from '../../context/AuthContext'

import Logo from '../Ui/Logo'
import User from '../User'
import CoursesCarts from '../CoursesCarts'
import ButtonMain from '../Ui/ButtonMain'
import Modal from '../Modal'
import NewPassword from '../Modal/NewPassword'
import NewLogin from '../Modal/NewLogin'
import TrainingChoice from '../TrainingChoice'
import { Loader } from '../Loader'

import classes from './index.module.css'

const MyProfile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isModalVisible, setModalVisible] = useState(false)
  const [modal, setModal] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { logout } = useAuth()
  const { login, password } = useSelector(selectUser)
  const { status } = useSelector(selectCoursesInfo)
  const courses = useSelector(selectCourses)

  const closeModal = () => {
    setModalVisible(false)
  }

  const handleClick = (e) => {
    setModalVisible(true)
    if (e.target.name === 'newPass') {
      return setModal(<NewPassword setModalVisible={setModalVisible} />)
    }
    if (e.target.name === 'newLog') {
      return setModal(<NewLogin setModalVisible={setModalVisible} />)
    }
    if (e.target.name === 'select') {
      return setModal(<TrainingChoice />)
    }
  }

  const handleLogout = async () => {
    setError('')
    try {
      await logout()
      dispatch(revertAll())
      navigate('/')
    } catch {
      setError('Ошибка при выходе из аккаунта')
    }
    setLoading(false)
  }

  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <Logo />
        <User colorName="black"/>
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
          <ButtonMain
            name="exit"
            btnClassName={classes.button}
            content={loading ? '...loading' : 'Выйти из аккаунта'}
            onClick={handleLogout}
          />
          {error && <div className={classes.message}>{error}</div>}
        </div>
      </div>
      <div>
        <h2 className={classes.tittle}>Мои курсы</h2>
        <div className={classes.cards}>
          {status === 'loading' && <Loader />}
          {status === 'received' && (
            <CoursesCarts
              courses={courses}
              button={true}
              name="select"
              onClick={handleClick}
            />
          )}
        </div>
      </div>
      {isModalVisible && <Modal onClick={closeModal}>{modal}</Modal>}
    </div>
  )
}

export default MyProfile

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { selectUser, setError, setLoading } from '../../store/user/userSlice'
import { revertAll } from '../../store/generalActions'
import { setUserPassword } from '../../store/user/usersActions'
import { userCourses } from '../../store/profile/profileActions'
import {
  //selectProfile,
  selectProfileInfo,
  selectUserCourses,
} from '../../store/profile/profileSlice'
import {
  selectCurrentWorkout,
  setCurrentId,
} from '../../store/workouts/workoutsSlice'
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
  const { id, error, loading, login, password } = useSelector(selectUser)
  const { status } = useSelector(selectProfileInfo)
  const { logout } = useAuth()
  const courses = useSelector(selectUserCourses)

  useEffect(() => {
    if (password === null) {
      dispatch(setUserPassword(id))
    }
  }, [dispatch, password])

  useEffect(() => {
    setTimeout(() => {
      dispatch(userCourses(id))
    }, 500)
  }, [dispatch])

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
      dispatch(setCurrentId(e.target.id))
      return setModal(<TrainingChoice />)
    }
  }

  const workouts = useSelector(selectCurrentWorkout)
  if (workouts === null) return null

  const handleLogout = async () => {
    dispatch(setError(''))
    try {
      await logout()
      dispatch(revertAll())
      navigate('/')
    } catch {
      dispatch(setError('Ошибка при выходе из аккаунта'))
    }
    dispatch(setLoading(false))
  }

  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <Logo />
        <User colorName="black" />
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
          {status === 'received' && courses === null && (
            <p>Скорее добавьте курс!!!</p>
          )}
          {status === 'loading' && <Loader />}
          {status === 'received' && courses !== null && (
            <CoursesCarts
              courses={Object.values(courses)}
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

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { selectUser, setError, setLoading } from '../../store/user/userSlice'
import { revertAll } from '../../store/generalActions'
import { setUserPassword } from '../../store/user/usersActions'
import { userCourses } from '../../store/profile/profileActions'
import {
  selectProfileInfo,
  selectUserCourses,
} from '../../store/profile/profileSlice'
import {
  selectCurrentWorkout,
  setCurrentId,
} from '../../store/workouts/workoutsSlice'
import { useAuth } from '../../context/AuthContext'

import CoursesCarts from '../CoursesCarts'
import ButtonMain from '../Ui/ButtonMain'
import Modal from '../Modal'
import NewPassword from '../Modal/NewPassword'
import NewLogin from '../Modal/NewLogin'
import TrainingChoice from '../TrainingChoice'
import { Loader } from '../Loader'

import classes from './index.module.css'
import NavigateBlock from '../Ui/NavigateBlock'

const MyProfile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isModalVisible, setModalVisible] = useState(false)
  const [modal, setModal] = useState(null)
  const { id, login, password } = useSelector(selectUser)
  const { status } = useSelector(selectProfileInfo)
  const courses = useSelector(selectUserCourses)
  const { logout } = useAuth()

  useEffect(() => {
    if (password === null) {
      dispatch(setUserPassword(id))
    }
  }, [dispatch, password])

  useEffect(() => {
    return () => {
      dispatch(setError(''))
    }
  }, [])

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
    } catch (error) {
      dispatch(setError(error.message))
    }
    dispatch(setLoading(false))
    dispatch(setError(''))
  }

  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <NavigateBlock login={login} colorName="black" />
      </header>
      <div className={classes.information}>
        <h2 className={classes.tittle}>Мой профиль</h2>
        <p className={classes.text}>Логин: {login}</p>
        <p className={classes.text}>Пароль: {password}</p>
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
            content="Выйти из аккаунта"
            onClick={handleLogout}
          />
        </div>
      </div>
      <div>
        <h2 className={classes.tittle}>Мои курсы</h2>
        <div className={classes.cards}>
          {((status === 'rejected' && !courses.length) ||
            (status === 'received' && courses === null)) && (
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

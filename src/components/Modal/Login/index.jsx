import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'

import { useAuth } from '../../../context/AuthContext'
import {
  selectUser,
  setCurrentUser,
  setError,
  setLoading,
  setPassword,
} from '../../../store/user/userSlice'

import Logo from '../../Ui/Logo'
import ButtonMain from '../../Ui/ButtonMain'
import InputLogin from '../Inputs/Login'
import InputEmail from '../Inputs/Email'
import InputPassword from '../Inputs/Password'
import { Loader } from '../../Loader'

import classes from './index.module.css'

const LoginModal = ({ showSignup, setModalVisible }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { error, loading } = useSelector(selectUser)
  const { login } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleClick = () => {
    dispatch(setError(''))
    showSignup()
  }

  const onSubmit = async (data) => {
    const route = document.location.pathname
    try {
      dispatch(setError(''))
      dispatch(setLoading(true))
      const { user } = await login(data.email, data.password)
      dispatch(
        setCurrentUser({
          login: data.username,
          email: user.email,
          token: user.accessToken,
          id: user.uid,
        })
      )
      dispatch(setPassword(data.password))
      if (route.includes('/about')) {
        setModalVisible(false)
      } else navigate('/profile')
    } catch (error) {
      dispatch(setLoading(false))
      dispatch(setError(error.message))
    }
    dispatch(setLoading(false))
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <Logo className={classes.logo} />
      <div className={classes.inputs}>
        <InputLogin register={register} errors={errors} />
        <InputEmail register={register} errors={errors} />
        <InputPassword name="password" register={register} errors={errors} />
      </div>
      <div className={classes.buttons}>
        <ButtonMain type="submit" content={loading ? <Loader /> : 'Войти'} />
        <ButtonMain
          content="Зарегистрироваться"
          colorBtn={'white'}
          onClick={handleClick}
        />
        {error && <div className={classes.message}>{error}</div>}
      </div>
    </form>
  )
}

export default LoginModal

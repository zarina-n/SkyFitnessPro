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
import InputLogin from '../Inputs/Login'
import InputEmail from '../Inputs/Email'
import InputPassword from '../Inputs/Password'
import ButtonMain from '../../Ui/ButtonMain'
import { Loader } from '../../Loader'

import classes from './index.module.css'

const Signup = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { error, loading } = useSelector(selectUser)
  const { signup, updateUserName, writeUserData } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      return dispatch(setError('Пароли не совпадают'))
    }
    dispatch(setLoading(true))
    dispatch(setError(''))
    try {
      dispatch(setError(''))
      dispatch(setLoading(true))

      const { user } = await signup(data.email, data.password)
      await updateUserName(data.username)
      await writeUserData(user.uid, data.username, user.email, data.password)
      dispatch(
        setCurrentUser({
          login: data.username,
          email: user.email,
          token: user.accessToken,
          id: user.uid,
        })
      )
      dispatch(setPassword(data.password))
      navigate('/profile')
    } catch (error) {
      dispatch(setLoading(false))
      dispatch(setError(error.message))
    }
    dispatch(setLoading(false))
    dispatch(setError(''))
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <Logo className={classes.logo} />
      <div className={classes.inputs}>
        <InputLogin register={register} errors={errors} />
        <InputEmail register={register} errors={errors} />
        <InputPassword name="password" register={register} errors={errors} />
        <InputPassword
          name="confirmPassword"
          register={register}
          errors={errors}
        />
      </div>
      <div className={classes.buttons}>
        <ButtonMain
          type="submit"
          content={loading ? <Loader /> : 'Зарегистрироваться'}
        />
      </div>
      {error && <div className={classes.message}>{error}</div>}
    </form>
  )
}

export default Signup

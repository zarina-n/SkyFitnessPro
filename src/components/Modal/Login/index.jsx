import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../../context/AuthContext'
import { setUser } from '../../../store/user/userSlice'

import Logo from '../../Ui/Logo'
import ButtonMain from '../../Ui/ButtonMain'
import InputLogin from '../Inputs/Login'
import InputEmail from '../Inputs/Email'
import InputPassword from '../Inputs/Password'
import { Loader } from '../../Loader'

import classes from './index.module.css'

const LoginModal = ({ showSignup }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      setError('')
      setLoading(true)
      const { user } = await login(data.email, data.password)

      dispatch(
        setUser({
          login: data.username,
          password: data.password,
          email: user.email,
          token: user.accessToken,
          id: user.uid,
        })
      )
      navigate('/profile')
    } catch {
      setLoading(false)
      setError('Ошибка авторизации')
    }
    setLoading(false)
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
          onClick={showSignup}
        />
        {error && <div className={classes.message}>{error}</div>}
      </div>
    </form>
  )
}

export default LoginModal

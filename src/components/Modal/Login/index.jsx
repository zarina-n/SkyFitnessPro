import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useAuth } from '../../../context/AuthContext'
import { setUser } from '../../../store/user/userSlice'

import Logo from '../../Ui/Logo'
import ButtonMain from '../../Ui/ButtonMain'

import classes from './index.module.css'

const LoginModal = ({ showSignup }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
  })

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      const { user } = await login(values.email, values.password)
      dispatch(
        setUser({
          login: values.username,
          password: values.password,
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
    <>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Logo className={classes.logo} />
        <div className={classes.inputs}>
          <input
            className={classes.input}
            type="text"
            name="username"
            value={values.username}
            onChange={onChange}
            placeholder="Логин"
          />
          <input
            className={classes.input}
            type="email"
            name="email"
            value={values.email}
            onChange={onChange}
            placeholder="Почта"
          />
          <input
            className={classes.input}
            type="password"
            name="password"
            value={values.password}
            onChange={onChange}
            placeholder="Пароль"
          />
        </div>
        <div className={classes.buttons}>
          <ButtonMain
            content={loading ? '...loading' : 'Войти'}
            type="submit"
          />
          <ButtonMain
            content="Зарегистрироваться"
            colorBtn={'white'}
            onClick={showSignup}
          />
          {error && <div className={classes.message}>{error}</div>}
        </div>
      </form>
    </>
  )
}

export default LoginModal

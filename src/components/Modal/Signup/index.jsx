import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useAuth } from '../../../context/AuthContext'
import { setUser } from '../../../store/user/userSlice'

import Logo from '../../Ui/Logo'
import ButtonMain from '../../Ui/ButtonMain'

import classes from './index.module.css'

const Signup = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPass: '',
  })

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (values.password !== values.confirmPass) {
      return setError('Пароли не совпадают')
    }

    try {
      setError('')
      setLoading(true)
      const { user } = await signup(values.email, values.password)
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
      setError('Ошибка при создании аккаунта')
    }
    setLoading(false)
  }

  return (
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
        <input
          className={classes.input}
          type="password"
          name="confirmPass"
          value={values.confirmPass}
          onChange={onChange}
          placeholder="Повторите пароль"
        />
      </div>
      <div className={classes.buttons}>
        <ButtonMain content={loading ? '...loading' : 'Зарегистрироваться'} />
      </div>
      {error && <div className={classes.message}>{error}</div>}
    </form>
  )
}

export default Signup

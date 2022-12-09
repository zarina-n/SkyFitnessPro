import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useAuth } from '../../../context/AuthContext'
import { removeUser } from '../../../store/user/userSlice'

import Logo from '../../Ui/Logo'
import ButtonMain from '../../Ui/ButtonMain'

import classes from './index.module.css'

const NewPassword = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { updateUserPassword } = useAuth()
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if (password !== confirmPass) {
      return setError('Пароли не совпадают')
    }
    setLoading(true)
    setError('')

    if (password) {
      try {
        setError('')
        setLoading(true)
        await updateUserPassword(password)
        dispatch(removeUser())
        navigate('/')
      } catch {
        setLoading(false)
        setError('Ошибка при обновлении аккаунта')
      }
      setLoading(false)
    }
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Logo colorLogo="black" className={classes.logo} />
      <h3 className={classes.title}>Новый пароль:</h3>
      <div className={classes.inputs}>
        <input
          className={classes.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
        />
        <input
          className={classes.input}
          type="password"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
          placeholder="Повторите пароль"
        />
      </div>
      <div className={classes.buttons}>
        <ButtonMain content={loading ? '...loading' : 'Сохранить'} />
      </div>
      {error && <div className={classes.message}>{error}</div>}
    </form>
  )
}

export default NewPassword

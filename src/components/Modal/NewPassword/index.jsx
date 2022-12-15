import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../../context/AuthContext'
import { setPassword } from '../../../store/user/userSlice'

import Logo from '../../Ui/Logo'
import InputPassword from '../Inputs/Password'
import ButtonMain from '../../Ui/ButtonMain'
import { Loader } from '../../Loader'

import classes from './index.module.css'

const NewPassword = ({ setModalVisible }) => {
  const dispatch = useDispatch()
  const { updateUserPassword } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      return setError('Пароли не совпадают')
    }
    setLoading(true)
    setError('')
    try {
      setError('')
      setLoading(true)
      await updateUserPassword(data.password)
      dispatch(setPassword(data.password))
      setModalVisible(false)
    } catch {
      setLoading(false)
      setError('Ошибка при обновлении аккаунта')
    }
    setLoading(false)
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <Logo className={classes.logo} />
      <h3 className={classes.title}>Новый пароль:</h3>
      <div className={classes.inputs}>
        <InputPassword name="password" register={register} errors={errors} />
        <InputPassword
          name="confirmPassword"
          register={register}
          errors={errors}
        />
      </div>
      <div className={classes.buttons}>
        <ButtonMain content={loading ? <Loader /> : 'Сохранить'} />
      </div>
      {error && <div className={classes.message}>{error}</div>}
    </form>
  )
}

export default NewPassword

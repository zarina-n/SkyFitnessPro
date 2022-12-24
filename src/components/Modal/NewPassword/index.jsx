import { useDispatch, useSelector } from 'react-redux'

import { useForm } from 'react-hook-form'
import { useAuth } from '../../../context/AuthContext'
import {
  selectUser,
  setError,
  setLoading,
  setPassword,
} from '../../../store/user/userSlice'
import { newPassword } from '../../../store/user/usersActions'

import Logo from '../../Ui/Logo'
import InputPassword from '../Inputs/Password'
import ButtonMain from '../../Ui/ButtonMain'
import { Loader } from '../../Loader'

import classes from './index.module.css'

const NewPassword = ({ setModalVisible }) => {
  const dispatch = useDispatch()
  const { email, password, error, loading, id } = useSelector(selectUser)
  const { updateUserPassword, reauthenticate } = useAuth()
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
      await reauthenticate(email, password)
      await updateUserPassword(data.password)
      dispatch(newPassword({ id: id, password: data.password }))
      dispatch(setPassword(data.password))
      setModalVisible(false)
    } catch (error) {
      dispatch(setError(error.message))
      dispatch(setLoading(false))
    }
    dispatch(setLoading(false))
    dispatch(setError(''))
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

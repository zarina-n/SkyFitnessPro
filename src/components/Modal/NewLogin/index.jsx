import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'

import { useAuth } from '../../../context/AuthContext'
import { newLogin } from '../../../store/user/usersActions'
import { selectUser, setError, setLoading } from '../../../store/user/userSlice'

import Logo from '../../Ui/Logo'
import InputLogin from '../Inputs/Login'
import ButtonMain from '../../Ui/ButtonMain'
import { Loader } from '../../Loader'

import classes from './index.module.css'

const NewLogin = ({ setModalVisible }) => {
  const dispatch = useDispatch()
  const { id, error, loading } = useSelector(selectUser)
  const { updateUserName } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      dispatch(setLoading(true))
      await updateUserName(data.username)
      dispatch(newLogin({ id: id, username: data.username }))
    } catch (error) {
      dispatch(setError(error.message))
      dispatch(setLoading(false))
    }
    dispatch(setLoading(false))
    setModalVisible(false)
  }
  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <Logo colorLogo="black" className={classes.logo} />
      <h3 className={classes.title}>Новый логин:</h3>
      <div className={classes.inputs}>
        <InputLogin register={register} errors={errors} />
      </div>
      <div className={classes.buttons}>
        <ButtonMain
          type="submit"
          content={loading ? <Loader /> : 'Сохранить'}
        />
        {error && <div className={classes.message}>{error}</div>}
      </div>
    </form>
  )
}

export default NewLogin

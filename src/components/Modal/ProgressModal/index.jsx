import { useForm } from 'react-hook-form'

import ButtonMain from '../../Ui/ButtonMain'
import InputProgress from '../Inputs/Progress'
import classes from './index.module.css'

const ProgressModal = ({ onClick }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    //в input передавать имя инпута или index при map, чтобы получить значение в data;
    //сейчас такая дата {"первый": '1', "второй": '1', "третий": '1'} единички результат заполнения формы
    onClick()
  }
  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={classes.title}>Мой прогресс</h2>
      <div className={classes.inputs}>
        <label className={classes.text} />
        Сколько раз вы сделали наклоны вперед?
        <InputProgress name="первый" register={register} errors={errors} />
        <label className={classes.text} />
        Сколько раз вы сделали наклоны назад?
        <InputProgress name="второй" register={register} errors={errors} />
        <label className={classes.text} />
        Сколько раз вы сделали поднятие ног, согнутых в коленях?
        <InputProgress name="третий" register={register} errors={errors} />
      </div>
      <ButtonMain type="submit" content="Отправить" />
    </form>
  )
}

export default ProgressModal

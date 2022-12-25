/* eslint-disable react/jsx-key */
import { useForm } from 'react-hook-form'

import ButtonMain from '../../Ui/ButtonMain'
import InputProgress from '../Inputs/Progress'
import classes from './index.module.css'

const ProgressModal = ({ exercises, onClick }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    //в input передавать имя инпута или index при map, чтобы получить значение в data;
    onClick()
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={classes.title}>Мой прогресс</h2>
      <div className={classes.inputs}>
        {exercises?.map((exercise) => (
          <label key={exercise.id} className={classes.text}>
            {`Сколько раз вы сделали упражнение "${
              exercise.name.split('(')[0]
            }" ?`}
            <InputProgress
              name={exercise.id}
              register={register}
              errors={errors}
            />
          </label>
        ))}
      </div>
      <ButtonMain type="submit" content="Отправить" />
    </form>
  )
}

export default ProgressModal

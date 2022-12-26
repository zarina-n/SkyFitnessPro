/* eslint-disable react/jsx-key */
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'

import ButtonMain from '../../Ui/ButtonMain'
import InputProgress from '../Inputs/Progress'
import classes from './index.module.css'
import { addProgress } from '../../../store/profile/profileActions'
import { selectUser } from '../../../store/user/userSlice'
import { getUserProgress } from './utils'

const ProgressModal = ({ exercises, onClick, courseName }) => {
  const dispatch = useDispatch()
  const { id } = useSelector(selectUser)
  const userProfile = useSelector((state) => state.profile.list)

  let currentCourseId
  let currentCourse
  let currentWorkoutIndex

  for (const courseId in userProfile) {
    if (userProfile[courseId].name === courseName) {
      currentCourseId = courseId
      currentCourse = userProfile[courseId]
    }
  }

  currentCourse.workouts.map((wo, woIndex) =>
    wo.exercises.map((ex) =>
      exercises.map((userEx) =>
        userEx.name === ex.name ? (currentWorkoutIndex = woIndex) : ''
      )
    )
  )

  const addUserProgress = (data) => {
    const progress = getUserProgress(data, exercises)

    dispatch(
      addProgress({
        id: id,
        courseId: currentCourseId,
        workoutIndex: currentWorkoutIndex,
        progress: progress,
      })
    )
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    addUserProgress(data)
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
              name={exercise.name}
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

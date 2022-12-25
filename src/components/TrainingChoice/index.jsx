import classes from './index.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentWorkout } from '../../store/workouts/workoutsSlice'
import { selectUserCourses } from '../../store/profile/profileSlice'

const TrainingChoice = ({ openCloseTrainingModal }) => {
  const workouts = useSelector(selectCurrentWorkout)
  const userCourses = useSelector(selectUserCourses)

  const currentWorkouts = []

  for (const courseId in userCourses) {
    userCourses[courseId].workouts.map((userWo) =>
      workouts.map((wo) =>
        wo._id === userWo._id
          ? currentWorkouts.push({ ...userWo, finished: false })
          : ''
      )
    )
  }

  const selectWorkouts = currentWorkouts.map((wo) =>
    wo.progress &&
    wo.progress.some(
      (progress) => Number(progress.count) === Number(progress.exercisesDone)
    )
      ? { ...wo, finished: true }
      : wo
  )

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Выберите тренировку</h1>
      <ul className={classes.list}>
        {selectWorkouts?.map((workout) => (
          <Link
            to={`/workout/${workout._id}`}
            className={`${classes.list__item}  ${
              workout.finished ? classes.active : classes.not_active
            } `}
            key={workout._id}
            onClick={openCloseTrainingModal}
          >
            {workout.name}
            <p className={classes.list__text}>{workout.details}</p>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default TrainingChoice

// ${!workout.available ? classes.disabled : ''}

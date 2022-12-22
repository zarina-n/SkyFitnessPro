import classes from './index.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentWorkout } from '../../store/workouts/workoutsSlice'

const TrainingChoice = () => {
  const workouts = useSelector(selectCurrentWorkout)

  const isDone = false

  workouts.map((workout) => ({ ...workout, isDone: isDone }))

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Выберите тренировку</h1>
      <ul className={classes.list}>
        {workouts?.map((workout) => (
          <Link
            to={`/workout/${workout._id}`}
            className={`${classes.list__item}  ${
              isDone ? classes.active : classes.not_active
            }`}
            key={workout._id}
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

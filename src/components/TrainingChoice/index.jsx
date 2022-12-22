import classes from './index.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentWorkout } from '../../store/workouts/workoutsSlice'

const TrainingChoice = () => {
  const workouts = useSelector(selectCurrentWorkout)

  const isDone = false

  const currentWorkouts = workouts.map((workout) => ({
    ...workout,
    isDone: isDone,
  }))

  for (let i = 0; i < currentWorkouts.length; i++) {
    if (i === 0) {
      currentWorkouts[0].available = true
    } else if (currentWorkouts[i - 1].isDone === true) {
      currentWorkouts[i].available = true
    } else {
      currentWorkouts[i].available = false
    }
  }

  console.log(currentWorkouts)

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Выберите тренировку</h1>
      <ul className={classes.list}>
        {currentWorkouts?.map((workout) => (
          <Link
            to={`/workout/${workout._id}`}
            className={`${classes.list__item}  ${
              isDone ? classes.active : classes.not_active
            } ${!workout.available ? classes.disabled : ''}`}
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

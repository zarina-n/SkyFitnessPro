import classes from './index.module.css'
import { useSelector } from 'react-redux'
import { selectCurrentWorkout } from '../../store/workouts/workoutsSlice'
import { Link } from 'react-router-dom'

const TrainingChoice = () => {
  const workouts = useSelector(selectCurrentWorkout)
  console.log(workouts)

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Выберите тренировку</h1>
      <ul className={classes.list}>
        {workouts.map((workout) => (
          <li className={classes.list__item} key={workout._id}>
            <Link className={classes.list__link} to={`/workout/${workout._id}`}>
              {workout.name}
              <p className={classes.list__text}>{workout.details}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TrainingChoice

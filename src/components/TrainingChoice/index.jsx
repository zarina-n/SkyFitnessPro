import classes from './index.module.css'
import { Link } from 'react-router-dom'

const TrainingChoice = ({ workouts }) => {
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

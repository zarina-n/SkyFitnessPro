import classes from './index.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentWorkout } from '../../store/workouts/workoutsSlice'
import { selectUserCourses } from '../../store/profile/profileSlice'
import { selectUser } from '../../store/user/userSlice'
import { userCourses } from '../../store/profile/profileActions'
import { getCurrentWorkouts } from './utils'

const TrainingChoice = ({ openCloseTrainingModal }) => {
  const dispatch = useDispatch
  const { id } = useSelector(selectUser)
  dispatch(userCourses(id))

  const workouts = useSelector(selectCurrentWorkout)
  const currentUserCourses = useSelector(selectUserCourses)

  const selectWorkouts = getCurrentWorkouts(currentUserCourses, workouts)

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

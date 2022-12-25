import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player/youtube'
import Logo from '../../components/Ui/Logo'
import User from '../../components/User'
import Exercises from '../../components/Exercises'
import Progress from '../../components/Progress'
import ProgressModal from '../../components/Modal/ProgressModal'
import SuccessModal from '../../components/Modal/SuccessModal'
import TrainingChoice from '../../components/TrainingChoice'
import Modal from '../../components/Modal'
import { selectWorkouts } from '../../store/workouts/workoutsSlice'
import { selectCourses } from '../../store/courses/coursesSlice'
import classes from './index.module.css'

import { userCourses } from '../../store/profile/profileActions'
import { selectUser } from '../../store/user/userSlice'
import { selectUserCourses } from '../../store/profile/profileSlice'

const Workout = () => {
  const workoutId = useParams()
  const dispatch = useDispatch()
  const { id } = useSelector(selectUser)

  const workoutList = useSelector(selectWorkouts)
  const allCourses = useSelector(selectUserCourses)
  let currentWorkout

  for (const course in allCourses) {
    allCourses[course].workouts.map((wo) =>
      wo._id === workoutId.id
        ? wo.progress !== undefined
          ? (currentWorkout = wo.progress)
          : (currentWorkout = wo.exercises)
        : ''
    )
  }

  console.log(currentWorkout)

  useEffect(() => {
    setTimeout(() => {
      dispatch(userCourses(id))
    }, 500)
  }, [dispatch])

  const workout = workoutList?.filter((workout) => workout._id === workoutId.id)

  const title = `${workout[0].name} / ${workout[0].details}`

  const coursesList = useSelector(selectCourses)
  const currentCourse = coursesList.filter((course) =>
    course.workout.includes(workoutId.id)
  )

  const [isProgressModalShown, setIsProgressModalShown] = useState(false)
  const [isSuccessModalShown, setIsSuccessModalShown] = useState(false)
  const [isTrainingModalShown, setIsTrainingModalShown] = useState(false)

  const handleClick = () => setIsProgressModalShown(true)

  const openCloseProgressModal = () => {
    setIsProgressModalShown(!isProgressModalShown)
  }

  const handleSendClick = () => {
    setIsProgressModalShown(false)
    setIsSuccessModalShown(true)
  }

  const titleClick = () => setIsTrainingModalShown(true)

  const openCloseTrainingModal = () => {
    setIsTrainingModalShown(!isTrainingModalShown)
  }

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <Logo />
          <User />
        </nav>
      </header>
      <main className={classes.main}>
        <h1 className={classes.heading}>{currentCourse[0].name}</h1>
        <h2 className={classes.title} onClick={titleClick}>
          {workout[0].details ? title : workout[0].name}
        </h2>
        <div className={classes.player}>
          <ReactPlayer
            url={workout[0].track_file || ''}
            width="100%"
            height="100%"
          />
        </div>
        {currentWorkout && currentWorkout.length > 0 && (
          <div className={classes.exercises}>
            <Exercises exercises={currentWorkout} onClick={handleClick} />
            <Progress exercises={currentWorkout} />
          </div>
        )}
      </main>
      {isProgressModalShown && (
        <Modal onClick={openCloseProgressModal}>
          <ProgressModal
            exercises={workout[0].exercises}
            onClick={handleSendClick}
            courseName={currentCourse[0].name}
            workoutName={workoutId.id}
          />
        </Modal>
      )}
      {isSuccessModalShown && (
        <SuccessModal setIsSuccessModalShown={setIsSuccessModalShown} />
      )}
      {isTrainingModalShown && (
        <Modal onClick={openCloseTrainingModal}>
          <TrainingChoice openCloseTrainingModal={openCloseTrainingModal} />
        </Modal>
      )}
    </div>
  )
}

export default Workout

import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player/youtube'
import Exercises from '../../components/Exercises'
import Progress from '../../components/Progress'
import ProgressModal from '../../components/Modal/ProgressModal'
import SuccessModal from '../../components/Modal/SuccessModal'
import TrainingChoice from '../../components/TrainingChoice'
import Modal from '../../components/Modal'
import {
  selectWorkouts,
  selectCurrentWorkout,
} from '../../store/workouts/workoutsSlice'
import { selectCourses } from '../../store/courses/coursesSlice'
import classes from './index.module.css'
import NavigateBlock from '../../components/Ui/NavigateBlock'

const Workout = () => {
  const id = useParams()
  const workoutList = useSelector(selectWorkouts)
  const workout = workoutList?.filter((workout) => workout._id === id.id)
  const title = `${workout[0].name} / ${workout[0].details}`

  const coursesList = useSelector(selectCourses)
  const currentCourse = coursesList.filter((course) =>
    course.workout.includes(id.id)
  )

  const workouts = useSelector(selectCurrentWorkout)

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
        <NavigateBlock />
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
        {workout[0].exercises && workout[0].exercises.length > 0 && (
          <div className={classes.exercises}>
            <Exercises exercises={workout[0].exercises} onClick={handleClick} />
            <Progress exercises={workout[0].exercises} />
          </div>
        )}
      </main>
      {isProgressModalShown && (
        <Modal onClick={openCloseProgressModal}>
          <ProgressModal
            exercises={workout[0].exercises}
            onClick={handleSendClick}
          />
        </Modal>
      )}
      {isSuccessModalShown && (
        <SuccessModal setIsSuccessModalShown={setIsSuccessModalShown} />
      )}
      {isTrainingModalShown && (
        <Modal onClick={openCloseTrainingModal}>
          <TrainingChoice workouts={workouts} />
        </Modal>
      )}
    </div>
  )
}

export default Workout

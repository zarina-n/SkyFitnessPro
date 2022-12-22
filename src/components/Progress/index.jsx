import cn from 'classnames'
import classes from './index.module.css'

const Progress = ({ exercises }) => {
  const userProgress = 5 // userProgress получаем после заполнения прогресса пользователем

  return (
    <div className={classes.progress}>
      <h2 className={classes.title}>Мой прогресс по тренировке:</h2>
      <ul className={classes.list}>
        {exercises?.map((exercise) => {
          const percent = Math.round(
            ((userProgress || 0) / exercise.count) * 100
          )
          return (
            <li key={exercise.id} className={classes.listItem}>
              <span className={classes.name}>
                {exercise.name.split('(')[0]}
              </span>
              <div
                className={cn(
                  classes.progressbar,
                  classes[`colorBg${exercise.id}`]
                )}
              >
                <div
                  className={cn(classes.done, classes[`color${exercise.id}`])}
                  style={{ width: `${percent}%` }}
                ></div>
                <span
                  className={classes.percent}
                  style={{ left: `${percent}px` }}
                >
                  {percent}%
                </span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Progress

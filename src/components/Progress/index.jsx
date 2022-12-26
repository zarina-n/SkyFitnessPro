import cn from 'classnames'
import classes from './index.module.css'

const Progress = ({ exercises }) => {
  return (
    <div className={classes.progress}>
      <h2 className={classes.title}>Мой прогресс по тренировке:</h2>
      <ul className={classes.list}>
        {exercises?.map((exercise, i) => {
          const percent = Math.round(
            ((Number(exercise.exercisesDone) || 0) / exercise.count) * 100
          )

          return (
            <li key={i + 1} className={classes.listItem}>
              <span className={classes.name}>
                {exercise.name.split('(')[0]}
              </span>
              <div
                className={cn(classes.progressbar, classes[`colorBg${i + 1}`])}
              >
                <div
                  className={cn(classes.done, classes[`color${i + 1}`])}
                  style={{ width: `${percent}%` }}
                ></div>
                <span
                  className={classes.percent}
                  style={{
                    left: `${percent}px`,
                    color: percent > 0 ? '#fff' : '#000',
                  }}
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

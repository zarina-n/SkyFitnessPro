import cn from 'classnames'
import classes from './index.module.css'

const Progress = () => {
  const percent1 = 30
  const percent2 = 50
  const percent3 = 100

  return (
    <div className={classes.progress}>
      <h2 className={classes.title}>Мой прогресс по тренировке 2:</h2>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <span className={classes.name}>Наклоны вперед</span>
          <div className={cn(classes.progressbar, classes.colorBg1)}>
            <div
              className={cn(classes.done, classes.color1)}
              style={{ width: `${percent1}%` }}
            ></div>
            <span className={classes.percent} style={{ left: `${percent1}px` }}>
              {percent1}%
            </span>
          </div>
        </li>
        <li className={classes.listItem}>
          <span className={classes.name}>Наклоны назад</span>
          <div className={cn(classes.progressbar, classes.colorBg2)}>
            <div
              className={cn(classes.done, classes.color2)}
              style={{ width: `${percent2}%` }}
            ></div>
            <span className={classes.percent} style={{ left: `${percent2}px` }}>
              {percent2}%
            </span>
          </div>
        </li>
        <li className={classes.listItem}>
          <span className={classes.name}>Поднятие ног, согнутых в коленях</span>
          <div className={cn(classes.progressbar, classes.colorBg3)}>
            <div
              className={cn(classes.done, classes.color3)}
              style={{ width: `${percent3}%` }}
            ></div>
            <span className={classes.percent} style={{ left: `${percent3}px` }}>
              {percent3}%
            </span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Progress

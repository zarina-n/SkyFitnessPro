import classes from './index.module.css'

const TrainingChoice = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Выберите тренировку</h1>
      <ul className={classes.list}>
        <li className={classes.list__item}>
          Утренняя практика
          <p>
            Йога на каждый день / <span>1 день</span>
          </p>
        </li>

        <li className={classes.list__item}>
          Красота и здоровье{' '}
          <p>
            Йога на каждый день / <span>2 день</span>
          </p>
        </li>

        <li className={classes.list__item}>
          Асаны стоя
          <p>
            Йога на каждый день / <span>3 день</span>
          </p>
        </li>

        <li className={classes.list__item}>
          Растягиваем мышцы бедра
          <p>
            Йога на каждый день / <span>4 день</span>
          </p>
        </li>

        <li className={classes.list__item}>
          Гибкость спины
          <p>
            Йога на каждый день / <span>5 день</span>
          </p>
        </li>
      </ul>
    </div>
  )
}

export default TrainingChoice

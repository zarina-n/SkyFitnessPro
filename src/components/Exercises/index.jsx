import ButtonMain from '../Ui/ButtonMain'
import classes from './index.module.css'

const Exercises = ({ exercises, onClick }) => {
  return (
    <div className={classes.content}>
      <h2 className={classes.title}>Упражнения</h2>
      <ul className={classes.list}>
        {exercises?.map((exercise, i) => (
          <li key={i} className={classes.listItem}>
            {exercise.name}
          </li>
        ))}
      </ul>
      <ButtonMain content="Заполнить свой прогресс" onClick={onClick} />
    </div>
  )
}

export default Exercises

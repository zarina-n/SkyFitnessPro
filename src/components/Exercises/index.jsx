import ButtonMain from '../Ui/ButtonMain'
import classes from './index.module.css'

const Exercises = ({ onClick }) => {
  return (
    <div>
      <h2 className={classes.title}>Упражнения</h2>
      <ul className={classes.list}>
        <li className={classes.listItem}>Наклон вперед (10 повторений)</li>
        <li className={classes.listItem}>Наклон назад (10 повторений)</li>
        <li className={classes.listItem}>
          Поднятие ног, согнутых в коленях (5 повторений)
        </li>
      </ul>
      <ButtonMain content="Заполнить свой прогресс" onClick={onClick} />
    </div>
  )
}

export default Exercises

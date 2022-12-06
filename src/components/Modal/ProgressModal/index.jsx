import Modal from '..'
import ButtonMain from '../../Ui/ButtonMain'
import classes from './index.module.css'

const ProgressModal = ({ onClick }) => {
  return (
    <Modal>
      <h2 className={classes.title}>Мой прогресс</h2>
      <div className={classes.inputs}>
        <label className={classes.text}>
          Сколько раз вы сделали наклоны вперед?
          <input className={classes.input} placeholder="Введите значение" />
        </label>
        <label className={classes.text}>
          Сколько раз вы сделали наклоны назад?
          <input className={classes.input} placeholder="Введите значение" />
        </label>
        <label className={classes.text}>
          Сколько раз вы сделали поднятие ног, согнутых в коленях?
          <input className={classes.input} placeholder="Введите значение" />
        </label>
      </div>
      <ButtonMain content="Отправить" onClick={onClick} />
    </Modal>
  )
}

export default ProgressModal

import cn from 'classnames'
import classes from './index.module.css'

const InputProgress = ({ className, register, errors, name }) => {
  return (
    <>
      <input
        className={cn(className, classes.input)}
        type="text"
        placeholder="Введите значение"
        {...register(`${name}`, {
          required: 'Обязательно',
          minLength: { value: 1, message: 'Минимальная длинна 1' },
          validate: (value) => {
            return (
              [/^\d+$/].every((pattern) => pattern.test(value)) ||
              'Только цифры'
            )
          },
        })}
      />
      <span className={classes.message}>{errors[name]?.message}</span>
    </>
  )
}

export default InputProgress

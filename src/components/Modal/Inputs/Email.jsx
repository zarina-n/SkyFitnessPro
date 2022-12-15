import classes from './index.module.css'

const InputEmail = ({ register, errors }) => {
  return (
    <>
      <input
        className={classes.input}
        type="email"
        name="email"
        placeholder="Почта"
        {...register('email', {
          required: 'Обязательно',
          validate: (value) => {
            return (
              [/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]/].every((pattern) =>
                pattern.test(value)
              ) || 'Проверьте правильность ввода почты'
            )
          },
        })}
      />
      <span className={classes.message}>{errors.email?.message}</span>
    </>
  )
}

export default InputEmail

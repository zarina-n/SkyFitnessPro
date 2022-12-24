import classes from './index.module.css'

const InputPassword = ({ register, errors, name }) => {
  return (
    <>
      <input
        className={classes.input}
        type="password"
        name={name}
        placeholder="Пароль"
        {...register(`${name}`, {
          required: 'Обязательно',
          minLength: {
            value: 8,
            message: 'Минимальная длина 8',
          },
          validate: (value) => {
            return (
              [
                /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@$!%*#?&])[a-zA-Z0-9@$!%*#?&*]/,
              ].every((pattern) => pattern.test(value)) ||
              'Должен включать одну букву на латинице , число и спецсимвол!'
            )
          },
        })}
      />
      <span className={classes.message}>{errors[name]?.message}</span>
    </>
  )
}

export default InputPassword

/**^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@$!%*#?&])[a-zA-Z0-9@$!%*#?&*]{8,16}$ */
/**[/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/] */

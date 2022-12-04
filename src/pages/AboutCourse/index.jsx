import classes from './index.module.css'
import PhoneInHandIcon from '../../components/Icons/PhoneHandIcon/PhoneInHandIcon'
import ButtonMain from '../../components/Ui/ButtonMain'
import Logo from '../../components/Ui/Logo'

const AboutCourse = () => {
  return (
    <div className={classes.wrapper}>
      <Logo />
      <div className={classes.container}>
        <div className={classes.title__box}>
          <h1 className={classes.title}>Йога</h1>
        </div>
        <div className={classes.foryou}>
          <h2 className={classes.heading}>Подойдет для вас, если:</h2>
          <ol className={classes.foryou__list}>
            <li className={classes.foryou__list_item}>
              Давно хотели попробовать йогу, но не решались начать.
            </li>
            <li className={classes.foryou__list_item}>
              Хотите укрепить позвоночник, избавиться от болей в спине и
              суставах.
            </li>
            <li className={classes.foryou__list_item}>
              Ищете активность, полезную для тела и души.
            </li>
          </ol>
        </div>
        <div className={classes.directions}>
          <h1 className={classes.heading}>Направления:</h1>
          <ul className={classes.directions__list}>
            <li className={classes.directions__list_item}>Йога для новичков</li>
            <li className={classes.directions__list_item}>Классическая йога</li>
            <li className={classes.directions__list_item}>Йогатерапия</li>
            <li className={classes.directions__list_item}>Кундалини-йога</li>
            <li className={classes.directions__list_item}>Хатха-йога</li>
            <li className={classes.directions__list_item}>Аштанга-йога</li>
          </ul>
        </div>

        <div className={classes.results}>
          <p className={classes.results__text}>
            Благодаря комплексному воздействию упражнений происходит проработка
            всех групп мышц, тренировка суставов, улучшается циркуляция крови.
            Кроме того, упражнения дарят отличное настроение, заряжают бодростью
            и помогают противостоять стрессам.
          </p>
        </div>

        <div className={classes.application}>
          <div className={classes.application__left}>
            <p className={classes.application__text}>
              Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
              выбором направления и тренера, с которым тренировки принесут
              здоровье и радость!
            </p>
            <ButtonMain content="Записаться на тренировку" />
          </div>
          <div className={classes.application__right}>
            <PhoneInHandIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCourse

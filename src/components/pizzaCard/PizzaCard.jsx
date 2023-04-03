import css from './pizzaCard.module.css'
import Button from '../button/Button'

function PizzaCard({name, image, description, price, variant, title}) {
  return (
    <div className={css.wrapper}>
        <div className={css.imageWrapper}>
            <img src={image} alt={name} />
        </div>
        <div className={css.name}>{name}</div>
        <p className={css.description}>{description}</p>
        <div className={css.footer}>
            <div className={css.price}>от {price} сом</div>
            <Button title={title} variant={variant}/>
        </div>
    </div>
  )
}

export default PizzaCard

import css from './ComboCard.module.css'
import Button from '../button/Button'

function ComboCard({name, image, description, price, variant, title, oldPrice}) {
    return (
      <div className={css.wrapper}>
          <div className={css.imageWrapper}>
              <img src={image} alt={name} />
          </div>
          <div className={css.name}>{name}</div>
          <p className={css.description}>{description}</p>
          <div className={css.footer}>
              <div>
                <div className={css.price}>от {price} сом</div>
                <div className={css.oldPrice}>от {oldPrice} сом</div>
              </div>
              <Button title={title} variant={variant}/>
          </div>
      </div>
    )
  }

export default ComboCard
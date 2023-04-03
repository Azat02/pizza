import React from 'react'
import css from './EachSlider.module.css'

function EachSlider({src, name, price}) {
  return (
    <div className={css.wrapper}>
        <div className={css.items}>
          <img src={src} alt="pizza"/>
          <div>
              <div>{name}</div>
              <div>{price}</div>
          </div>
        </div>
    </div>
  )
}

export default EachSlider
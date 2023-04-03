import React from 'react'
import EachSlider from './eachSlider/EachSlider'
import css from './SecondSlide.module.css'
import pizza1 from '../../assets/pizza1.png'
import pizza2 from '../../assets/pizza2.webp'
import pizza3 from '../../assets/pizza3.png'
import pizza4 from '../../assets/pizza4.webp'



function SecondSlider() {
  return (
    <div className={css.wrapper + ' container'}>
        <EachSlider src={pizza1} name={'Пепперони'} price={'от 445 сом'}/>
        <EachSlider src={pizza2} name={'2 Пиццы'} price={'1095 сом'}/>
        <EachSlider src={pizza3} name={'Мексиканское'} price={'от 445 сом'}/>
        <EachSlider src={pizza4} name={'Додстер'} price={' 189 сом'}/>
        <EachSlider src={pizza1} name={'Рулетики с брусникой'} price={'169 сом'}/>
    </div>
  )
}

export default SecondSlider
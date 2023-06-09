import React from 'react'
import PizzaCard from '../../components/pizzaCard/PizzaCard'
import Slider from '../../components/slider/Slider'
import css from './HomePage.module.css'
import { useState, useEffect } from 'react';
import SecondSlider from '../../components/secondSlider/SecondSlider'
import ComboCard from '../../components/comboCard/ComboCard';
import base_url from '../../constants/api_const'
import LoadingBar from 'react-top-loading-bar';




function HomePage() {
    const [pizza, setPizza] = useState([]);
    const [combo, setCombo] = useState([]);
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        setProgress(30);
        setTimeout(() => {
            setProgress(60);
        }, 350);
        fetch(base_url + 'pizzas')
            .then(response => response.json())
            .then(data => setPizza(data))
            .finally(() => {
                setProgress(100)
            })
            .catch(error => console.error(error));
            
    }, []);

    useEffect(() => {
        fetch('https://6427f5ba46fd35eb7c48b0ee.mockapi.io/api/combo')
        .then(response => response.json())
        .then(data => setCombo(data))
        .catch(error => console.error(error));
    }, []);
    
   
  return (
    <div>
        <LoadingBar
            color='#f11946'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
        />
        <Slider/>
        <div className="container">
            <div className={css.frequency}>Часто заказывают</div>
        </div>
        <SecondSlider/>
        <div className="container">
            <div className={css.without_ping}>
            <img src="https://dodopizza-a.akamaihd.net/site-static/dist/f30f1ab8cd7a7a54476d.svg" alt="without_ping" />
            <div>
                <div className={css.ping_title}>Без свинины</div>
                <div className={css.subtitle}>Мы готовим из цыпленка и говядины</div>
            </div>
            </div>
        </div>
        <section className='container'>
            <div className={css.title} id="pizza">Пицца</div>
            <div className={"pizzasWrapper"}>
                {
                    pizza.map((item) => (<PizzaCard key={item.id} {...item}/>))
                }
            </div>
        </section>
        <section className='container'>
            <div className={css.title} id="combo">Комбо</div>
            <div className={"pizzasWrapper"}>
                {
                    combo.map((item) => (<ComboCard key={item.id} {...item}/>))
                }
            </div>
        </section>
    </div>
  )
}

export default HomePage
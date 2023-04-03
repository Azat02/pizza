import React from 'react'
import PizzaCard from '../../components/pizzaCard/PizzaCard'
import css from '../HomePage/HomePage.module.css'
import { useState, useEffect } from 'react';
import base_url from '../../constants/api_const'
import LoadingBar from 'react-top-loading-bar';
import ComboCard from '../../components/comboCard/ComboCard';

function AdminPage() {
    const [pizza, setPizza] = useState([]);
    const [combo, setCombo] = useState([]);
    const [progress, setProgress] = useState(0);

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
        <section className='container'>
            <div className={css.title} id="pizza">Пицца</div>
            <div className={"pizzasWrapper"}>
                {
                    pizza.map((item) => (<PizzaCard key={item.id} {...item} isAdmin= {true}/>))
                }
            </div>
        </section>
        <section className='container'>
            <div className={css.title} id="combo">Комбо</div>
            <div className={"pizzasWrapper"}>
                {
                    combo.map((item) => (<ComboCard key={item.id} {...item} isAdmin={true}/>))
                }
            </div>
        </section>
    </div>
  )
}

export default AdminPage

import css from './Header.module.css'
import logo from '../../assets/logo.png'
import coin from '../../assets/dcoin.png'
import Button from '../button/Button'
import { Link } from 'react-router-dom'

function Header() {

    function handleClick(event) {
        event.preventDefault();
        const section = document.querySelector(event.target.hash);
        section.scrollIntoView({ behavior: 'smooth' });
    }


return (
    <div className={css.wrapper + ' container'}>
        <header>
            <div className={css.header_wrapper}>
                <Link to='/'> <img width={'200px'}  src={logo} alt="pizza" /></Link>
                <div className={css.delivery}> 
                    <div className={css.delivery_title}>Доставка пиццы Бишкек</div>
                    <div className={css.delivery_star}>33 мин 4.66</div>
                </div>
                <div className={css.call}>
                    <a className={css.call_number} href="tel:0551550550">0 (551) 550-550</a>
                    <div className={css.call_text}>Звонок по телефону</div>
                </div>
            </div>
            <div className={css.sign}>
                <div className={css.sign_coin}>
                    <img width={'30px'} src={coin} alt="" />
                    <div className={css.sign_coin_name}>Додокоины</div>
                </div>
                <Button title={'Войти'} variant='enter'/>
            </div>
        </header>
        <nav>
            <div  className={css.nav_wrapper}>
                <Link to="#pizza" onClick={handleClick}>Пицца</Link>
                <Link to="#combo" onClick={handleClick}>Комбо</Link>
                <Link to="/">Закуски</Link>
                <Link to="/">Десерты</Link>
                <Link to="/">Напитки</Link>
                <Link to="/">Другие товары</Link>
                <Link to="/">Акции</Link>
                <Link to ='/contacts'>Контакты</Link>
                <Link to='/aboutus'>О нас</Link>
                <Link to="/">Прямой эфир</Link>
            </div>
            <Button title = {'Корзина'}/>
        </nav>
    </div>
  )
}

export default Header
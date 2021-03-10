import React from 'react';
import css from './statistic.module.css'

const Stat = () => {
    return (
        <div className={css.stat}>
            <div className={css.menu}>
                <h3>Настройки отображения:</h3>
                <label>с <input type='date'/>по <input type='date'/></label>
                <h4>Выберите профиль:</h4>
                <ul>
                    <li className={css.menu}><input name='profile' type='radio'/>Общая статистика</li>
                    <li className={css.menu}><input name='profile' type='radio'/>Акции</li>
                    <li className={css.menu}><input name='profile' type='radio'/>Скидки</li>
                    <li className={css.menu}><input name='profile' type='radio'/>Проценты</li>
                    <li className={css.menu}><input name='profile' type='radio'/>Промокоды</li>
                </ul>
                <h4>Выберите категорию:</h4>
                <ul>
                    <li className={css.menu}><input name='category' type='radio'/>Продажи Фильмов</li>
                    <li className={css.menu}><input name='category' type='radio'/>Продажи подписок</li>
                    <li className={css.menu}><input name='category' type='radio'/>Активность</li>
                    <li className={css.menu}><input name='category' type='radio'/>Прибыль</li>
                    <button> Показать статистику</button>
                </ul>
            </div>
            <div className={css.graph}>
                <img src='https://1.bp.blogspot.com/-6wskw-Ll2-k/WjTGjeTjrvI/AAAAAAAAQTs/SAiXc4f5ihkAPMuX7twr1BRfnOuKpfMiwCLcBGAs/s1600/%25D0%2591%25D0%25B5%25D0%25B7%25D1%258B%25D0%25BC%25D1%258F%25D0%25BD%25D0%25BD%25D1%258B%25D0%25B9.png'/>
            </div>
            <div className={css.graph2}>
                <img src='https://www.sostav.ru/blogs/images/feeds/20/38490.jpg'/>
            </div>
        </div>
    )
};

export default Stat
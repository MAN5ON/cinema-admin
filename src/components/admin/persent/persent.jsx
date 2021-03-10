import React from 'react';
import css from './persent.module.css'

const Persent = () => {
    return (
        <div className={css.persent}>
            <div className={css.menu}>
                <h3>Управление рекомендациями:</h3>
                <h4>Подписчику</h4>
                <p>Процент сторонних фильмов:</p>
                <input placeholder='% = '/>
                <h4>Стороннему пользователю</h4>
                <p>Процент фильмов по подписке:</p>
                <input placeholder='% = '/><br/>
                <button>Установить проценты</button>
            </div>
        </div>
    )
};

export default Persent
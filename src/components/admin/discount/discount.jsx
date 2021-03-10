import React, {useState} from 'react';
import css from './discount.module.css'

const Discount = (props) => {
    const [discount, setDiscount] = useState([
        {film: 'Титаник', disc: '25%', date_start: '01.01.2021', date_end: '07.01.2021'},
        {film: 'Джентельмены', disc: '15%', date_start: '15.05.2021', date_end: '30.05.2021'},
        {film: 'Мальчишник в Вегасе', disc: '50%', date_start: '01.02.2021', date_end: '10.02.2021'},
        {film: 'Мой сосед Тоторо', disc: '75%', date_start: '05.01.2021', date_end: '10.01.2021'},
        {film: 'Джанго Освобождённый', disc: '20%', date_start: '25.12.2020', date_end: '05.01.2021'},
    ]);

    const [formDiscount, setFormDiscount] = useState(
        {
            film: '',
            disc: '',
            date_start: '',
            date_end: '',
        }
    );

    const insertHandler = () => {
        if (formDiscount.film === '') {
            return alert('Пожалуйста, введите название фильма')
        }
        if (formDiscount.date_start === '') {
            return alert('Пожалуйста, укажите дату начала скидки')
        }
        if (formDiscount.date_end === '') {
            return alert('Пожалуйста, укажите дату окончания скидки')
        }
        if (formDiscount.disc === '') {
            return alert('Пожалуйста, введите размер скидки')
        }
        let tmp = formDiscount
        if (formDiscount.disc === '') {
            tmp.disc = 'None'
        } else {
            tmp.disc += '%'
        }

        setDiscount(prev => prev.concat(tmp))
        setFormDiscount({
            film: '',
            disc: '',
            date_start: '',
            date_end: '',
        });
    };

    const deleteHandler = name => {
        setDiscount(prev => prev.filter(item => item.film !== name))
    };

    return (
        <div className={css.discount}>
            <div className={css.menu}>
                <h3>Скидка на определённый фильм:</h3>
                <ul>
                    <li className={css.menu}>Поиск:</li>
                    <li className={css.menu}><input
                        onChange={event => setFormDiscount({...formDiscount, film: event.target.value})}
                        value={formDiscount.film}/></li>
                    <li className={css.menu}>Размер скидки: <input
                        onChange={event => setFormDiscount({...formDiscount, disc: event.target.value})}
                        value={formDiscount.disc} placeholder='% ='/></li>
                    <li className={css.menu}>Действие скидки с:<input
                        onChange={event => setFormDiscount({...formDiscount, date_start: event.target.value})}
                        value={formDiscount.date_start} type='date' className='item'/>по:<input
                        onChange={event => setFormDiscount({...formDiscount, date_end: event.target.value})}
                        value={formDiscount.date_end}
                        type='date' className='item'/></li>
                </ul>
                <button onClick={insertHandler} className='item'>Создать скидку</button>

            </div>

            <div className={css.list}>
                <h3>Действующие предложения:</h3>
                <div className={css.table}>
                    <div className={css.table_header}>
                        <span>Фильм</span>
                        <span>Скидка</span>
                        <span>Дата начала</span>
                        <span>Дата конца</span>
                        <span></span>

                    </div>
                    <div className={css.table_body}>
                        {
                            discount.map(sale => {
                                return (
                                    <div className={css.table_item} key={sale.saler}>
                                        <span>{sale.film}</span>
                                        <span>{sale.disc}</span>
                                        <span>{sale.date_start}</span>
                                        <span>{sale.date_end}</span>
                                        <span className={css.delete} onClick={() => deleteHandler(sale.film)}>x</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Discount
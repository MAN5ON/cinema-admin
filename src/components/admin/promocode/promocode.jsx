import React, {useState} from 'react';
import css from './promocode.module.css'


export const Promocode = () => {
    const [promo, setPromo] = useState([
        {
            promo: 'NEWYEAR2021',
            sale_podpiska: '21%',
            sale_film: '21%',
            date_start: '20.12.2020',
            date_end: '07.01.2021'
        },
        {
            promo: 'ACTION2021',
            sale_podpiska: 'None',
            sale_film: '25%',
            date_start: '14.01.2021',
            date_end: '21.01.2021'
        },
        {
            promo: 'SALE50',
            sale_podpiska: '50%',
            sale_film: '50%',
            date_start: '10.05.2021',
            date_end: '20.05.2021'
        },
        {
            promo: 'SPECIAL2021',
            sale_podpiska: 'None',
            sale_film: '25%',
            date_start: '01.01.2021',
            date_end: '31.12.2021'
        },
        {
            promo: 'SUMMER2021',
            sale_podpiska: '50%',
            sale_film: 'None',
            date_start: '01.06.2021',
            date_end: '01.09.2021'
        },
    ]);

    const [formPromo, setFormPromo] = useState(
        {
            promo: '',
            sale_podpiska: '',
            sale_film: '',
            date_start: '',
            date_end: '',
        }
    );

    const [en1, setEn1] = useState(false);
    const [en2, setEn2] = useState(false);

    const insertHandler = () => {
        if (formPromo.promo === '') {
            return alert('Пожалуйста, введите имя промокода')
        }
        if (formPromo.date_start === '') {
            return alert('Пожалуйста, укажите дату начала')
        }
        if (formPromo.date_end === '') {
            return alert('Пожалуйста, укажите дату окончания')
        }
        if (formPromo.sale_podpiska === '' && formPromo.sale_film === '') {
            return alert('Пожалуйста, выберите скидку')
        }
        let tmp = formPromo
        if (formPromo.sale_podpiska === '') {
            tmp.sale_podpiska = 'None'
        } else {
            tmp.sale_podpiska += '%'
        }
        if (formPromo.sale_film === '') {
            tmp.sale_film = 'None'
        } else {
            tmp.sale_film += '%'
        }
        setPromo(prev => prev.concat(tmp))
        setFormPromo({
            promo: '',
            sale_podpiska: '',
            sale_film: '',
            date_start: '',
            date_end: '',
        })
        setEn1(false)
        setEn2(false)
    }

    const deleteHandler = name => {
        setPromo(prev => prev.filter(item => item.promo !== name))
    }

    return (
        <div className={css.promo}>
            <div className={css.menu}>
                <h3>Управление промокодами:</h3>
                <input onChange={event => setFormPromo({...formPromo, promo: event.target.value})}
                       value={formPromo.promo}
                       placeholder='Введите промокод'/>
                <h4>Свойства промокода:</h4>
                <ul>
                    <li className={css.menu}>
                        <input
                            type='checkbox'
                            onChange={() => setEn1(!en1)}
                            checked={en1}
                        />
                        Скидка на подписку
                        <input
                            placeholder='% = '
                            onChange={event => setFormPromo({...formPromo, sale_podpiska: event.target.value})}
                            value={formPromo.sale_podpiska}
                            disabled={!en1}
                        /></li>
                    <li className={css.menu}>
                        <input
                            type='checkbox'
                            onChange={() => setEn2(!en2)}
                            checked={en2}
                        />
                        Скидка на покупку любого фильма
                        <input
                            placeholder='% = '
                            onChange={event => setFormPromo({...formPromo, sale_film: event.target.value})}
                            value={formPromo.sale_film}
                            disabled={!en2}
                        /></li>
                    <li className={css.menu}>Действие промокода с:<input
                        onChange={event => setFormPromo({...formPromo, date_start: event.target.value})}
                        value={formPromo.date_start} type='date' className='item'/>по:<input
                        onChange={event => setFormPromo({...formPromo, date_end: event.target.value})}
                        value={formPromo.date_end} type='date' className='item'/></li>
                </ul>
                <button onClick={insertHandler} className='item'>Создать промокод</button>
            </div>
            <div className={css.list}>
                <h3>Действующие предложения:</h3>
                <div className={css.table}>
                    <div className={css.table_header}>
                        <span>Промокод</span>
                        <span>Скидка на подписку</span>
                        <span>Скидка на фильм</span>
                        <span>Дата начала</span>
                        <span>Дата конца</span>
                        <span></span>
                    </div>
                    <div className={css.table_body}>
                        {
                            promo.map(prom => {
                                return (
                                    <div className={css.table_item} key={prom.promo}>
                                        <span>{prom.promo}</span>
                                        <span>{prom.sale_podpiska}</span>
                                        <span>{prom.sale_film}</span>
                                        <span>{prom.date_start}</span>
                                        <span>{prom.date_end}</span>
                                        <span className={css.delete} onClick={() => deleteHandler(prom.promo)}>x</span>
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
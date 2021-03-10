import React, {useState} from 'react';
import css from './promotion.module.css'

const Promotion = (props) => {
    const [tion, setTion] = useState([
        {
            name: 'Фильм за 1 рубль',
            onerub: 'Yes',
            sale_podpiska: 'None',
            sale_film: 'None',
            act_start: '01.01.2021',
            act_end: '01.02.2021'
        },
        {
            name: 'Скидка на подписку 25%',
            onerub: 'No',
            sale_podpiska: '25%',
            sale_film: 'None',
            act_start: '01.09.2021',
            act_end: '05.10.2021'
        },
        {
            name: 'пакет "КАЙФ"',
            onerub: 'No',
            sale_film: '15%',
            act_start: '01.01.2021',
            act_end: '10.01.2021'
        },
        {
            name: 'пакет "Супер КАЙФ"',
            onerub: 'Yes',
            sale_podpiska: '25%',
            sale_film: '25%',
            act_start: '10.01.2021',
            act_end: '20.01.2021'
        },
        {
            name: 'пакет "ЭКСТРА КАЙФАРИКИ"',
            onerub: 'Yes',
            sale_podpiska: '50%',
            sale_film: '50%',
            act_start: '20.01.2021',
            act_end: '30.01.2021'
        }
    ]);
    const [formTion, setFormTion] = useState({
        name: '',
        onerub: '',
        sale_podpiska: '',
        sale_film: '',
        act_start: '',
        act_end: ''
    })

    const [en1, setEn1] = useState(false);
    const [en2, setEn2] = useState(false);
    const [en3, setEn3] = useState(false);

    const insertHandler = () => {
        if (formTion.name === '') {
            return alert('Пожалуйста, введите имя акции')
        }
        if (formTion.act_start === '') {
            return alert('Пожалуйста, укажите дату начала')
        }
        if (formTion.act_end === '') {
            return alert('Пожалуйста, укажите дату окончания')
        }
        if (formTion.sale_podpiska === '' && formTion.sale_film === '' && en1 === false) {
            return alert('Пожалуйста, выберите акцию')
        }
        let tmp = formTion
        if (formTion.sale_podpiska === '') {
            tmp.sale_podpiska = 'None'
        } else {
            tmp.sale_podpiska += '%'
        }
        if (formTion.sale_film === '') {
            tmp.sale_film = 'None'
        } else {
            tmp.sale_film += '%'
        }
        if (en1 === false) {
            tmp.onerub = 'No'
        } else {
            tmp.onerub = 'Yes'
        }
        setTion(prev => prev.concat(tmp));
        setFormTion({
            name: '',
            onerub: '',
            sale_podpiska: '',
            sale_film: '',
            act_start: '',
            act_end: ''
        });
        setEn1(false);
        setEn2(false);
        setEn3(false)
    };

    const deleteHandler = name => {
        setTion(prev => prev.filter(item => item.name !== name))
    };
    return (
        <div className={css.stock}>
            <div className={css.menu}>
                <h3>Управление акциями:</h3>
                <ul>
                    <li className={css.menu}><input
                        onChange={event => setFormTion({...formTion, name: event.target.value})} value={formTion.name}
                        placeholder='Название акции' className='item'/></li>
                    <li className={css.menu}><input
                        type='checkbox'
                        onChange={() => setEn1(!en1)}
                        checked={en1}/>Первый фильм за 1 рубль
                    </li>
                    <li className={css.menu}><input
                        type='checkbox'
                        onChange={() => setEn2(!en2)}
                        checked={en2}/>Скидка на подписку n% <input
                        onChange={event => setFormTion({...formTion, sale_podpiska: event.target.value})}
                        value={formTion.sale_podpiska}
                        placeholder='n =' disabled={!en2}
                        className='item'/>
                    </li>
                    <li className={css.menu}><input
                        type='checkbox'
                        onChange={() => setEn3(!en3)}
                        checked={en3}
                        type='checkbox'/>Скидка на фильмы m% <input
                        onChange={event => setFormTion({...formTion, sale_film: event.target.value})}
                        value={formTion.sale_film} disabled={!en3}
                        placeholder='m ='
                        className='item'/></li>
                    <li className={css.menu}>Действие акции с:<input
                        onChange={event => setFormTion({...formTion, act_start: event.target.value})}
                        value={formTion.act_start} type='date'/>по:<input
                        onChange={event => setFormTion({...formTion, act_end: event.target.value})}
                        value={formTion.act_end} type='date' className='item'/></li>
                    <button onClick={insertHandler} className='item'>Создать акцию</button>
                </ul>
            </div>

            <div className={css.list}>
                <h3>Действующие предложения:</h3>
                <div className={css.table}>
                    <div className={css.table_header}>
                        <span>Название</span>
                        <span>Один рубль</span>
                        <span>Скидка на подписку</span>
                        <span>Скидка на фильм</span>
                        <span>Дата начала</span>
                        <span>Дата конца</span>
                        <span> </span>

                    </div>
                    <div className={css.table_body}>
                        {
                            tion.map(tioner  => {
                                return (
                                    <div className={css.table_item} key={tioner.name}>
                                        <span>{tioner.name}</span>
                                        <span>{tioner.onerub}</span>
                                        <span>{tioner.sale_podpiska}</span>
                                        <span>{tioner.sale_film}</span>
                                        <span>{tioner.act_start}</span>
                                        <span>{tioner.act_end}</span>
                                        <span className={css.delete} onClick={() => deleteHandler(tioner.name)}>x</span>
                                    </div>
                                )})}
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Promotion
import React from 'react';
import css from './admin.module.css'
import {NavLink, BrowserRouter, Route} from "react-router-dom";
import Discount from "./discount/discount";
import Persent from "./persent/persent";
import { Promocode } from "./promocode/promocode";
import Promotion from "./promotion/Promotion";
import Stat from "./stat/stat";

const Admin = (props) => {
    return (
        <BrowserRouter>
            <div className={css.admin}>
                <div className={css.headerAdmin}>
                    <NavLink to='/persent' activeClassName={css.open}>
                        <button>Проценты</button>
                    </NavLink>
                    <NavLink to='/promotion' activeClassName={css.open}>
                        <button>Акции</button>
                    </NavLink>
                    <NavLink to='/discount' activeClassName={css.open}>
                        <button>Скидки</button>
                    </NavLink>
                    <NavLink to='/promocode' activeClassName={css.open}>
                        <button>Промокоды</button>
                    </NavLink>
                    <NavLink to='/statistic' activeClassName={css.open}>
                        <button>Статистика</button>
                    </NavLink>
                </div>

                <div className='main-window'>
                    <Route path='/discount' render={() => <Discount/>}/>
                    <Route path='/persent' render={() => <Persent/>}/>
                    <Route path='/promocode' render={() => <Promocode/>}/>
                    <Route path='/promotion' render={() => <Promotion/>}/>
                    <Route path='/statistic' render={() => <Stat/>}/>

                </div>

            </div>
        </BrowserRouter>
    )
};

export default Admin
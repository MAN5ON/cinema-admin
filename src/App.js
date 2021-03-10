import React from 'react';
import './App.css';
import Admin from "./components/admin/admin";
import {BrowserRouter, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'


function App(Props) {
    return (
        <BrowserRouter>
            <div className="App">
                <Route render={() => <Admin/> }/>
            </div>
        </BrowserRouter>
    );
}

export default App;

import React, {useEffect} from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Contacts from "./components/Contacts/Contacts";
import {connect} from "react-redux";
import {getProducts} from "./redux/productsReducer";
import {MagazineContainer} from "./components/Magazine/MagazineContainer";
import {BasketContainer} from "./components/Baskets/BasketContainer";
import {RepairsContainer} from "./components/Repairs/RepairsContainer";


let App = (props) => {
    useEffect(() => {
        props.getProducts()
    }, []);

    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <div  className='wrapper-content'>
                    <Route exact path='/' render={() => <Main/>} />
                    <Route path='/basket' render={() => <BasketContainer />} />
                    <Route path='/magazine' render={() => <MagazineContainer/>} />
                    <Route path='/repairs' render={() => <RepairsContainer/>} />
                    <Route path='/contacts' render={() => <Contacts/>} />
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export const AppContainer = connect(null, {getProducts})(App)

import React, {Component} from 'react';
import logo from './logo.svg';
import {observer, Provider} from 'mobx-react'
import TpStore from './stores/tpStore'
import Hello from './components/hello'

import './App.css';

const App = observer(class App extends Component {
    render() {
        return (
            <Provider tpStore={TpStore}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <Hello/>
                </div>
            </Provider>
        );
    }
});

export default App;

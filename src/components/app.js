import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import Card from './card.js';
import Filter from './filter.js';
import Header from './header.js';
import Tabs from './tabs.js';

// фон


class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Filter />
                <Tabs />
                <Card />
            </>
        )
    }
}

export default App;
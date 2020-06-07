import React from "react";
import logoFly from './Logo.png';
import { Logo, Header } from './style.js';

export default class HeaderMain extends React.Component {
    render() {
        return (
            <Header>
                <Logo src={logoFly} />
            </Header>
        )
    }
}
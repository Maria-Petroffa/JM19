import React from "react";
import styled from 'styled-components';
import logoPng from '../Logo.png'

// самолетик



const Logo = styled.img`
display: block;
margin-left: auto;
margin-right: auto;


`

const Header = styled.header`
margin-top: 50px;

`


class HeaderClass extends React.Component {
    render() {
        return (
            <Header><Logo src={logoPng}></Logo></Header>
            
        )
    }
}

export default HeaderClass;
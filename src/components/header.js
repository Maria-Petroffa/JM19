import React from "react";
import styled from 'styled-components';
import logoPng from '../Logo.png'

// самолетик



const Logo = styled.img`
display: block;
margin-left: auto;
margin-right: auto;

width: 60px;
padding: 0;


`

const Header = styled.header`
padding-top: 50px;


`


class HeaderClass extends React.Component {
    render() {
        return (
            <Header><Logo src={logoPng}></Logo></Header>
            
        )
    }
}

export default HeaderClass;
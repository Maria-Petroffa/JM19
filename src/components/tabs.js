import React from "react";

import styled from 'styled-components';

// табы
const TabWrap = styled.div`
display: flex;
flex-wrap: nowrap;
justify-content: space-between;

height: 50px;

font-weight: 600;
font-size: 12px;
text-transform: uppercase;

box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);

`

const TabItem = styled.div`
border: 1px solid;
background: ${props => props.active ? '#2196F3' : '#FFFFFF'};
height: 100%;
width: 100%;

color: ${props => props.active ? '#FFFFFF' : '#4A4A4A'};
align-items: center;
text-align: center;
font-weight: 600;

border-color: ${props => props.active ? '#2196F3' : '#DFE5EC'};
padding-top: 20px;

border-radius: 5px;

cursor: ${props => props.active ? 'default' : 'pointer'};
`

class Tab extends React.Component {
    handleClick = (e) => {
        const id = e.target.id
        const { handleClick} = this.props
        handleClick(id)
    }
    

    render() {
        const {tab:{ fast, cheap }} = this.props
        return (
            <TabWrap>
                <TabItem id="cheap" onClick={this.handleClick} active={cheap} >Самый дешевый</TabItem>
                <TabItem id="fast" onClick={this.handleClick} active={fast} >Самый быстрый</TabItem>
            </TabWrap>
        )
    }

}

export default Tab;
import React from "react";

import styled from 'styled-components';

// фильтр
const Form = styled.form`
display: block;
background: #FFFFFF;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
border-radius: 5px;
border-colour: #E5E5E5;

padding-top: 20px;
padding-left: 20px;
padding-right: 20px;
padding-bottom: 20px;
height: 100%;

`

const Legend = styled.legend`
font-weight: 600;
font-size: 12px;
color: #4A4A4A;
text-transform: uppercase;

`
const CheckboxItem = styled.p`

font-weight: normal;
font-size: 13px;

color: #4A4A4A;
margin-top: 20px;
`

const Input = styled.input`
border: 1px solid;
border-color: ${props => props.checked ? '#2196F3' : '#9ABBCE'};
color: #2196F3;
background-color: white;
width: 20px;
height: 20px;
border-radius: 2px;
margin: 0;
`

const Label = styled.label`
display: inline;
margin-left: 10px;
margin-bottom: 1px;
`

class Filter extends React.Component {
    checkBoxChange = (e) => {
        const { filterPoints } = this.props
        const id = e.target.id
        const isChecked = e.target.checked
        filterPoints(id, isChecked)

        // console.log(e.target.checked)
        // console.log(e.target.id)
        // console.log(e)
    }

    render() {
        // const { point: { all, withoutpoint, onepoint, onepoint, threepoint } } = this.props
        // console.log(this.props)
        return (
            <Form>
                <Legend>Количество пересадок</Legend>
                <CheckboxItem>
                    <Input onChange={this.checkBoxChange} type="checkbox" name="all" id="all" value="all" />
                    <Label>Все</Label>
                </CheckboxItem>
                <CheckboxItem>
                    <Input onChange={this.checkBoxChange} type="checkbox" name="withoutpoint" id="withoutpoint" value="Без пересадок" />
                    <Label>Без пересадок</Label>
                </CheckboxItem>
                <CheckboxItem>
                    <Input onChange={this.checkBoxChange} type="checkbox" name="onepoint" id="onepoint" value="1 пересадка" />
                    <Label>1 пересадка</Label>
                </CheckboxItem>
                <CheckboxItem>
                    <Input onChange={this.checkBoxChange} type="checkbox" name="twopoint" id="twopoint" value="2 пересадки" />
                    <Label>2 пересадки</Label>
                </CheckboxItem>
                <CheckboxItem>
                    <Input onChange={this.checkBoxChange} type="checkbox" name="threepoint" id="threepoint" value="3 пересадки" />
                    <Label>3 пересадки</Label>
                </CheckboxItem>
            </Form>
        )
    }
}

export default Filter;
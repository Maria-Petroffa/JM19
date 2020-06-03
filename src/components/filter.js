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
    render() {
        const { point: { all, withoutpoint, onepoint, twopoint, threepoint } } = this.props
        return (
            <Form>
                <Legend>Количество пересадок</Legend>
                <CheckboxItem>
                    <Input checked={all} type="checkbox" name="all" id="all" value="all" />
                    <Label>Все</Label>
                </CheckboxItem>
                <CheckboxItem>
                    <Input checked={withoutpoint} type="checkbox" name="without" id="without" value="Без пересадок" />
                    <Label>Без пересадок</Label>
                </CheckboxItem>
                <CheckboxItem>
                    <Input checked={onepoint} type="checkbox" name="oneway" id="oneway" value="1 пересадка" />
                    <Label>1 пересадка</Label>
                </CheckboxItem>
                <CheckboxItem>
                    <Input checked={twopoint} type="checkbox" name="twoway" id="twoway" value="2 пересадки" />
                    <Label>2 пересадки</Label>
                </CheckboxItem>
                <CheckboxItem>
                    <Input checked={threepoint} type="checkbox" name="threeway" id="threeway" value="3 пересадки" />
                    <Label>3 пересадки</Label>
                </CheckboxItem>
            </Form>
        )
    }
}

export default Filter;
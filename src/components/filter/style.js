import styled from 'styled-components';
import shape from './Shape.svg';

export const Form = styled.form`
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

export const Legend = styled.legend`
font-weight: 600;
font-size: 12px;
color: #4A4A4A;
text-transform: uppercase;

`

export const CheckboxItem = styled.p`

font-weight: normal;
font-size: 13px;

color: #4A4A4A;
margin-top: 20px;

.custom-checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  .custom-checkbox+.label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }

  .custom-checkbox+.label::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #9ABBCE;
    border-radius: 2px;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }

  .custom-checkbox:checked+.label::before {
    border-color: #2196F3;
    background-color: #ffffff;
    background-image: url(${shape});
  }
`

export const Input = styled.input`
border: 1px solid;
border-color: ${props => props.checked ? '#2196F3' : '#9ABBCE'};
color: #2196F3;
background-color: white;
width: 20px;
height: 20px;
border-radius: 2px;
margin: 0;


`

export const Label = styled.label`
display: inline;

margin-bottom: 1px;

font-size: 13px;
`

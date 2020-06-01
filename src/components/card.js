import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';


// карточки
class Card extends React.Component {
    render() {
        return(
            <table>
                <tr><td>13 400 P</td><td></td><td><img src="#" alt="some logo"/></td></tr>
                <tr><td>MOW – HKT</td><td>В пути</td><td>2 пересадки</td></tr>
                <tr><td>10:45 – 08:00</td><td>21ч 15м</td><td>HKG, JNB</td></tr>
            </table>
                
        )
    }
}

export default Card;
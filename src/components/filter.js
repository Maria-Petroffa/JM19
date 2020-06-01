import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';

// фильтр

class Filter extends React.Component {
render() {
    return(
        <form>
            <legend>Количество пересадок</legend>
            <p><input type="checkbox" name="all" value="all"/>Все</p>
            <p><input type="checkbox" name="without" value="Без пересадок"/>Без пересадок</p>
            <p><input type="checkbox" name="oneway" value="1 пересадка"/>1 пересадка</p>
            <p><input type="checkbox" name="twoway" value="2 пересадки"/>2 пересадки</p>
            <p><input type="checkbox" name="threeway" value="3 пересадки"/>3 пересадки</p>
        </form>
    )
}
}

export default Filter;
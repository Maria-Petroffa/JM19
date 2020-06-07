import React from 'react';

import {
  Form, Legend, CheckboxItem, Input, Label,
} from './style';

const filterNames = {
  all: 'Все',
  withoutpoint: 'Без пересадок',
  onepoint: '1 пересадка',
  twopoint: '2 пересадки',
  threepoint: '3 пересадки',
};

class Filter extends React.Component {
    checkBoxChange = (e) => {
      const { filterPoints } = this.props;
      const { id, checked } = e.target;

      filterPoints(id, checked);
    }

    renderCheckboxItems = (arr, obj) => arr.map((element) => {
      const value = obj[element];

      return (
        <CheckboxItem>
          <Input onChange={this.checkBoxChange} className="custom-checkbox" type="checkbox" name={element} id={element} />
          <Label className="label" htmlFor={element}>{value}</Label>
        </CheckboxItem>
      );
    })

    render() {
      const { filter } = this.props;

      return (
        <Form>
          <Legend>Количество пересадок</Legend>
          {this.renderCheckboxItems(Object.keys(filter), filterNames)}
        </Form>
      );
    }
}

export default Filter;

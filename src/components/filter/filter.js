import React from 'react';

import {
  Form, Legend, CheckboxItem, Input, Label,
} from './style';

// import {uniqueId} from 'lodash';

class Filter extends React.Component {
    checkBoxChange = (e) => {
      const { filterPoints } = this.props;
      const { id, checked } = e.target;

      filterPoints(id, checked);
    }

    renderCheckboxItems = (arr, obj) => arr.map((element) => {
      const value = obj[element].name;
      const isChecked = obj[element].isActive;

      return (
        <CheckboxItem>
          <Input checked={isChecked} onChange={this.checkBoxChange} className="custom-checkbox" type="checkbox" name={element} id={element} />
          <Label className="label" htmlFor={element}>{value}</Label>
        </CheckboxItem>
      );
    })

    render() {
      const { filter } = this.props;
      return (
        <Form>
          <Legend>Количество пересадок</Legend>
          {this.renderCheckboxItems(Object.keys(filter), filter)}
        </Form>
      );
    }
}

export default Filter;

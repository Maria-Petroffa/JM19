import React from 'react';
import { TabWrap, TabItem } from './style';

class Tab extends React.Component {
    handleClick = (e) => {
      const { id } = e.target;
      const { handleClick } = this.props;
      handleClick(id);
    }

    render() {
      const { tab: { fast, cheap } } = this.props;
      return (
        <TabWrap>
          <TabItem id="cheap" onClick={this.handleClick} active={cheap}>Самый дешевый</TabItem>
          <TabItem id="fast" onClick={this.handleClick} active={fast}>Самый быстрый</TabItem>
        </TabWrap>
      );
    }
}

export default Tab;

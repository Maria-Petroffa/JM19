import React from 'react';
import axios from 'axios';
import Card from '../card/card';
import Filter from '../filter/filter';
import Header from '../header/header';
import Tabs from '../tab/tabs';

import { Section, Result } from './style';
import { filtredTicket } from './filtredTicket';

const idPath = 'https://front-test.beta.aviasales.ru/search';
const ticketPath = (id) => `https://front-test.beta.aviasales.ru/tickets?searchId=${id}`;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab:
            {
              fast: false,
              cheap: true,
            },
      tickets: [],
      filter: {
        all: false,
        withoutpoint: false,
        onepoint: false,
        twopoint: false,
        threepoint: false,
      },
    };
  }

  componentDidMount() {
    axios.get(idPath)
      .then((response) => {
        const id = response.data.searchId;
        const requestPath = ticketPath(id);
        return requestPath;
      })
      .then((res) => {
        axios.get(res)
          .then((val) => {
            const { tickets } = val.data;
            this.setState({ tickets });
          });
      });
  }

    handleTab = (id) => {
      const { tab: { fast, cheap } } = this.state;
      const isTrue = this.state.tab[id];

      if (isTrue) { return null; }
      this.setState({
        tab:
            {
              fast: !fast,
              cheap: !cheap,
            },
      });
    }

    filterPoints = (id, isChecked) => {
      let {
        filter: {
          all, withoutpoint, onepoint, twopoint, threepoint,
        },
      } = this.state;

      if (id === 'all') { all = isChecked; }
      if (id === 'withoutpoint') { withoutpoint = isChecked; }
      if (id === 'onepoint') { onepoint = isChecked; }
      if (id === 'twopoint') { twopoint = isChecked; }
      if (id === 'threepoint') { threepoint = isChecked; }

      this.setState({
        filter: {
          all,
          withoutpoint,
          onepoint,
          twopoint,
          threepoint,
        },
      });
    } //

    render() {
      return (
        <>
          <Header />
          <Section>
            <Filter filterPoints={this.filterPoints} filter={this.state.filter} />
            <Result>
              <Tabs tab={this.state.tab} handleClick={this.handleTab} />
              <Card tickets={filtredTicket(this.state)} />
            </Result>
          </Section>
        </>
      );
    }
}

export default App;

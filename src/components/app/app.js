import React from 'react';
import axios from 'axios';
import CardList from '../card/card';
import Filter from '../filter/filter';
import Header from '../header/header';
import Tabs from '../tab/tabs';
import { idPath, ticketPath } from '../../service/service';

import { Section, Result } from './style';
import { filtredTicket } from './helper';

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
        all: { isActive: false, name: 'Все' },
        withoutpoint: { isActive: false, name: 'Без пересадок' },
        onepoint: { isActive: false, name: '1 пересадка' },
        twopoint: { isActive: false, name: '2 пересадки' },
        threepoint: { isActive: false, name: '3 пересадки' },
      },
    };
  }

  async componentDidMount() {
    const responseId = await axios.get(idPath);
    const id = responseId.data.searchId;
    const requestPath = ticketPath(id);
    const ticketsList = [];
    const createTicketList = (list) => {
      this.setState({ tickets: list });
    };

    async function f() {
      try {
        const responseTickets = await axios.get(requestPath);
        const { tickets, stop } = responseTickets.data;
        await ticketsList.push(...tickets);
        if (stop === true) {
          createTicketList(ticketsList);
          return;
        }
        f();
      } catch (err) {
        if (err.name === 'Error') { f(); }
      }
    }
    f();
  }

  handleChangeTab = (id) => {
    const { tab: { fast, cheap } } = this.state;
    const isActiveTab = this.state.tab[id];

    if (isActiveTab) { return null; }
    this.setState({
      tab:
      {
        fast: !fast,
        cheap: !cheap,
      },
    });
  }

  filterPoints = (id, isChecked) => {
    const { filter: { [id]: { name } } } = this.state;
    if (id === 'all') {
      return this.setState((state) => state.filter = {
        all: { isActive: isChecked, name: 'Все' },
        withoutpoint: { isActive: isChecked, name: 'Без пересадок' },
        onepoint: { isActive: isChecked, name: '1 пересадка' },
        twopoint: { isActive: isChecked, name: '2 пересадки' },
        threepoint: { isActive: isChecked, name: '3 пересадки' },
      });
    }

    this.setState((state) => {
      state.filter.all.isActive = false;
      return state.filter[id] = { isActive: isChecked, name };
    });
  }

  render() {
    return (
      <>
        <Header />
        <Section>
          <Filter filterPoints={this.filterPoints} filter={this.state.filter} />
          <Result>
            <Tabs tab={this.state.tab} handleClick={this.handleChangeTab} />
            <CardList tickets={filtredTicket(this.state)} />
          </Result>
        </Section>
      </>
    );
  }
}

export default App;

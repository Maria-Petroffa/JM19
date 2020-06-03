import React from "react";

import styled from 'styled-components';
import Card from './card.js';
import Filter from './filter.js';
import Header from './header.js';
import Tabs from './tabs.js';

import axios from 'axios';

const idPath = 'https://front-test.beta.aviasales.ru/search';
const ticketPath = (id) => `https://front-test.beta.aviasales.ru/tickets?searchId=${id}`;


// фон
const Section = styled.section`
margin-top: 40px;
margin-left: auto;
margin-right: auto;
width: 755px;

display: flex;
flex-wrap: nowrap;
justify-content: space-between;
`

const Result = styled.div`
width: 500px;
`

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
                withoutpoint: true,
                onepoint: false,
                twopoint: true,
                threepoint: false,
            },
        }
    }

    handleTab = (id) => {
        const { tab: { fast, cheap } } = this.state
        const isTrue = this.state.tab[id]

        if (isTrue) { return null; }
        this.setState({
            tab:
            {
                fast: !fast,
                cheap: !cheap,
            },
        })
    }

    componentDidMount() {
        axios.get(idPath)
            .then(function (response) {
                const id = response.data.searchId
                const requestPath = ticketPath(id)
                return requestPath;
            })
            .then((res) => {
                axios.get(res)
                    .then((val) => {
                        const tickets = val.data.tickets
                        this.setState({ tickets: tickets, })
                    })
            })

    }

    filtredTicket = () => {
        const {
            tab: { fast, cheap, },
            tickets,
            filter: { all, withoutpoint, onepoint, twopoint, threepoint, },
        } = this.state

        const ticketsArr = tickets

        const newArr = []
        if (withoutpoint) { newArr.push(0) }
        if (onepoint) { newArr.push(1) }
        if (twopoint) { newArr.push(2) }
        if (threepoint) { newArr.push(3) }

        // console.log(newArr)

        function compareNumeric(a, b) {
            return a.price - b.price;
        }

        const allFilter = ticketsArr
            .filter((el) => {
                const stops = el.segments[0].stops.length
                for (let i = 0; newArr.length > i; i += 1) {
                    if (newArr[i] === stops) {
                        return el;
                    }
                }
            })
            .sort(compareNumeric)
            .splice(0, 5)


        // console.log(allFilter)
        return allFilter;


        //   console.log(allFilter.sort(compareNumeric).splice(0, 5))
        // console.log(filterData())
    }

    render() {
        // this.filtredTicket()

        return (
            <>
                <Header />
                <Section>
                    <Filter point={this.state.filter} />
                    <Result>
                        <Tabs tab={this.state.tab} handleClick={this.handleTab} />
                        <Card tickets={this.filtredTicket()} />
                    </Result>
                </Section>
            </>
        )
    }
}

export default App;
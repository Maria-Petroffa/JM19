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
                withoutpoint: false,
                onepoint: false,
                twopoint: false,
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

        const newArr = [null, null, null, null]
        if (withoutpoint) { newArr[0] = 0 }
        if (onepoint) { newArr[1] = 1 }
        if (twopoint) { newArr[2] = 2 }
        if (threepoint) { newArr[3] = 3 }

        console.log(newArr)

        function compareCheap(a, b) {
            return a.price - b.price;
        }

        function compareFast(a, b) {
            const wayThereOne = a.segments[0].duration
            const wayBackOne = a.segments[1].duration
            const durationThereBackOne = wayThereOne + wayBackOne
            const wayThereTwo = b.segments[0].duration
            const wayBackTwo = b.segments[1].duration
            const durationThereBackTwo = wayThereTwo + wayBackTwo
            return durationThereBackOne - durationThereBackTwo;
        }

        const allFilterCheap = ticketsArr
            .filter((el) => {
                const stops = el.segments[0].stops.length
                // console.log('stops', stops)

                if (all === true) { return el; }
                if (stops === newArr[0] || stops === newArr[1] || stops === newArr[2] || stops === newArr[3]) {
                    return el;
                }
            })
            .sort(compareCheap)
            .splice(0, 5)

        const allFilterFast = ticketsArr
            .filter((el) => {
                const stops = el.segments[0].stops.length

                if (all) { return el; }
                if (stops === newArr[0] || stops === newArr[1] || stops === newArr[2] || stops === newArr[3]) {
                    return el;
                }
            })
            .sort(compareFast)
            .splice(0, 5)


        if (cheap) { return allFilterCheap }
        return allFilterFast;
    }

    filterPoints = (id, isChecked) => {
        const { filter: { all, withoutpoint, onepoint, twopoint, threepoint, } } = this.state
        if (id === 'all') {
            this.setState({
                filter: {
                    all: isChecked,
                    withoutpoint,
                    onepoint,
                    twopoint,
                    threepoint,
                }
            })
        }
        if (id === 'withoutpoint') {
            this.setState({
                filter: {
                    all,
                    withoutpoint: isChecked,
                    onepoint,
                    twopoint,
                    threepoint,
                }
            })
        }
        if (id === 'onepoint') {
            this.setState({
                filter: {
                    all,
                    withoutpoint,
                    onepoint: isChecked,
                    twopoint,
                    threepoint,
                }
            })
        }
        if (id === 'twopoint') {
            this.setState({
                filter: {
                    all,
                    withoutpoint,
                    onepoint,
                    twopoint: isChecked,
                    threepoint,
                }
            })
        }
        if (id === 'threepoint') {
            this.setState({
                filter: {
                    all,
                    withoutpoint,
                    onepoint,
                    twopoint,
                    threepoint: isChecked,
                }
            })
        }
    }

    render() {

        return (
            <>
                <Header />
                <Section>
                    <Filter filterPoints={this.filterPoints} />
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
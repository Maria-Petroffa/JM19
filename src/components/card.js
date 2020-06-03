import React from "react";

import styled from 'styled-components';

import { format, formatDistance, formatRelative, subDays, getTime, parse, parseISO, getMinutes, getHours } from 'date-fns'

const logoAvia = (name) => `//pics.avs.io/99/36/${name}.png`;





// карточки
const CardWrap = styled.div`
display: block;
margin-top: 20px;
background: #FFFFFF;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
border-radius: 5px;
width: 100%;
padding-top: 20px;
padding-bottom: 20px;
padding-left: 20px;
padding-right: 50px;

font-weight: 600;
`

const CardHead = styled.div`
display: flex;
justify-content: space-between;

font-weight: 600;
font-size: 24px;

color: #2196F3;
`

const Price = styled.div`
align-self: center;
`

const Logo = styled.img`

`

const CardData = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: nowrap;

margin-top: 20px;
`

const Way = styled.div`

`

const WayPath = styled.div`
height: 20px;
font-weight: 600;
font-size: 12px;
text-transform: uppercase;
color: #A0B0B9;

`

const WayTimes = styled.div`
height: 20px;
font-weight: 600;
font-size: 14px;
color: #4A4A4A;
`

const Total = styled.div`

`

const TotalHead = styled.div`
height: 20px;
font-weight: 600;
font-size: 12px;
text-transform: uppercase;
color: #A0B0B9;
`

const TotalTime = styled.div`
height: 20px;
font-weight: 600;
font-size: 14px;
color: #4A4A4A;
`

const Changes = styled.div`
margin-right: 30px;
`

const ChangesCount = styled.div`
height: 20px;
font-weight: 600;
font-size: 12px;
text-transform: uppercase;
color: #A0B0B9;
`

const ChangesCity = styled.div`
height: 20px;

font-weight: 600;
font-size: 14px;
color: #4A4A4A;
`

class Card extends React.Component {

    renderCart = (tickets) => {

        return tickets.map((el) => {
            const parsePrice = (price) => {
                const priceToString = price.toString()
                return `${priceToString.slice(0,2)} ${priceToString.slice(-3)}`
            }
            const origin = el.segments[0].origin
            const destination = el.segments[0].destination
            const parseTime = (data, time = 0) => {
                const totalData = parseISO(data)
                if (time === 0) {
                    const hour = getHours(totalData)
                    const min = getMinutes(totalData)

                    return `${hour}:${min}`
                }
                const TotalTime = getHours(totalData) * 60 + getMinutes(totalData) + time
                const hour = Math.trunc(TotalTime / 60)
                const min = TotalTime % 60

                return `${hour}:${min}`
            }

            const durationTotal = el.segments[0].duration;
            const durationHour = Math.trunc(durationTotal / 60)
            const durationMin = durationTotal % 60
            const departTime = parseTime(el.segments[0].date)
            const arriveTime = parseTime(el.segments[0].date, durationTotal);

            const stops = el.segments[0].stops
            const stopsCount = (stops) => {
                if (stops.length === 0) { return `без пересадок` }
                if (stops.length === 1) { return `1 пересадка` }

                return `${stops.length} пересадки`
            }
            const stopsPoint = (stops) => {
                if (stops.length === 0) { return null; }
                return stops.join(', ')
            }
            console.log('проверка 5 элементов ', el)
            // console.log(getMinutes(parseISO(departTime)))
            // console.log(getHours(parseISO(departTime)))


            return (
                <CardWrap>
                    <CardHead>
                        <Price>{`${parsePrice(el.price)} P`}</Price><Logo src={logoAvia(el.carrier)} alt="some logo" />
                    </CardHead>
                    <CardData>
                        <Way>
                            <WayPath>{`${origin} – ${destination}`}</WayPath>
                            <WayTimes>{`${departTime} – ${arriveTime}`}</WayTimes>
                        </Way>
                        <Total>
                            <TotalHead>В пути</TotalHead>
                            <TotalTime>{`${durationHour}ч ${durationMin}м`}</TotalTime>
                        </Total>
                        <Changes>
                            <ChangesCount>{stopsCount(stops)}</ChangesCount>
                            <ChangesCity>{stopsPoint(stops)}</ChangesCity>
                        </Changes>
                    </CardData>
                </CardWrap>)
        })

    }
    render() {
        const { tickets } = this.props
        if (tickets.length === 0) { return null }
        return this.renderCart(tickets);
    }
}

export default Card;
import React from "react";
import { uniqueId } from 'lodash';
import { logoAvia, parsePrice, flightWay, flightTime, durationWay, durationHead, stopsCount, stopsPoint } from './functions';
import { CardMain, CardMainHead, Price, Logo, LogoWrap, CardData, CardDataWrap, CardDataHeader, CardDataBody } from './style';

class Card extends React.Component {
    renderCardDataWrap = (wayFrom, wayBack, funcFirst, funcSecond) => {
        return (
            <CardDataWrap>
                <CardDataHeader>{funcFirst(wayFrom)}</CardDataHeader>
                <CardDataBody>{funcSecond(wayFrom)}</CardDataBody>
                <CardDataHeader>{funcFirst(wayBack)}</CardDataHeader>
                <CardDataBody>{funcSecond(wayBack)}</CardDataBody>
            </CardDataWrap>
        )
    }

    renderCart = (tickets) => {
        return tickets.map((element) => {
            const { segments, price, carrier } = element;
            return (
                <CardMain>
                    <CardMainHead>
                        <Price>{`${parsePrice(price)} P`}</Price>
                        <LogoWrap><Logo src={logoAvia(carrier)} alt="some logo" /></LogoWrap>
                    </CardMainHead>
                    <CardData>
                        {this.renderCardDataWrap(segments[0], segments[1], flightWay, flightTime)}
                        {this.renderCardDataWrap(segments[0], segments[1], durationHead, durationWay)}
                        {this.renderCardDataWrap(segments[0], segments[1], stopsCount, stopsPoint)}
                    </CardData>
                </CardMain>)
        })
    }

    render() {
        const { tickets } = this.props;
        if (tickets.length === 0) { return null }
        return this.renderCart(tickets);
    }
}

export default Card;
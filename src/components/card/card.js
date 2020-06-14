import React from 'react';
import {
  logoAvia, parsePrice, flightWay, flightTime, durationWay, durationHead, stopsCount, stopsPoint,
} from './helper';
import {
  CardData, CardDataWrap, CardDataHeader, CardDataBody,

  CardMain, CardMainHead, Price, Logo, LogoWrap,
} from './style';

import {uniqueId} from 'lodash';


class Card extends React.Component {
  renderCardDataWrap = (wayFrom, wayBack, header, body) => (
    <CardDataWrap>
      <CardDataHeader>{header(wayFrom)}</CardDataHeader>
      <CardDataBody>{body(wayFrom)}</CardDataBody>
      <CardDataHeader>{header(wayBack)}</CardDataHeader>
      <CardDataBody>{body(wayBack)}</CardDataBody>
    </CardDataWrap>
  )

  renderCart = (tickets) => tickets.map((element) => {
    const { segments, price, carrier } = element;
    return (
      <CardMain key={uniqueId()}>
        <CardMainHead>
          <Price>{`${parsePrice(price)} P`}</Price>
          <LogoWrap><Logo src={logoAvia(carrier)} alt="some logo" /></LogoWrap>
        </CardMainHead>
        <CardData>
          {this.renderCardDataWrap(segments[0], segments[1], flightWay, flightTime)}
          {this.renderCardDataWrap(segments[0], segments[1], durationHead, durationWay)}
          {this.renderCardDataWrap(segments[0], segments[1], stopsCount, stopsPoint)}
        </CardData>
      </CardMain>
    );
  })

  render() {
    const { tickets } = this.props;
    if (tickets.length === 0) { return null; }
    return this.renderCart(tickets);
  }
}

export default Card;

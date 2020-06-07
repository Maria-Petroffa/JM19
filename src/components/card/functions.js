import { parseISO, getMinutes, getHours } from 'date-fns';

export const logoAvia = (name) => `//pics.avs.io/99/36/${name}.png`; //

export const parsePrice = (price) => {
    const priceToString = price.toString();
    return `${priceToString.slice(0, 2)} ${priceToString.slice(-3)}`;
};

export const flightWay = (segments) => {
    const { origin, destination } = segments;
    return `${origin} – ${destination}`;
} //

const parseTimeNumber = (num) => {
    const numString = num.toString()
    if (numString.length === 1) {
        return `0${numString}`
    }
    return num;
}

const parseTime = (data, time = 0) => {
    const totalData = parseISO(data)
    if (time === 0) {
        const hour = parseTimeNumber(getHours(totalData))
        const min = parseTimeNumber(getMinutes(totalData))
        return `${hour}:${min}`
    }
    const CardDataBody = getHours(totalData) * 60 + getMinutes(totalData) + time
    const hour = parseTimeNumber((Math.trunc(CardDataBody / 60) % 24))
    const min = parseTimeNumber(CardDataBody % 60)
    return `${hour}:${min}`
}

export const flightTime = (segments) => {
    const { duration, date } = segments
    const departTime = parseTime(date)
    const arriveTime = parseTime(date, duration);
    return `${departTime} – ${arriveTime}`
} //

export const durationWay = (segments) => {
    const { duration } = segments
    const hour = parseTimeNumber(Math.trunc(duration / 60))
    const min = parseTimeNumber(duration % 60)
    return `${hour}ч ${min}м`;
}

export const durationHead = () => 'В пути';

export const stopsCount = (segments) => {
    const { stops } = segments
    if (stops.length === 0) { return `без пересадок` }
    if (stops.length === 1) { return `1 пересадка` }
    return `${stops.length} пересадки`
} //
export const stopsPoint = (segments) => {
    const { stops } = segments
    if (stops.length === 0) { return null; }
    return stops.join(', ')
} //
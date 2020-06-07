const compareCheap = (a, b) => a.price - b.price;

const compareFast = (a, b) => {
    const wayThereOne = a.segments[0].duration
    const wayBackOne = a.segments[1].duration
    const durationThereBackOne = wayThereOne + wayBackOne

    const wayThereTwo = b.segments[0].duration
    const wayBackTwo = b.segments[1].duration
    const durationThereBackTwo = wayThereTwo + wayBackTwo

    return durationThereBackOne - durationThereBackTwo;
}

export const filtredTicket = (state) => {
    const {
        tab: { cheap, },
        tickets,
        filter: { all, withoutpoint, onepoint, twopoint, threepoint, },
    } = state

    const ticketsArr = tickets

    const newArr = [null, null, null, null]
    if (withoutpoint) { newArr[0] = 0 }
    if (onepoint) { newArr[1] = 1 }
    if (twopoint) { newArr[2] = 2 }
    if (threepoint) { newArr[3] = 3 }

    const allFilterCheap = ticketsArr
        .filter((el) => {
            const stops = el.segments[0].stops.length

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
} //
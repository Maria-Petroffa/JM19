const compareCheap = (a, b) => a.price - b.price;

const compareFast = (a, b) => {
  const wayThereOne = a.segments[0].duration;
  const wayBackOne = a.segments[1].duration;
  const durationThereBackOne = wayThereOne + wayBackOne;

  const wayThereTwo = b.segments[0].duration;
  const wayBackTwo = b.segments[1].duration;
  const durationThereBackTwo = wayThereTwo + wayBackTwo;

  return durationThereBackOne - durationThereBackTwo;
};

const ticketsList = (tickets, newArr, cheap, all) => {
  const allIsActive = all.isActive;
  let ticketsArr;

  if (allIsActive === true) {
    ticketsArr = tickets;
  }

  if (allIsActive === false) {
    ticketsArr = tickets.filter((el) => {
      const stops = el.segments[0].stops.length;
      if (newArr.includes(stops)) { 
        return el; }      
    })
  }

  const sorted = cheap ? ticketsArr.sort(compareCheap) : ticketsArr.sort(compareFast);

  return sorted.splice(0, 5);

}

export const filtredTicket = (state) => {
  const {
    tab: { cheap },
    tickets,
    filter: {
      all, withoutpoint, onepoint, twopoint, threepoint,
    },
  } = state;

  const newArr = [];
  newArr[0] = withoutpoint.isActive ? 0 : null;
  newArr[1] = onepoint.isActive ? 1 : null;
  newArr[2] = twopoint.isActive ? 2 : null;
  newArr[3] = threepoint.isActive ? 3 : null;

  return ticketsList(tickets, newArr, cheap, all);
}; //

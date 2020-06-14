const mainPath = 'https://front-test.beta.aviasales.ru';


export const idPath = `${mainPath}/search`;
export const ticketPath = (id) => `${mainPath}/tickets?searchId=${id}`;
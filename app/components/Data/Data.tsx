const rawData = [
    { "id": 1, "price": 51, "date_time": "1718127475000" },
    { "id": 2, "price": 80, "date_time": "1719607067000" },
    { "id": 3, "price": 36, "date_time": "1717892803000" },
    { "id": 4, "price": 18, "date_time": "1719386749000" },
    { "id": 5, "price": 52, "date_time": "1719571305000" },
    { "id": 6, "price": 72, "date_time": "1719048000000" },
    { "id": 7, "price": 48, "date_time": "1719535244000" },
    { "id": 8, "price": 50, "date_time": "1718633501000" },
    { "id": 9, "price": 9, "date_time": "1717723158000" },
    { "id": 10, "price": 67, "date_time": "1719395478000" }
];

const getPrice = (value: number) => value * 100;
const getDate = (date: string) => new Date(date);

const data = rawData.map((d) => ({
    price: getPrice(d.price),
    date: getDate(d.date_time)
}));
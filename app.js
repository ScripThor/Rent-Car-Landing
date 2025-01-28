import express from 'express'
import cors from 'cors';
import cars from './api/cars-list.js';

const app = express()
const port = 5000

app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/api/cars', (req, res) => {
    res.json(cars);
});

app.listen(port, () => {
    console.log(`Сервер запущен. Порт: ${port}`)
})
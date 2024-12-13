const cars = [
    {
        model: 'Datsun On-Do AT',
        price: 'от 1 730 руб/cутки',
        carClass: 'Эконом',
        image: '/img/cars/datsun.jpg',
        seats_number: 5,
        doors_number: 4,
        transmission: 'AT',
    },
    {
        model: 'Geely Emgrand',
        carClass: 'Стандарт',
        image: '/img/cars/emgrand.jpg',
        seats_number: 5,
        doors_number: 4,
        transmission: 'AT',
        price: 'от 2 730 руб/cутки',
    },
    {
        model: 'Haval Jolion',
        carClass: 'Кроссовер',
        image: '/img/cars/jolion.jpg',
        seats_number: 5,
        doors_number: 4,
        transmission: 'AT',
        price: 'от 2 940 руб/cутки',
    },
    {
        model: 'Belgee X50',
        carClass: 'Кроссовер',
        image: '/img/cars/x50.jpg',
        seats_number: 5,
        doors_number: 4,
        transmission: 'AT',
        price: 'от 3 010 руб/cутки',
    },
    {
        model: 'Gac GS3',
        carClass: 'Кроссовер',
        image: '/img/cars/gs3.jpg',
        seats_number: 5,
        doors_number: 4,
        transmission: 'AT',
        price: 'от 3 120 руб/cутки',
    },
    {
        model: 'Haval H3',
        carClass: 'Кроссовер',
        image: '/img/cars/h3.jpg',
        seats_number: 5,
        doors_number: 4,
        transmission: 'AT',
        price: 'от 3 440 руб/cутки',
    },
    {
        model: 'Haval Dargo 4WD',
        carClass: 'Кроссовер',
        image: '/img/cars/dargo.jpg',
        seats_number: 5,
        doors_number: 4,
        transmission: 'AT',
        price: 'от 3 660 руб/cутки',
    },
    {
        model: 'Geely Atlas New 4 WD',
        carClass: 'Кроссовер',
        image: '/img/cars/atlas.jpg',
        seats_number: 5,
        doors_number: 4,
        transmission: 'AT',
        price: 'от 3 970 руб/cутки',
    },
    {
        model: 'Nissan X-Trail 2.5',
        carClass: 'Кроссовер',
        image: '/img/cars/xtrail.jpg',
        seats_number: 5,
        doors_number: 4,
        transmission: 'AT',
        price: 'от 4 160 руб/cутки',
    },
    {
        model: 'Toyota Camry AT XV70',
        carClass: 'Бизнес',
        image: '/img/cars/camry.jpg',
        seats_number: 5,
        doors_number: 4,
        transmission: 'AT',
        price: 'от 4 600 руб/cутки',
    },
    {
        model: 'Geely Preface Flagship',
        carClass: 'Бизнес',
        image: '/img/cars/preface.jpg',
        seats_number: 5,
        doors_number: 4,
        transmission: 'AT',
        price: 'от 4 350 руб/cутки',
    },
];

function displayCars() {
    const carList = document.getElementById('carList');

    carList.innerHTML = '';

    cars.forEach(car => {
        // Создание карточки для каждой машины
        const carDiv = document.createElement('div');
        carDiv.classList.add('car-card')

        // Создание изображения
        const carImage = document.createElement('img');
        carImage.src = car.image;
        carImage.alt = car.model;
        carImage.classList.add('car-image');

        // Создание заголовка модели машины
        const carModel = document.createElement('span');
        carModel.textContent = car.model;

        const carClass = document.createElement('span');
        carClass.textContent = `${car.carClass}`;

        // Создание описания машины (список)
        const carInfo = document.createElement('ul');

        // Создаем каждый пункт списка (li) и добавляем в carInfo
        const seatsItem = document.createElement('li');
        seatsItem.textContent = `Мест: ${car.seats_number}`;
        seatsItem.classList.add('seats_number');
        carInfo.appendChild(seatsItem);

        const doorsItem = document.createElement('li');
        doorsItem.textContent = `Дверей: ${car.doors_number}`;
        doorsItem.classList.add('doors_number');
        carInfo.appendChild(doorsItem);

        const transmissionItem = document.createElement('li');
        transmissionItem.textContent = `Трансмиссия: ${car.transmission}`;
        transmissionItem.classList.add('transmission');
        carInfo.appendChild(transmissionItem);

        // Создание цены
        const carPrice = document.createElement('p');
        carPrice.textContent = car.price;

        // Добавляем все элементы в карточку
        carDiv.appendChild(carModel);
        carDiv.appendChild(carClass);
        carDiv.appendChild(carImage);
        carDiv.appendChild(carInfo);
        carDiv.appendChild(carPrice);

        // Добавляем карточку в контейнер
        carList.appendChild(carDiv);
    })
}

displayCars();
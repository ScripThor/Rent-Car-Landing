const cars = [
    {
        model: 'Hyundai Solaris II R',
        price: 'от 1 730 руб',
        carClass: 'Седан',
        image: '/assets/img/cars/solaris.webp',
        seats_number: 5,
        doors_number: 4,
        transmission: 'AT',
    },
    {
        model: 'Volkswagen Polo VI',
        carClass: 'Седан',
        image: '/assets/img/cars/polo.webp',
        seats_number: 5,
        doors_number: 4,
        transmission: 'AT',
        price: 'от 2 730 руб',
    },
    {
        model: 'Geely Okavango',
        carClass: 'Кроссовер',
        image: '/assets/img/cars/okavango.webp',
        seats_number: 5,
        doors_number: 4,
        transmission: 'AT',
        price: 'от 2 970 руб',
    },
    {
        model: 'Renault Duster',
        carClass: 'Кроссовер',
        image: '/assets/img/cars/duster.webp',
        seats_number: 5,
        doors_number: 4,
        transmission: 'AT',
        price: 'от 2 970 руб',
    },
    {
        model: 'Lada Largus 7 мест MT',
        carClass: 'Универсал',
        image: '/assets/img/cars/largus.webp',
        seats_number: 7,
        doors_number: 4,
        transmission: 'МT',
        price: 'от 2 120 руб',
    },
    {
        model: 'Renault Kaptur',
        carClass: 'Кроссовер',
        image: '/assets/img/cars/kaptur.webp',
        seats_number: 5,
        doors_number: 4,
        transmission: 'AT',
        price: 'от 3 270 руб',
    },
    {
        model: 'Geely Emgrand',
        carClass: 'Седан',
        image: '/assets/img/cars/emgrand.webp',
        seats_number: 5,
        doors_number: 4,
        transmission: 'AT',
        price: 'от 2 960 руб',
    },
    {
        model: 'Hyundai Sonata',
        carClass: 'Седан',
        image: '/assets/img/cars/sonata.webp',
        seats_number: 5,
        doors_number: 4,
        transmission: 'AT',
        price: 'от 3 970 руб',
    },
    {
        model: 'BMW 320D (G20)',
        carClass: 'Седан',
        image: '/assets/img/cars/320.webp',
        seats_number: 5,
        doors_number: 4,
        transmission: 'AT',
        price: 'от 4 160 руб',
    },
    {
        model: 'BMW 520D (G30)',
        carClass: 'Бизнес',
        image: '/assets/img/cars/520.webp',
        seats_number: 5,
        doors_number: 4,
        transmission: 'AT',
        price: 'от 6 600 руб',
    },
    {
        model: 'Mercedes-Benz GLE Coupe',
        carClass: 'Премиум',
        image: '/assets/img/cars/gle.webp',
        seats_number: 5,
        doors_number: 4,
        transmission: 'AT',
        price: 'от 10 350 руб',
    },
];

function displayCars(filteredClass = null) {
    const carList = document.getElementById('carList');

    carList.innerHTML = '';

    cars.forEach(car => {
        // Создание карточки для каждой машины
        const carDiv = document.createElement('div');
        carDiv.classList.add('car-card')

        if (filteredClass && car.carClass !== filteredClass) {
            carDiv.classList.add('disabled'); // Добавляем класс disabled
        }

        // Создание изображения
        const carImage = document.createElement('img');
        carImage.src = car.image;
        carImage.alt = car.model;
        carImage.classList.add('car-image');

        // Создание заголовка модели машины
        const carModel = document.createElement('span');
        carModel.textContent = car.model;
        carModel.classList.add('car-name');

        const carClass = document.createElement('span');
        carClass.textContent = `${car.carClass}`;
        carClass.classList.add('car-class');

        // Создание описания машины (список)
        const carInfo = document.createElement('ul');
        carInfo.classList.add('car-info');

        // Создаем каждый пункт списка (li) и добавляем в carInfo
        const seatsItem = document.createElement('li');
        seatsItem.textContent = `${car.seats_number}`;
        seatsItem.classList.add('seats_number');
        carInfo.appendChild(seatsItem);

        const doorsItem = document.createElement('li');
        doorsItem.textContent = `${car.doors_number}`;
        doorsItem.classList.add('doors_number');
        carInfo.appendChild(doorsItem);

        const transmissionItem = document.createElement('li');
        transmissionItem.textContent = `${car.transmission}`;
        transmissionItem.classList.add('transmission');
        carInfo.appendChild(transmissionItem);

        const priceBlock = document.createElement('div');
        priceBlock.classList.add('price-block');

        // Создание цены
        const carPrice = document.createElement('span');
        carPrice.textContent = `${car.price}/cутки`;
        carPrice.classList.add('car-price');

        const priceButton = document.createElement('button');
        priceButton.textContent = `Забронировать`
        priceButton.classList.add('price-button');
        priceButton.setAttribute('onclick', 'openModal()');

        // Добавляем все элементы в карточку
        carDiv.appendChild(carModel);
        carDiv.appendChild(carClass);
        carDiv.appendChild(carImage);
        carDiv.appendChild(carInfo);
        carDiv.appendChild(priceBlock);
        priceBlock.appendChild(priceButton);
        priceBlock.appendChild(carPrice);

        // Добавляем карточку в контейнер
        carList.appendChild(carDiv);
    })

}

// Функция для фильтрации по категориям
function filterByClass(category) {
    displayCars(category || '');
}

// Получаем все кнопки и обрабатываем их
const categoryButtons = document.querySelectorAll('#sedans, #universals, #offroads, #all');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Убираем 'active' у всех кнопок
        categoryButtons.forEach(btn => btn.classList.remove('active'));

        // Добавляем 'active' текущей кнопке
        const parentDiv = button.tagName === 'DIV' ? button : null;
        if (parentDiv) parentDiv.classList.add('active');

        // Передаем категорию в filterByClass
        const category = button.dataset.category || ''; // Используем data-атрибуты для категорий
        filterByClass(category);
    });
});

displayCars();



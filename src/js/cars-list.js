const cars = [
    {
        model: 'Hyundai Solaris II R',
        price: 'от 1 730 руб',
        carClass: 'Седан',
        image: '/assets/img/cars/solaris.webp',
        seats_number: 5,
        doors_number: 4,
        transmission: 'AT',
        available: true
    },
    {
        model: 'Volkswagen Polo VI',
        carClass: 'Седан',
        image: '/assets/img/cars/polo.webp',
        seats_number: 5,
        doors_number: 4,
        transmission: 'AT',
        price: 'от 2 730 руб',
        available: true
    },
    {
        model: 'Geely Okavango',
        carClass: 'Кроссовер',
        image: '/assets/img/cars/okavango.webp',
        seats_number: 5,
        doors_number: 4,
        transmission: 'AT',
        price: 'от 2 970 руб',
        available: true
    },
    {
        model: 'Renault Duster',
        carClass: 'Кроссовер',
        image: '/assets/img/cars/duster.webp',
        seats_number: 5,
        doors_number: 4,
        transmission: 'AT',
        price: 'от 2 970 руб',
        available: true
    },
    {
        model: 'Lada Largus 7 мест MT',
        carClass: 'Универсал',
        image: '/assets/img/cars/largus.webp',
        seats_number: 7,
        doors_number: 4,
        transmission: 'МT',
        price: 'от 2 120 руб',
        available: true
    },
    {
        model: 'Renault Kaptur',
        carClass: 'Кроссовер',
        image: '/assets/img/cars/kaptur.webp',
        seats_number: 5,
        doors_number: 4,
        transmission: 'AT',
        price: 'от 3 270 руб',
        available: true
    },
    {
        model: 'Geely Emgrand',
        carClass: 'Седан',
        image: '/assets/img/cars/emgrand.webp',
        seats_number: 5,
        doors_number: 4,
        transmission: 'AT',
        price: 'от 2 960 руб',
        available: true
    },
    {
        model: 'Hyundai Sonata',
        carClass: 'Седан',
        image: '/assets/img/cars/sonata.webp',
        seats_number: 5,
        doors_number: 4,
        transmission: 'AT',
        price: 'от 3 970 руб',
        available: true
    },
    {
        model: 'BMW 320D (G20)',
        carClass: 'Седан',
        image: '/assets/img/cars/320.webp',
        seats_number: 5,
        doors_number: 4,
        transmission: 'AT',
        price: 'от 4 160 руб',
        available: true
    },
    {
        model: 'BMW 520D (G30)',
        carClass: 'Бизнес',
        image: '/assets/img/cars/520.webp',
        seats_number: 5,
        doors_number: 4,
        transmission: 'AT',
        price: 'от 6 600 руб',
        available: true
    },
    {
        model: 'Mercedes-Benz GLE Coupe',
        carClass: 'Премиум',
        image: '/assets/img/cars/gle.webp',
        seats_number: 5,
        doors_number: 4,
        transmission: 'AT',
        price: 'от 10 350 руб',
        available: true
    },
];

let filteredCars = cars;

function displayCars() {
    const carList = document.getElementById('carList');
    carList.innerHTML = '';

    filteredCars.forEach(car => {
        const carDiv = document.createElement('div');
        carDiv.classList.add('car-card');

        if (!car.available) {
            carDiv.classList.add('disabled'); // Если машина недоступна, добавляем класс
        }

        const carImage = document.createElement('img');
        carImage.src = car.image;
        carImage.alt = car.model;
        carImage.classList.add('car-image');

        const carModel = document.createElement('span');
        carModel.textContent = car.model;
        carModel.classList.add('car-name');

        const carClass = document.createElement('span');
        carClass.textContent = `${car.carClass}`;
        carClass.classList.add('car-class');

        const carInfo = document.createElement('ul');
        carInfo.classList.add('car-info');

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

        const carPrice = document.createElement('span');
        carPrice.textContent = `${car.price}/сутки`;
        carPrice.classList.add('car-price');

        const priceButton = document.createElement('button');
        priceButton.textContent = `Забронировать`;
        priceButton.classList.add('price-button');
        priceButton.setAttribute('onclick', 'openModal()');

        const formTopMessage = document.getElementById('feedbackForm-message');
        priceButton.addEventListener('click', () => {
            if (!dateStart.value || !dateEnd.value) {
                formTopMessage.innerHTML = `Уточните свободную дату у менеджера для бронирования <strong>${car.model}</strong>`;
                return;
            }
            formTopMessage.innerHTML = `Бронирование автомобиля <strong>${car.model}</strong> с <strong>${dateStart.value}</strong> по <strong>${dateEnd.value}</strong>`;
        });

        carDiv.appendChild(carModel);
        carDiv.appendChild(carClass);
        carDiv.appendChild(carImage);
        carDiv.appendChild(carInfo);
        carDiv.appendChild(priceBlock);
        priceBlock.appendChild(priceButton);
        priceBlock.appendChild(carPrice);

        carList.appendChild(carDiv);
    });
}





// При загрузке страницы сразу активируем фильтр "Все"
window.addEventListener('DOMContentLoaded', () => {
    categoryButtons.forEach(button => button.classList.remove('active')); // Убираем 'active' у всех кнопок
    const allButton = document.getElementById('all');
    allButton.classList.add('active'); // Добавляем 'active' кнопке "Все"

    // Вызываем фильтрацию для всех машин
    filterByClass('');
});

const categoryButtons = document.querySelectorAll('#sedans, #universals, #offroads, #all');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Убираем 'active' у всех кнопок
        categoryButtons.forEach(btn => btn.classList.remove('active'));

        // Добавляем 'active' текущей кнопке
        button.classList.add('active');

        // Передаем категорию в filterByClass
        const category = button.dataset.category || ''; // Используем data-атрибуты для категорий
        filterByClass(category);
    });
});

function filterByClass(category) {
    // Фильтрация машин по категории
    filteredCars = cars.filter(car => {
        if (category) {
            return car.carClass.toLowerCase() === category.toLowerCase();
        }
        return true; // Если категория не указана, показываем все машины
    });

    // Обновляем отображение
    displayCars();
}

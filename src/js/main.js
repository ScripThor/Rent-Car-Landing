import '/components/header.js';
import '/components/mainForm.js';
import '/components/cars.js';
import '/components/conditions.js';
import '/components/choose.js';
import '/components/faq.js';
import '/components/footer.js';

// Управление датами при заполнении
const dateStart = document.getElementById('dateStart');
const dateEnd = document.getElementById('dateEnd');

const availableCars = document.getElementById('availableCars');
const searchBtn = document.getElementById('searchBtn');
const formBottomMessage = document.querySelector('.banner-form__bottom');
const carsSection = document.querySelector('.title');

const todayDate = new Date().toISOString().split('T')[0];
dateStart.min = todayDate;

function updateDateEnd() {
    dateEnd.min = dateStart.value;
    if (dateStart.value) {
        const startDate = new Date(dateStart.value);
        startDate.setDate(startDate.getDate() + 14);
        dateEnd.max = startDate.toISOString().split('T')[0];
    }
    if (dateEnd.value >= dateEnd.max) {
        dateEnd.value = dateEnd.max;
    }
    if (new Date(dateStart.value) > new Date(dateEnd.value)) {
        dateEnd.value = dateStart.value;
    }
}

dateStart.addEventListener('input', updateDateEnd);
dateEnd.addEventListener('input', updateDateEnd);

function getAvailableCars() {
    return cars.filter(car => car.available);
}

function updateCarAvailability() {
    cars.forEach(car => {
        car.available = Math.random() > 0.5; // С вероятностью 50% машина становится недоступной
    });
}

document.querySelectorAll('.banner-form__input').forEach(inputWrapper => {
    inputWrapper.addEventListener('click', event => {
        // Найти инпут внутри текущего блока
        const dateInput = inputWrapper.querySelector('input[type="date"]');
        if (dateInput) {
            event.preventDefault(); // Предотвращаем поведение вложенных элементов
            dateInput.showPicker(); // Открываем календарь
        }
    });
});




// Анимация "Поиск..."
function showLoadingMessage() {
    let dots = 0;
    const maxDots = 3;
    const interval = 500; // Интервал обновления (в миллисекундах)

    return new Promise((resolve) => {
        const intervalId = setInterval(() => {
            const dotsString = '.'.repeat(dots);
            formBottomMessage.textContent = `Поиск${dotsString}`;
            dots = (dots + 1) % (maxDots + 1);
        }, interval);

        // Завершаем анимацию через 2 секунды
        setTimeout(() => {
            clearInterval(intervalId);
            resolve();
        }, 2000);
    });
}

// Плавная прокрутка к элементу
function smoothScrollTo(element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

searchBtn.addEventListener('click', async () => {
    if (!dateStart.value || !dateEnd.value) {
        formBottomMessage.textContent = `Пожалуйста, укажите даты начала и окончания аренды`;
        return;
    }

    formBottomMessage.textContent = '';
    await showLoadingMessage();

    // Обновляем доступность машин
    updateCarAvailability();

    // Применяем фильтрацию доступных машин
    filteredCars = getAvailableCars(); // Фильтруем доступные машины
    displayCars(); // Обновляем отображение машин
    formBottomMessage.textContent = '';
    availableCars.innerHTML = `Доступные автомобили с <strong style="color:#3889c4">${dateStart.value}</strong> по <strong style="color:#3889c4">${dateEnd.value}</strong>. Найдено <strong>${getAvailableCars().length}</strong> доступных автомобиля(ей)`;
    smoothScrollTo(carsSection);
});

// FAQ
let question = document.querySelectorAll(".faq-block__question");

question.forEach(question => {
    question.addEventListener("click", event => {
        const active = document.querySelector(".faq-block__question.active");
        if (active && active !== question) {
            active.classList.toggle("active");
            active.nextElementSibling.style.maxHeight = 0;
        }
        question.classList.toggle("active");
        const answer = question.nextElementSibling;
        if (question.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = 0;
        }
    });
});

// Фильтры машин

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
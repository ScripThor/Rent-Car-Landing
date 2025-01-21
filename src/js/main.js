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
}

dateStart.addEventListener('input', updateDateEnd);
dateEnd.addEventListener('input', updateDateEnd);

function getAvailableCars() {
    availableCars.textContent = `Доступные автомобили с ${dateStart.value} по ${dateEnd.value}`;
}

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

// Обработка кнопки "Поиск"
searchBtn.addEventListener('click', async () => {
    if (!dateStart.value || !dateEnd.value) {
        formBottomMessage.textContent = `Пожалуйста, укажите даты начала и окончания аренды`;
        return;
    }

    // Убираем предыдущее сообщение
    formBottomMessage.textContent = '';

    // Запускаем анимацию "Поиск..."
    await showLoadingMessage();

    // Обновляем доступные автомобили
    getAvailableCars();

    formBottomMessage.textContent = '';

    // Прокручиваем к блоку с автомобилями
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
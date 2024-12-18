const dateStart = document.getElementById('dateStart');
const dateEnd = document.getElementById('dateEnd');

const availableCars = document.getElementById('availableCars');
const searchBtn = document.getElementById('searchBtn');

const todayDate = new Date().toISOString().split('T')[0];
dateStart.min = todayDate;

function updateDateEnd() {
    dateEnd.min = dateStart.value;
    if (dateStart.value) {
        const startDate = new Date(dateStart.value);
        startDate.setDate(startDate.getDate() + 14);

        dateEnd.max = startDate.toISOString().split('T')[0];
    }
// дом контент лоадед
//     делегирование событий

    if (dateEnd.value >= dateEnd.max) {
        dateEnd.value = dateEnd.max
    }
}

function getAvailableCars() {
    availableCars.textContent = `Доступные автомобили с ${dateStart.value} по ${dateEnd.value}`;
}


dateStart.addEventListener('input', updateDateEnd);
dateEnd.addEventListener('input', updateDateEnd);
searchBtn.addEventListener('click', getAvailableCars())
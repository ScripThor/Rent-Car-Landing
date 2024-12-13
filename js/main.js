const dateStart = document.getElementById('dateStart');
const dateEnd = document.getElementById('dateEnd');



const todayDate = new Date().toISOString().split('T')[0];
dateStart.min = todayDate;

//
function updateDateEnd() {
    dateEnd.min = dateStart.value;

    if (dateStart.value) {
        const startDate = new Date(dateStart.value);
        startDate.setDate(startDate.getDate() + 14);

        dateEnd.max = startDate.toISOString().split('T')[0];
    }

    if (dateEnd.value >= dateEnd.max) {
        dateEnd.value = dateEnd.max
    }
}

dateStart.addEventListener('input', updateDateEnd);
dateEnd.addEventListener('input', updateDateEnd);





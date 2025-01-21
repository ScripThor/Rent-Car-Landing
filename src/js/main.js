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

// FAQ

let question = document.querySelectorAll(".faq-block__question");

question.forEach(question => {
    question.addEventListener("click", event => {
        console.log('HUI')
        const active = document.querySelector(".faq-block__question.active");
        if(active && active !== question ) {
            active.classList.toggle("active");
            active.nextElementSibling.style.maxHeight = 0;
        }
        question.classList.toggle("active");
        const answer = question.nextElementSibling;
        if(question.classList.contains("active")){
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = 0;
        }
    })
})

const modal = document.getElementsByClassName('modal')[0]
// Открытие модального окна с добавлением класса "show"
const openModal = () => {
    modal.classList.add('show');
};

// Закрытие модального окна с удалением класса "show"
const closeModal = () => {
    modal.classList.remove('show');
};

const formWindow = document.getElementById('feedbackForm');
let success = document.getElementById('feedbackInfo');


formWindow.addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let tel = document.getElementById('tel').value;
    success.classList.toggle('hidden')
    success.textContent = `Спасибо, ${name}! Скоро с вами свяжется менеджер`

    this.reset();
});

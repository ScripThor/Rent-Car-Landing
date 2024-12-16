const modal = document.getElementsByClassName('modal')[0]

const openModal = () => {
    modal.classList.add('show');
};

const closeModal = () => {
    modal.classList.remove('show');
};

const formWindow = document.getElementById('feedbackForm');
let success = document.getElementById('feedbackInfo');

formWindow.addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;

    this.reset();

    closeModal()

    showFeedbackInfo()

    function showFeedbackInfo() {
        success.textContent = `Спасибо, ${name}! Скоро с вами свяжется менеджер`
        success.classList.toggle('hidden')
        success.classList.remove('hidden');
        success.classList.add('visible');

        setTimeout(() => {
            success.classList.remove('visible');
            success.classList.add('hidden');
        }, 5000);
    }
});


const modal = document.getElementsByClassName('modal')[0]

window.openModal = function openModal() {
  modal.classList.add('show')
}

window.closeModal = function closeModal() {
  modal.classList.remove('show')
}

const formWindow = document.getElementById('feedbackForm')
const success = document.getElementById('feedbackInfo')

formWindow.addEventListener('submit', function (event) {
  event.preventDefault()

  let name = document.getElementById('name').value

  this.reset()

  closeModal()

  showFeedbackInfo()

  function showFeedbackInfo() {
    success.textContent = `Спасибо, ${name}! Скоро с вами свяжется менеджер`
    success.classList.toggle('hidden')
    success.classList.remove('hidden')
    success.classList.add('visible')

    setTimeout(() => {
      success.classList.remove('visible')
      success.classList.add('hidden')
    }, 5000)
  }
})

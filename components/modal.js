class ModalWindow extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="modal">
          <div class="modal-content">
            <form id="feedbackForm">
              <div class="feedbackForm-message" id="feedbackForm-message"></div>
              <label class="modal-label" for="name">Имя:</label>
              <input class="modal-input" type="text" id="name" name="name" required>
              <label class="modal-label" for="tel">Телефон:</label>
              <input class="modal-input" type="tel" id="tel" name="tel" required>
              <label class="modal-label" for="message">Комментарий:</label>
              <textarea id="message" name="message" required></textarea>
              <button type="submit">Отправить</button>
            </form>
            <span onclick="closeModal();" class="modal-close">&times;</span>
          </div>
        </div>
        <div id="feedbackInfo" class="feedback-info hidden"></div>
    `
  }
}

customElements.define('modal-window', ModalWindow)

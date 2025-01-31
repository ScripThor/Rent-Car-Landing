
class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <header class="header">
        <div class="header__container">
          <div class="header-social">
            <a target="_blank" href="https://vk.com/" rel="nofollow noopener noreferrer">
              <img
                      class="header-social__icon"
                      src="/assets/img/social/vk.png"
                      alt="Мы в VK"
              />
            </a>
            <a target="_blank" href="https://t.me/DreamCarStory" rel="nofollow noopener noreferrer">
              <img
                      class="header-social__icon"
                      src="/assets/img/social/tg.png"
                      alt="Мы в TG"
              />
            </a>
          </div>
          <div class="header-navigation">
            <div class="header-navigation__left">
              <nav class="header-navigation__menu">
                <ul>
                  <li><a href="#ourCars">Наши автомобили</a></li>
                  <li><a href="#conditions">Условия аренды</a></li>
                </ul>
              </nav>
            </div>
            <div class="header-navigation__center">
              <a href="/"
              ><img
                      class="header-navigation__logo"
                      src="/assets/img/logo.png"
                      alt="Логотип компании"
              />
              </a>
            </div>
            <div class="header-navigation__right">
              <nav class="header-navigation__menu">
                <ul>
                  <li><a href="#choose">Почему выбирают нас</a></li>
                  <li><a href="#faq">FAQ</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="header-contacts">
            <a class="header-contacts__link" href="tel:79111111111"
            >+7 (911) 111-11-11</a
            >
            <span class="header-contacts__callback" id="callback"
            >Заказать обратный звонок</span
            >
          </div>
        </div>
      </header>
    `;

        const callbackButton = this.querySelector('#callback');
        callbackButton.addEventListener('click', () => {
            openModal();
        });
    }
}

customElements.define('header-component', HeaderComponent);
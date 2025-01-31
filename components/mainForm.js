class MainFormComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="banner-info" id="banner">
        <div class="banner-header">
          <h1 class="banner-header__title">
            Аренда автомобилей по лучшей цене
          </h1>
          <span class="banner-header__description"
          >Ваш отдых начинается с правильного выбора</span>
        </div>
        <div class="banner-form">
          <div class="banner-form__top">
            <div class="banner-form__input">
              <div class="banner-form__icon">
                <img src="/assets/img/icons/location.webp" alt="" />
              </div>
              <div class="banner-form__text">
                <label class="banner-form__label">Откуда забрать</label>
                <select
                        type="text"
                        aria-label="Pick up &amp; Return location"
                        autocomplete="off"
                        data-test-id=""
                        class="banner-form__content"
                >
                  <option  selected>Выберите место получения</option>
                  <option>Аэропорт</option>
                  <option>Ж/Д вокзал</option>
                  <option>Пункт проката</option>
                </select>
              </div>
            </div>
            <div class="banner-form__input">
              <div class="banner-form__icon">
                <img src="/assets/img/icons/calendar.webp" alt="" />
              </div>
              <div class="banner-form__text">
                <label class="banner-form__label">Дата начала аренды</label>
                <input
                        type="date"
                        id="dateStart"
                        value=""
                        class="banner-form__content"
                />
              </div>
            </div>
            <div class="banner-form__input">
              <div class="banner-form__icon">
                <img src="/assets/img/icons/calendar.webp" alt="" />
              </div>
              <div class="banner-form__text">
                <label class="banner-form__label">Дата возвращения</label>
                <input
                        type="date"
                        placeholder="Выберите дату"
                        id="dateEnd"
                        class="banner-form__content"
                />
              </div>
            </div>
            <button class="btn-green" id="searchBtn">Поиск</button>
          </div>
          <div class="banner-form__bottom"></div>
        </div>
      </div>
    `
  }
}

customElements.define('main-form-component', MainFormComponent)

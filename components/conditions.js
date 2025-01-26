class ConditionsComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<section class="conditions ct-container">
    <h2 class="title">Условия аренды</h2>
    <p class="description">Арендуя автомобиль в «N-прокат», Вы должны следовать правилам компании:</p>
    <div class="conditions-list">
        <div class="conditions-list__item">
            <img class="conditions-list__item-icon" src="/assets/img/icons/condition1.svg">
            <span class="conditions-list__item-description">Водительский стаж арендатора от 2-х лет</span>
        </div>
        <div class="conditions-list__item">
            <img class="conditions-list__item-icon" src="/assets/img/icons/condition2.svg">
            <span class="conditions-list__item-description">Наличие и регион регистрации значения не имеют</span>
        </div>
        <div class="conditions-list__item">
            <img class="conditions-list__item-icon" src="/assets/img/icons/condition3.svg">
            <span class="conditions-list__item-description">Минимальный срок аренды автомобиля - 24 часа</span>
        </div>
        <div class="conditions-list__item">
            <img class="conditions-list__item-icon" src="/assets/img/icons/condition4.svg">
            <span class="conditions-list__item-description">Автомобиль в прокат выдается чистым, при сдаче грязного автомобиля оплачивается мойка - 1000 руб.</span>
        </div>
        <div class="conditions-list__item">
            <img class="conditions-list__item-icon" src="/assets/img/icons/condition5.svg">
            <span class="conditions-list__item-description">Уровень топлива при сдаче автомобиля должен быть не меньше, чем при выдаче</span>
        </div>
        <div class="conditions-list__item">
            <img class="conditions-list__item-icon" src="/assets/img/icons/condition6.svg">
            <span class="conditions-list__item-description">Территории использования: расстояние не превышающее 1000 км от места выдачи, без выезда за пределы РФ</span>
        </div>
        <div class="conditions-list__item">
            <img class="conditions-list__item-icon" src="/assets/img/icons/condition7.svg">
            <span class="conditions-list__item-description">Cдача и выдача авто для аренды ежедневно с 9 до 19 часов. Сдача/выдача в нерабочее время + 800 руб.</span>
        </div>
        <div class="conditions-list__item">
            <img class="conditions-list__item-icon" src="/assets/img/icons/condition8.svg">
            <span class="conditions-list__item-description">Стоимость доставки от 800 до 3000 руб.</span>
        </div>
        <div class="conditions-list__item">
            <img class="conditions-list__item-icon" src="/assets/img/icons/condition9.svg">
            <span class="conditions-list__item-description">Никаких скрытых условий и звездочек, без залога и лимита пробега</span>
        </div>
    </div>
</section>
    `;
    }
}

customElements.define('conditions-component', ConditionsComponent);
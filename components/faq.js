
class FaqComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <section class="faq ct-container">
      <div class="faq-info">
        <h2>Часто задаваемые вопросы</h2>
        <div class="faq-blocks">
          <div class="faq-block">
            <span class="faq-block__question">Существует ли возможность получения машины в день обращения без предварительного заказа?
            </span>
            <div class="faq-block__answer">
                    <p>Транспортное средство может быть выдано в день обращения. Но
                    предварительное бронирование позволяет гарантированно
                    получить машину оптимальной комплектации в необходимый день
                    и быстрее оформить документы.</p>
            </div>
          </div>
          <div class="faq-block">
            <span class="faq-block__question">Какой залог за автомобиль?
            </span>
            <div class="faq-block__answer"><p>Для поездок по городу и пригороду залог не требуется. При междугородних поездках размер залога устанавливается индивидуально и зависит от дальности поездки.</p>
            </div>
          </div>
          <div class="faq-block">
            <span class="faq-block__question">Есть ли ограничения по пробегу?</span>
            <div class="faq-block__answer"><p>Лимит пробега – 200 км/сутки (общий лимит на весь срок аренды), превышение лимита - 8 руб./км.</p>
            </div>
          </div>
          <div class="faq-block">
            <span class="faq-block__question">Как забронировать автомобиль?</span>
            <div class="faq-block__answer">
              <p>Для того, чтобы забронировать, автомобиль, можете отправить форму онлайн бронирования с нашего сайта, или позвонить по номеру 8 (911) 111-11-11, чтобы забронировать по телефону.</p>
            </div>
          </div>
          <div class="faq-block">
            <span class="faq-block__question">Нужна ли прописка чтобы арендовать авто?</span>
            <div class="faq-block__answer">
              <p>Мы рады предоставить наши автомобили как гражданам РФ, так и иностранцам, никаких ограничений по гражданству нет. Прописка для аренды не нужна.</p>
            </div>
          </div>
          <div class="faq-block">
            <span class="faq-block__question">Как быстро я могу получить автомобиль в аренду?</span>
            <div class="faq-block__answer">
              <p>Если проверка документов уже пройдена, то этап выдачи автомобиля займет порядка 10-15 минут.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="faq-help">
        <h2 class="faq-help__title">Нужна помощь?</h2>
        <div class="help-block">
          <div class="help-block__title">По любым вопросам</div>
          <div class="help-block__info">
            <img src="/assets/img/icons/location.webp" alt="" />
            <a href="mailto:test@mail.ru">info@mail.ru</a>
          </div>
          <div class="help-block__info">
            <img src="/assets/img/icons/location.webp" alt="" />
            <a href="/public">Задать вопрос консультанту</a>
          </div>
        </div>
        <div class="help-block">
          <div class="help-block__title">Оперативная помощь</div>
          <div class="help-block__description">
            Круглосуточно по любым вопросам
          </div>
          <div class="help-block__tel">
            <a href="tel:79111111111">8 (800) 111-11-11</a>
            <span>Бесплатно для звонков из РФ</span>
          </div>
          <div class="help-block__tel">
            <a href="tel:79111111111">+7 (911) 111-11-11</a>
            <span>Для звонков из-за рубежа, платно</span>
          </div>
        </div>
      </div>
    </section>
    `;
    }
}

customElements.define('faq-component', FaqComponent);
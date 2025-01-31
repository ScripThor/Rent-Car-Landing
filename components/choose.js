class ChooseComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<section class="choose ct-container" id="choose"> 
    <div class="choose__block">
        <div class="choose__title">
            <h2>Почему <br><span>выбирают нас</span></h2>
        </div>
        <div class="choose__content">
            Вы можете арендовать каршеринг — это будет дешевле.<br>
            Можете взять такси — это будет проще.<br>
            Но только у нас <span>вы получите впечатления</span>, которые запомнятся надолго.<br>
            Мы не сдаём машины. <span>Мы дарим эмоции!</span>
        </div>
    </div>
    <img class='choose__img' src="/assets/img/whyus.png" alt="">
</section>
    `
  }
}

customElements.define('choose-component', ChooseComponent)

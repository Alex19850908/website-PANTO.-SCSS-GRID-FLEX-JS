const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

// Клик по кнопкам с подсказками

for (let btn of infoBtns) {
    btn.addEventListener('click', function (e){
        e.stopPropagation();

        // Скрыть все  hints
        for (let hint of infoHints) {
            hint.classList.add('none');
        }

        // Показать текущую hint
        this.parentNode.querySelector('.info-hint').classList.toggle('none');
    });
}



// Закрываем подсказки при клику по всей странице

document.addEventListener('click', function () {
    for (let hint of infoHints) {
        hint.classList.add('none');
    }
})

// Запрещаем всплытие события клика при клике на подсказки

for (let hint of infoHints) {
    hint.addEventListener('click', (e) => e.stopPropagation());
}


//        SWIPER    SLIDER

const swiper = new Swiper('.swiper', {
    loop: true,
    freeMode: true,

    slidesPerView: 1,
    spaceBetween: 42,

    breakpoints: {
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        920: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1230: {
          slidesPerView: 4,
          spaceBetween: 42,
        },
        1440: {
            slidesPerView: 4,
            spaceBetween: 50,
            },
        },
  
    navigation: {
      prevEl: '#sliderNext',
      nextEl: '#sliderPrev',
    },
});

//            TABS
const tabsBtns = document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]');

for (let btn of tabsBtns) {
    btn.addEventListener('click', function() {

        // Удаляем активные классы у всех кнопок
        for (let btn of tabsBtns) {
            btn.classList.remove('tab-controls__btn--active');
        }

        // Добавляем активный класс к текущей кнопке
        this.classList.add('tab-controls__btn--active');

        // Получаем значения категорий товаров, которые нужно включить
        console.log(this.dataset.tab); 

        // Отобразить нужные товары и скрыть ненужные
        for(let product of tabsProducts) {

            //Проверка на отображение всех товаров
            if(this.dataset.tab === 'all') {
                product.classList.remove('none');
            } else {
                if(product.dataset.tabValue === this.dataset.tab) {
                    product.classList.remove('none');
                }else{
                    product.classList.add('none');
                }
            }
            
        }
        // Update Swiper
        swiper.update();
    })
}

// Mobile-nav
const mobileNavOpenBtn = document.querySelector('#mobile-nav-open-btn');
const mobileNavCloseBtn = document.querySelector('#mobile-nav-close-btn');
const mobileNav = document.querySelector('#mobile-nav');

mobileNavOpenBtn.onclick = function (){
    mobileNav.classList.add('mobile-nav-wrapper--open');
}

mobileNavCloseBtn.onclick = function (){
    mobileNav.classList.remove('mobile-nav-wrapper--open');
};



        
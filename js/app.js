new Swiper('.services__slider',{
    navigation: {
        nextEl: '.services__right',
        prevEl: '.services__left ',
    },
     slidesPerView:2,
     loop:true,
     spaceBetween:20,
     speed:1000,
     centeredSlide: true,
    
     
   
    pagination: {
        el: '.services__pagin',
       
        type: 'bullets',
    }, 
   

    breakpoints: {
        0 : {
            lidesPerView:1,
        },
        360: {
            slidesPerView:1,
            
        },
        480: {
            slidesPerView:2,
            
        },
        768: {
            slidesPerView:2,
        }
        

        
       

    },

});


// =============================================================================================================//
// Бургер-меню
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.header__menu ');
const body = document.querySelector ('body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        iconMenu.classList.toggle('_active');   
        menuBody.classList.toggle('_active');
        body.classList.toggle('lock');
    });
}

// =============================================================================================================//

const triggerAkardion = document.querySelectorAll('.menu__item');
    triggerAkardion.forEach(el=>{        
        el.addEventListener('click', (e) =>{              
            const self =  e.currentTarget;           
                const contenAcardion = self.querySelector('.ulList'); 
                contenAcardion.classList.toggle('activee');         
           
                        
            
        })
    
    });
    const triggerSearch = document.querySelector('.header__Img');
    const containeSearch = document.querySelector('.header__searchInp');
    const closee = document.querySelector('.header__close');
    const imgSearch = document.querySelector('.header__Img');
            triggerSearch.addEventListener('click', (e) =>{
                containeSearch.classList.add('show');
                containeSearch.classList.remove('hide');
                closee.style.display = 'block';
                closee.style.zIndex = '15';
                imgSearch.style.display= 'none';
            });
            closee.addEventListener('click', (e) =>{
                containeSearch.classList.add('hide');
                containeSearch.classList.remove('show');
                closee.style.display = 'none';
                imgSearch.style.display= 'block';
            })


//======

const tabs = document.querySelectorAll('.replacement__accardion');       

      tabs.forEach(el => {
        el.addEventListener('click', (e) =>{
            const self = e.currentTarget;
            const control = self.querySelector('.replacement__block');
            const content = self.querySelector('.replacement__item');
            const tabsBtn = self.querySelector('.replacement__btn');
            content.classList.toggle('show');
            tabsBtn.classList.toggle('active');
        })
      });

// const accardion = document.querySelectorAll('.answers__accardion');
// accardion.forEach(el =>{
//     el.addEventListener('click' ,(e) =>{
//         const self = e.currentTarget;
//         const control = self.querySelector('.answers__block');
//         const content = self.querySelector('.answers__content');
//         const tabsBtn = self.querySelector('.answers__click');
//         content.classList.toggle('show2');
//         tabsBtn.classList.toggle('active');
       
//     })
// })

   //==============================

 const accardionContainer = document.querySelector('.answers__accardion'),
        accardionBlock = document.querySelectorAll('.answers__block'),
        accardionContent = document.querySelectorAll('.answers__content'),
        accardionIcon = document.querySelectorAll('.answers__click'),
        acardionTitle = document.querySelectorAll('.answers__subtitle');
   
    function closeAccardion (){
        accardionContent.forEach(item =>{
            item.classList.remove('show2');
        });
        accardionIcon.forEach(item =>{
            item.classList.remove('active');
        });
    }
    function openAccardion (i = 0){
       accardionContent[i].classList.toggle('show2');
       accardionIcon[i].classList.toggle('active');       
        
    }
    
    
    accardionContainer.addEventListener('click', (event) =>{
        const target = event.target;
        if(target.classList.contains('answers__block') || target.classList.contains('answers__click') ){
            accardionBlock.forEach((item, i)=>{
                if(target == item ){
                    closeAccardion ();
                    openAccardion (i);
                }            
                
            })
            accardionIcon.forEach((item, i)=>{
                if(target == item ){
                    closeAccardion ();
                    openAccardion (i);
                }            
                
            })
            
          
        }
    });
    //========================= показать еще ==============//

    const showBtn = document.querySelector('.footer__showBtn'),
          showContent = document.querySelectorAll('.footer__mobileList2');

   showBtn.addEventListener('click' , (e) =>{
    // Преобразовываем в массив для удобства работы
    const contentArray = Array.from(showContent);
    contentArray.forEach((item, index) => {  
        // Проверяем, является ли элемент одним из последних двух 
        if(index >= contentArray.length - 2)  {
            // Если у элемента есть класс "hide", удаляем его, делая элемент видимым
            if(item.classList.contains('hide')){
                item.classList.remove('hide'); 
            }
            // Если у элемента нет класса "hide", добавляем его, делая элемент скрытым
            else{
                item.classList.add('hide');
            }
        }  
            
        
    })
   })
// =============================================================================================================//
// Анимация при скролле
window.addEventListener('load', ()=>{
   
    
    const animItems = document.querySelectorAll('._anim-items');

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('active2');
                } else {
                    if (!animItem.classList.contains('_anim-no-hide')) {
                        animItem.classList.remove('active2');
                    }
                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {
                top: rect.top + scrollTop, left: rect.left + scrollLeft
            }
        }
    }

    if (animItems.length > 0) {
        setTimeout(() => {
                animOnScroll();
            }, 500);
    }
})

// =============================================================================================================//



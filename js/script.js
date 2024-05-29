let condition = true;
let links = document.querySelectorAll(".scroll");

//бургер меню---------------------------------------------
$('.menu_small_icon').click(function(){
    clickable();
});

$('.menu_small_item').click(function(){
    clickable();
})

function clickable(){
    if(condition){
        anime({
            targets: '.menu-small',
            translateX: ['-100%', '0'],
            easing: 'easeInOutQuad',
            direction: 'alternate',
            duration: 500,
            loop: false
        });
        condition = false;
        $('body').css("overflow", "hidden");
    }
    else{
        anime({
            targets: '.menu-small',
            translateX: [ '0', '-100%'],
            easing: 'easeInOutQuad',
            direction: 'alternate',
            duration: 500,
            loop: false
        });
        condition = true;
        $('body').css("overflow", "scroll");
    }
}
// карта ----------------------------------------
let map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([76.89286761071541, 43.29944511335438 ]),
        zoom:20
    })
});

//плавный скролл
links.forEach(function(element){
    element.addEventListener('click', function(event){
        event.preventDefault();
        let targetID = element.getAttribute('href')
        console.log(targetID)
        document.querySelector(targetID).scrollIntoView({
            behavior:'smooth',
            block: 'center'
        })
    })
})
//свайпер ------------------------------

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});
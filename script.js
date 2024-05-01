let condition = true;

$('.menu_small_icon').click(function(){
    if(condition){
        anime({
            targets: '.menu-small',
            translateX: ['-100%', '0'],
            easing: 'easeInOutQuad',
            direction: 'alternate',
            duration: 1000,
            loop: false
        });
        condition = false;
    }
    else{
        anime({
            targets: '.menu-small',
            translateX: [ '0', '-100%'],
            easing: 'easeInOutQuad',
            direction: 'alternate',
            duration: 1000,
            loop: false
        });
        condition = true;
    }
});





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
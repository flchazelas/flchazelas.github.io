$(document).ready(function(){
    $("#carouselProjet").carousel({interval: 2000,pause: "hover"});

    //Indicateurs bas
    $(".item1").click(function(){
        $('#carouselProjet').carousel(0);
    });
    $(".item2").click(function(){
        $('#carouselProjet').carousel(1);
    });
    $(".item3").click(function(){
        $('#carouselProjet').carousel(2);
    });

    //Indicateurs côtés
    $(".carousel-control-prev").click(function(){
        $('#carouselProjet').carousel(prev);
    });
    $(".carousel-control-next").click(function(){
        $('#carouselProjet').carousel(next);
    });
});
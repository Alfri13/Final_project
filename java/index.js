var helloWorld = "test";

console.log(helloWorld);

$(document).ready(function(){

    $('#settings-menu-btn').on('click', function(){

        $('nav').toggleClass('navToggle');
        

    });

    $('#x').on('click', function(){

        $('nav').toggleClass('navToggle');
        

    });

    $('.grid-item').on('click', function(){
        $(this).addClass('selected');
        
    });

    
    
});


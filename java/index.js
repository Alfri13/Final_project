var helloWorld = "test";

console.log(helloWorld);

$(document).ready(function(){

    $('#settings-menu-btn').on('click', function(){

        $('nav').toggleClass('navToggle');
        

    });

    $('#x').on('click', function(){

        $('nav').toggleClass('navToggle');
        

    });


});


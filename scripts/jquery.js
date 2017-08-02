$(document).ready(function () {
    $('.carousel').carousel({
        interval: 3000
    });

    $('.carousel').carousel('cycle');
    
    $('[data-toggle="popover"]').popover({
    trigger: 'hover',
        'placement': 'bottom'
    });
    
});

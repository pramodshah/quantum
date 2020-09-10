$(".slider").slick();


// Fix slick slider using multitabs
$('.nav-tabs a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
     e.target
     e.relatedTarget
     $('.slider').slick('setPosition');
 });
$(".item").click(function(){
$(this).children(".sub-menu").slideToggle();
})

$(".sub-menu").click(function (p) {
p.stopPropagation();
 })

$(".sub-item").click(function(){
$(this).children(".ultimo-menu").slideToggle();
})

$(".ultimo-menu").click(function (p) {
p.stopPropagation();
 })

            


$('document').ready(function(){
    loadgoods();
})

function loadgoods(){
    //загрузка товаров
    $.getJSON('goods.json',function(data){
        console.log(data);
    })
}
$('document').ready(function(){
    loadgoods();
})

function loadgoods(){
    //загрузка товаров
    $.getJSON('goods.json',function(data){
        //console.log(data);
        var out = '';
        for (var key in data){
            out +='<p>' + data [key] ['name'] + '<p>';
            out +='<p>' + data [key] ['price'] + '<p>';
        }
        $('#goods').html(out);
    })
}
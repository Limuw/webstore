$('document').ready(function(){
    loadgoods();
})

function loadgoods(){
    //загрузка товаров
    $.getJSON('goods.json',function(data){
        //console.log(data);
        var out = '';
        for (var key in data){
            out+='<div class = "single-goods">';
            out+='<h3>' + data[key] ['name'] + '<h3>';
            out+='<p>' + data[key] ['price'] + '<p>';
            out+='<img src="'+data[key].image+'">';
            out+='</div>';
        }
        $('#goods').html(out);
    })
}
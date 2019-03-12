$(document).ready(function(){
    for ( var i = 1; i <= 2; i ++ )
    {
        $('.single-product').append($('.row-single').clone());
    }
});
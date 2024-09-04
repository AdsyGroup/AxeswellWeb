$(document).ready(function() {
    $('.ui.checkbox').checkbox();
    
    var username = $('#username').val();
    $('#btn-login').on('click',function(){
        console.log(username);
    });

   

});
$("#login-button,#demo_request").click(function(event){
    event.preventDefault();

$('form').fadeOut(500);
$('.wrapper').addClass('form-success');
var username =$("input[name=username]").val()==""?"For Demo":$("input[name=username]").val();
$("#username").text(username);
setTimeout(function(){
        location.href=location.origin+"/index.html";
    },1000);
});
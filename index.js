$(document).ready(function() {
    $(window).scroll( function(){
        $('.content').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('showme');
            }
            if( bottom_of_window < bottom_of_object ){
                $(this).removeClass('showme');
            }
        });
    });
});

let btnyes = document.getElementById("yes")
btnyes.addEventListener('click', yes)
function yes() {
    alert("Ỏ yêu em nhamm khi nào đi ra ngoài được anh đèo đi mua váy vứi son nháaa")
    window.location.href = "https://www.youtube.com/watch?v=3sxk_GgpJpc"
}

let btnno = document.getElementById("no")
btnno.addEventListener('click', no)
function no() {
    alert("Ok hiểu hiểu thế thôi vậy khỏi váy son gì nữa")
    window.location.href = "https://www.youtube.com/watch?v=OdE8pYLJh1c"
}
$(document).ready(function(){
    $(".loading3").slideUp(200);
});

function Change(page) {
    $(".loading33").slideDown(200);
    setTimeout(function() {
        $.ajax({
            url: page,
            dataType: "html",
            success: function(response) {
                $("body").html(response);
            }
        });
    }, 200);
};
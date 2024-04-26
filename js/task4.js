$(document).ready(function(){
    $(".loading5").slideUp(200);
});

function Change(page) {
    $(".loading55").slideDown(200);
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
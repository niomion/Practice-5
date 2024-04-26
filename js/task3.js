$(document).ready(function(){
    $(".loading4").slideUp(200);
});

function Change(page) {
    $(".loading44").slideDown(200);
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
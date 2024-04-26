$(document).ready(function(){
    $(".loading2").slideUp(200);
});

function Change(page) {
    $(".loading22").slideDown(200);
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
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

function showMath() {

    var i1 = 1;
    let containerDiv = document.createElement('div');
    let array = [Math.E, Math.PI, Math.log10(Math.E), Math.log2(Math.E), Math.log(10), Math.log(2), Math.sqrt(2), Math.sqrt(1/2),
                 findTan(45), Math.ceil(1.00123), Math.ceil(-3.1234), Math.floor(1.00123), Math.random()];
    array.forEach(element => {
        containerDiv.innerHTML += "<p>" + i1++ + ") Result: " + element + "</p>";
    });
    document.body.appendChild(containerDiv);
}

function findTan(degrees) {
    let radian = degrees * (Math.PI / 180);
    let tan = Math.tan(radian);
    return Math.round(tan);
}


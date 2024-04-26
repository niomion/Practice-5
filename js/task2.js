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

function phrase(i) {
let head = $("h1");
    switch (i) {
        case 1:
            head.text("Мова вмирає, коли наступне покоління втрачає розуміння значення слів.");
            alert("Висловлювання В. Голобородька");
            break;
        case 2:
            head.text("Дивуєшся дорогоцінності мови нашої: в ній що не звук, то подарунок, все крупно, зернисто, як самі перла");
            alert("Висловлювання М. Гоголя");
            break;
        case 3:
            head.text("Українці — стародавній народ, а мова їхня мова багатша і всеосяжніша, ніж персидська, китайська, монгольська і всілякі інші");
            alert("Висловлювання Е. Челебі");
            break;
        case 4:
            head.text("Раби — це нація, котра не має Слова. Тому й не зможе захистить себе");
            alert("Висловлювання О. Пахльовської");
            break;
        case 5:
            head.text("Відчуваю й усвідомлюю, яка це красива й легка українська мова.");
            alert("Висловлювання І. Репіна");
            break;
        default:
            head.text("NULL");
            break;
    }
}
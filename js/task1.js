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

//

function createList() {
    var namef = prompt('Enter you name','');
    var position = prompt('Enter your position','');
    var phone = prompt('Enter your phone','');
    var visitcard = ' <TABLE width="100%" border="0">'
+' <TR>'
+' <TD align="CENTER" valign="CENTER">'
+' <IMG width="100px" height="100px"  src="/pineapple.webp">'
+' </TD>'
+' <TD align="CENTER">'
+' <B>' + namef + '</B><BR>'
+' <I>' + position + '</I><BR>'
+' <FONT color="blue">' + phone + '</FONT>'
+' </TD>'
+' </TR>'
+' </TABLE>';

var containerDiv = document.createElement('div');
containerDiv.className = 'put'; 
var table = document.createElement('table');
table.setAttribute('width', '100%');
table.setAttribute('border', '0');
table.setAttribute('align', 'center');
for (var y = 0; y < 12; y++) {
    var row = document.createElement('tr');
    for (var x = 0; x < 3; x++) {
        var cell = document.createElement('td');
        cell.setAttribute('align', 'center');
        cell.style.borderStyle = 'dashed';
        cell.style.borderWidth = 'thin';
        cell.innerHTML = visitcard; 
        row.appendChild(cell);
    }
    table.appendChild(row);
}
containerDiv.appendChild(table);
document.body.appendChild(containerDiv);
}


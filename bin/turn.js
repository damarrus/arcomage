/**
 * Created by DeRibura on 03.09.2016.
 */

function setTurn(player_id) {
    $.ajax({
        type: "POST",
        url: "test.php",
        data: 'action=setturn&player_id='+player_id,
        async: false,
        dataType:"json"
    });
}
function setCurrentCard(card_id) {
    $.ajax({
        type: "POST",
        url: "test.php",
        data: 'action=setcurrentcard&card_id='+card_id,
        async: false,
        dataType:"json"
    });
}
function setFirstTurn() {
    $.ajax({
        type: "POST",
        url: "test.php",
        data: 'action=setfirstturn',
        async: false,
        dataType: "json"
    });
}


function getTurn() {
    var response = $.ajax({
        type: "POST",
        url: "test.php",
        data: 'action=getturn',
        async: false,
        dataType:"json"
    }).responseText;
    var values = $.parseJSON(response);
    return values;
}

function card_deactivate()
{
    for (var i=0; i<=6; ++i)
    {
        card[i].form_elem = $('#card'+i);
        card[i].form_elem.addClass('gray');
    }

}
function card_activate()
{
    for (var i=0; i<=6; ++i)
    {
        card[i].form_elem = $('#card'+i);
        card[i].form_elem.removeClass('gray');
    }
}

function card_delete(card, i)
{
    card.detach();
    delete card[i];
    $(".card"+i).remove();
    console.log(card[i]);
}

function renew(i)
{

    var j = i*1 +1;
    console.log($(card[i]).attr('id')+'attata');
    for ( j ; j<=7; j++)
    {
        if (j<=6)
        {
            console.log($(card[j]).attr('id') + "f1");
            $(card[j]).attr('id', 'card' + (j - 1));
            console.log($(card[j]).attr('id') + 'f2');
        }

        if (j==7)
        {

            card_obj[6] = new Card(card_id);
            $('#container').append('<div id = card'+6+' class = card><p>'+card_obj[6].card_name+'</p></div>' );
            card[6] = $('#card'+(6));
            console.log(card[6]);
            $.extend(card[6], card_obj[6]);
            console.log(card[6]);
        }
    }
}

$(document).ready(function(){
    var incrementPlus;
    var buttonPlus  = $("#add");
    var incrementPlus = buttonPlus.click(function() {
        var $n = $(this)
            .find("#qty");
        $n.val(Number($n.val())+1 );
    });
});
$("#btn-add").on("click", function() {
    var a = parseInt($('#one').val()),
        b = parseInt($('#two').val());
        c =parseInt(a)+ parseInt(b)
        $('#added').val(c);
    console.log('check=>',parseInt(a)+ parseInt(b));
    console.log('check=>',c);
 });



 
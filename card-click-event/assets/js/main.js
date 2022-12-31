$('#card-click').click(function (e) { 
    console.log("click=>");  
});

$('#btn-click').click(function (event) {
    console.log('event==>',event);
    event.stopPropagation()
    console.log("click=>");

});



$("#card-2").on('click',function(e) {
    console.log(e.delegateTarget.childElementCount);

    var i= e.delegateTarget.childElementCount;

    if(i === 4){
        console.log("i is is great");
    $(this).css("background-color","green");

    }
    else{
        console.log("i is blue");
        $(this).css("background-color","red");
    }
});



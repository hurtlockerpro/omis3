$(document).ready(function(){


    console.log('test jQuery ok');

    // document.getElementById().innerHTML = "";
    $("#test").html("<b>this is new text</b>").css('color', 'red');

    changeText();

    $("input[name=lastname],input[name=firstname]").addClass('borderX');

    $('.myList :first-child').css('font-weight', 'bold');
    $('.myList :nth-child(3)')
        .addClass('border')
        .css('color', 'red')
        .css('font-size', '14px');

    $('table tr:even').addClass('rowGray');
    $('table tr:odd').addClass('rowWhite').addClass('font-weight-bold');

    $('form :text').addClass('big');
    $('form :password').addClass('big');
    $('form :submit').addClass('big');


    $('.myList :nth-child(3)').on('click', function(){
        console.log(this);
        $(this).text('clicked!');
    });


    $('#show-effect').on('click', function(){

        // change data- attribute value
        let switched = $(this).data('switched');
        if (switched == 'off')
        {
            $(this).data('switched', 'on');

            // show element
            // $('#effects').slideDown();
            $('#effects').fadeIn(3000, function(){

                console.log('effect is finished!');

 
            });
        } else {
            $(this).data('switched', 'off');
            // show element
            //$('#effects').slideUp();
            $('#effects').fadeOut();
        }
    });


    $("#change-size").on('click', function(){
        $('#effects').animate({
            width:"300px",
            height:"300px"
        });
    });


    $("#change-position-left").on('click', function(){
        $('#effects').animate({
            left:"-=10px"
        });
    });

    $("#change-position-right").on('click', function(){
        $('#effects').animate({
            left:"+=10px"
        });
    });


    $("#change-position-up").on('click', function(){
        $('#effects').animate({
            top:"-=10px"
        });
    });


    $("#change-position-down").on('click', function(){
        $('#effects').animate({
            top:"+=10px"
        });
    });




    $('#updateContent').on('click', function(event){
        let obj = document.getElementById('effects');
        $.ajax({
            url: "test.html",
            success:function(data){
                console.log(data);
                obj.innerHTML = data;
            },
            error:function(jqXHR, textStatus, errorThrown){
                console.log('jqXHR: ', jqXHR, 'textStatus: ', textStatus, 'errorThrown: ', errorThrown);

                let err = `<h3>${textStatus}</h3><b class="red">${errorThrown}</b>`;
                obj.innerHTML = err;
            },
            beforeSend: function( xhr ) {
                xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
                console.log('before!');
              }
        }).done(function() {
            //$( this ).addClass( "done" );
            console.log('done!');
            obj.append('done!');
        }).fail(function() {
            console.log("error" );
            obj.append('error!');
        }).always(function() {
            console.log( "complete!" );
            obj.append('complete!');
        });
      
      
    });

});

function changeText(){
    $('p').text('this is new text');
    //console.log(this);
    //document.getElementById().style.background = ''
    //document.getElementById().classList().addClass().addClass()
}

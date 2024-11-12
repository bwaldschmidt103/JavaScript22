$(document).ready(function() {
    $('#submitBtn').click(function() {
        var field1 = $('#field1').val();
        var field2 = $('#field2').val();
        var field3 = $('#field3').val();
        var field4 = $('#field4').val();
        var field5 = $('#field5').val();

        $('#output').append('<p>' + field1 + ' ' + field2 + ' ' + field3 + ' ' + field4 + ' ' + field5 + '</p>');

        $('#myForm')[0].reset();
    });

    $('#lightMode').click(function() {
        $('body').removeClass('dark-mode').addClass('light-mode');
    });

    $('#darkMode').click(function() {
        $('body').removeClass('light-mode').addClass('dark-mode');
    });

    $('#increaseFont').click(function() {
        $('body').css('font-size', '+=2');
    });

    $('#decreaseFont').click(function() {
        $('body').css('font-size', '-=2');
    });
});
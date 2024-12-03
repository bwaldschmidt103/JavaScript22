// ajax.js
$(document).ready(function(){
    $('#load-content').click(function(){
        $.ajax({
            url: './content.txt',
            success: function(data){
                $('#ajax-content').html(data);
            },
            error: function(){
                $('#ajax-content').html('<p>There was an error loading the content.</p>');
            }
        });
    });
});
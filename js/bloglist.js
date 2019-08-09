$(document).ready(function(){
    $(".anc").on("click", function(){
        var dataId = $(this).attr("data-id");
        $("#yesButton").on("click", function(){
            $("#p"+dataId).html("<span class='delete_text'>This post has been deleted</span>");
        })
    });
});

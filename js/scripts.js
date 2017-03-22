$(document).ready(function() {
  $("#form").submit(function(){
    var nameInput = $("input#name").val();

    $(".name").text(nameInput)

    $("#story").show();

    event.preventDefault();
  });
});

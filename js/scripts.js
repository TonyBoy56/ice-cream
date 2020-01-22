$(document).ready(function() {
  $("form#ice-cream").submit(function(event) {
    event.preventDefault();
    var userInput = ["#input1","#input2","#input3","#input4","#input5","#input6"];
    userInput.forEach(function(input){
      var list = $(input).val();
      $(".output").append("<li>" + list + "</li>");
      });
  });
});
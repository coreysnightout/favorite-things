$(function(){
  $("#formOne").submit(function(event) {
    var animal = $("input#animal").val();
    var color = $("input#color").val();
    var cheese = $("input#cheese").val();
    var tv = $("input#tv").val();
    var book =$("input#book").val();
    var favorites = [animal, color, cheese, tv, book]
    var text = [];

    text.push(favorites[3], favorites[0], favorites[4]);
    $("ul").prepend("<li>" + text[0] + "</li>");
    $("ul").prepend("<li>" + text[1] + "</li>");
    $("ul").prepend("<li>" + text[2] + "</li>");



    $(".favoriteThings").text(text);


      event.preventDefault();

  });





});










































// $(document).ready(function() {
//   $("#form").submit(function(event) {
//     event.preventDefault();
//
//     var favDog = $("input#favoriteDog").val();
//     var favCat = $("input#favoriteCat").val();
//     var favFood = $("input#favoriteFood").val();
//     var favCity = $("input#favoriteCity").val();
//     var favStore = $("input#favoriteStore").val();
//
//     var favorites = [favoriteDog, favoriteCat, favoriteFood, favoriteCity, favoriteStore];
//     var text = [];
//
//
//     text.push(favorites[3], favorites[0], favorites[4]);
//     $("ul").prepend("<li>" + text[0] + "</li>");
//     $("ul").prepend("<li>" + text[1] + "</li>");
//     $("ul").prepend("<li>" + text[2] + "</li>");
//
//   }
//   $("#output").text(result);
// })

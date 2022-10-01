//Replace Text function
$(function () {
  count = 0;
  wordsArray = ["Aspiring Software Dev", "Exploring Competitive Programming","Learned Java & Python", "Minecraft Mod Developer","pursuing Btech AI DS"];
  setInterval(function () {
    count++;
    $("#changeText").fadeOut(300, function () {
      $(this)
        .text(wordsArray[count % wordsArray.length])
        .fadeIn(500);
    });
  }, 3000);
});
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
//End Replace Text function


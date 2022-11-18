/* Scrolling breaks for Safari */

/* --- Ends Here --- */

//Replace Text function
$(function () {
  count = 0;
  wordsArray = [
    "Aspiring Software Dev",
    "Exploring Competitive Programming",
    "Learned Java & Python",
    "Minecraft Mod Developer",
    "pursuing Btech AI DS",
  ];
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

// changing projects
projectName = ["U-Pixel App", "Portfolio Website"];
projectDesc = [
  "U-Pixel is a pixel-art upscaling Desktop app made using JavaFX. ",
  "Website made using HTML SCSS and JS",
];
projectLink = [
  "https://github.com/TejasBhovad/upixel",
  "https://tejasbhovad.github.io/",
];
tags_one = ["JavaFx", "Web Dev", "test"];
tags_two = ["image manipulation", "portfolio website"];
tags_three = ["Desktop App", "dynamic"];
img_src = ["/assets/images/upixel--icon.png", "/assets/images/site--icon.png"];
i = 0;
function changeProjectRight() {
  if (i < projectName.length - 1) {
    i++;
    link =
      '<a class="fa fa-link" href="' +
      projectLink[i] +
      '" aria-hidden="true"></a>';
    document.getElementById("projectTitle").innerHTML = link + projectName[i];
    document.getElementById("tag-one").innerHTML = tags_one[i];
    document.getElementById("tag-two").innerHTML = tags_two[i];
    document.getElementById("tag-three").innerHTML = tags_three[i];
    document.getElementById("projectDescription").innerHTML = projectDesc[i];
    document.getElementById("project--icon").src = img_src[i];
    //document.getElementById("submit").id = "pop-img";
  } else if (i == projectName.length - 1) {
    i = 0;
    link =
      '<a class="fa fa-link" href="' +
      projectLink[i] +
      '" aria-hidden="true"></a>';
    document.getElementById("projectTitle").innerHTML = link + projectName[i];
    document.getElementById("tag-one").innerHTML = tags_one[i];
    document.getElementById("tag-two").innerHTML = tags_two[i];
    document.getElementById("tag-three").innerHTML = tags_three[i];
    document.getElementById("projectDescription").innerHTML = projectDesc[i];
    document.getElementById("project--icon").src = img_src[i];
  }
}
function changeProjectLeft() {
  if (i > 0) {
    i--;
    link =
      '<a class="fa fa-link" href="' +
      projectLink[i] +
      '" aria-hidden="true"></a>';
    document.getElementById("projectTitle").innerHTML = link + projectName[i];
    document.getElementById("tag-one").innerHTML = tags_one[i];
    document.getElementById("tag-two").innerHTML = tags_two[i];
    document.getElementById("tag-three").innerHTML = tags_three[i];
    document.getElementById("projectDescription").innerHTML = projectDesc[i];
    document.getElementById("project--icon").src = img_src[i];
    //  image.src = img_src[i];
  } else if (i == 0) {
    i = projectName.length - 1;
    link =
      '<a class="fa fa-link" href="' +
      projectLink[i] +
      '" aria-hidden="true"></a>';
    document.getElementById("projectTitle").innerHTML = link + projectName[i];
    document.getElementById("tag-one").innerHTML = tags_one[i];
    document.getElementById("tag-two").innerHTML = tags_two[i];
    document.getElementById("tag-three").innerHTML = tags_three[i];
    document.getElementById("projectDescription").innerHTML = projectDesc[i];
    document.getElementById("project--icon").src = img_src[i];
    // image.src = img_src[i];
  }
}
function submitResponse() {
  document.getElementById("submit").value = "Submitted";
  document.getElementById("submit").id = "submitted";
  document.getElementById("entry.1622994508").readOnly = true;
  document.getElementById("entry.1361586968").readOnly = true;
  document.getElementById("entry.1530903076").readOnly = true;
  document.getElementById("entry.486164849").readOnly = true;
}
mode = "dark";
darkSVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM192 0C90.02 .3203 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.8 289.2 .0039 192 0zM288.4 260.1c-15.66 17.85-35.04 46.3-49.05 75.89h-94.61c-14.01-29.59-33.39-58.04-49.04-75.88C75.24 236.8 64 206.1 64 175.1C64 113.3 112.1 48.25 191.1 48C262.6 48 320 105.4 320 175.1C320 206.1 308.8 236.8 288.4 260.1zM176 80C131.9 80 96 115.9 96 160c0 8.844 7.156 16 16 16S128 168.8 128 160c0-26.47 21.53-48 48-48c8.844 0 16-7.148 16-15.99S184.8 80 176 80z"/></svg>';
lightSVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>';
function toggleMode() {
  if (mode == "dark") {
    mode = "light";
    document.getElementById("toggleMode").innerHTML = lightSVG;
  } else if (mode == "light") {
    mode = "dark";
    document.getElementById("toggleMode").innerHTML = darkSVG;
  }
}
function scrollAbout() {
  var elem = document.getElementById("scrollAbout");
  elem.scrollIntoView();
}

// fetch("./projects.json")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

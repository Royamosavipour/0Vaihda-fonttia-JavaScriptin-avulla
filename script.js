let buttonElem = document.querySelector(".btn-fontSize");
let lis = document.querySelectorAll(".change-fontSize");
let currentFontSize = 16;
let index = 0;

buttonElem.addEventListener("click", function () {
  currentFontSize += 4;
  if (currentFontSize > 32) {
    currentFontSize = 16;
  }
  if (index < lis.length) {
    lis[index].style.fontSize = `${currentFontSize}px`;
    index += 1;
  }
  return true
});

// Muuta Fontti****************
let btn = document.querySelector(".btn");
let fontChangeLi = document.querySelectorAll(".font-change");
let showfontTypeSpan=document.querySelectorAll('.showfontType')
let fontType = ["Roboto", "Mansalva", "Grenze", "Turret Road", "Courier New"];
let currentFontIndex = 0;


btn.addEventListener("click", function () {
  let selectFont = fontType[currentFontIndex];
  if (currentFontIndex < fontType.length) {
    fontChangeLi[currentFontIndex].style.fontFamily = selectFont;
    showfontTypeSpan[currentFontIndex].innerHTML=selectFont
    showfontTypeSpan[currentFontIndex].classList.add('showFontStyle')
    currentFontIndex += 1;
  }


});



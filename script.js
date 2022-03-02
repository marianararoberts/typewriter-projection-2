var messageArray = ["EXPERIMENT THREE - RESPONSE TO MUSICAL STIMULI", "PREVIOUS SAMPLES: CLASSICAL, LULLABY, R&B, POP, AND SHOWTUNES", "SUBJECTS REMAIN HAPPY", "TRIAL SEVENTEEN: SAMPLE OF CONTEMPORARY RAP BY JACQUI B", "WE ARE WORSHIPPING", "SOME FOOLS", "WHO CARE MORE ‘BOUT", "SOMEONE’S NUDES", "THAN THE SHOOTERS AT THE SCHOOLS", "GOTTA THROW THOSE ARMS AWAY",
"BECAUSE ARMS WERE MEANT TO PRAY",
"NOT TO FOCUS ON THE SHELLS",
"THIS AINT TACO TUESDAY",
"YALL’ DRAG WOMEN THROUGH THE MUD",
"YEAH MY BARS ARE HERE TO BEAT IT",
"YOU’RE OKAY WITH SPILLING BLOOD LONG AS",
"A WOMAN DOESN’T BLEED IT",
"AND SOME GIRLS",
"YOU’RE NO DIFFERENT",
"YOU LIKE BASIC MOVIE STARS WITH",
"SEXY SCARS AND SPORTY CARS",
"BUT",
"WHAT ABOUT DEPRESSION SCARS",
"WHAT ABOUT THOSE HIGH SCHOOL KIDS",
"POPPING PILLS POPPIN LIDS",
"GOOD WITH RAZORS, HANDS DON’T WOBBLE",
"VERTICAL AND HORIZONTAL", "TRIPLETS ARE FIGHTING!!!", "SCIENTIST 318 SAMPLES MONOSYLLABIC 'LA'", "SUBJECTS BEGIN TO CALM", "."];
let textPosition = 0;
let i = 0;
var speed = 85;
var typedMessage = "";
var typedMessage2 = "";
var typedMessage3 = "";
var typedMessage4 = "";
var delayArr = [2000, 2000, 2000, 500, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11000, 17000, 15000]
typewriter = () => {
  if (i < 4) {
    var typingMessage = typedMessage + messageArray[i].substring(0, textPosition);
    document.querySelector("#typing-text").innerHTML = typingMessage;
  }

  if (i >= 4 && i < 27) {
    speed = 65;
    var typingMessage = typedMessage2 + messageArray[i].substring(0, textPosition);
    document.querySelector("#lyric").innerHTML = typingMessage;
  }

  if (i == 27) {
    speed = 85;
    var typingMessage = typedMessage3 + messageArray[i].substring(0, textPosition);
    document.querySelector("#triplets").innerHTML = typingMessage;
    setInterval(blinkIt, 500);
  }
  if (i > 27) {
    var typingMessage = typedMessage4 + messageArray[i].substring(0, textPosition);
    document.querySelector("#typing-text2").innerHTML = typingMessage;
  }
  if (textPosition++ != messageArray[i].length) {
    setTimeout(typewriter, speed);
  }
  if (textPosition > messageArray[i].length) {
    if (i < 4) {
      typedMessage += messageArray[i] + "<div>";
    }
    if (i >= 4 && i < 28){
      typedMessage2 += messageArray[i] + "<div>";
    }
    if (i > 27) {
      typedMessage4 += messageArray[i] + "<div>";
    }
    i++;
    textPosition = 0;
    setTimeout(typewriter, delayArr[i-1]);
  }

}
function blinkIt() {
  var blinks = document.getElementById("triplets");
  for(var i = 0, l = blinks.length; i < l; i++){
    var blink = blinks[i];
    var visiblity = blink.style.visibility;
    blink.style.visibility = visiblity == 'visible' ? 'hidden' : 'visible';
   }
 }

window.addEventListener("load", typewriter);

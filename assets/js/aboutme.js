var i = 0;
var txt = 'About Me';
var speed = 10;

;(function typeWriter() {
  if (i < txt.length) {
    document.getElementById("about").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
})()
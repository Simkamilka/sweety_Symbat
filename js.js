let index = 1;
showSlides(index);

function plusSlides(n) {
  showSlides(index += n);
}

function currentSlide(n) {
  showSlides(index = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {index = 1}
  if (n < 1) {index = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index-1].style.display = "block";
  dots[index-1].className += " active";
}
function backToTheTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

randomBTSQuotes = function () {
  var quote = new Array();
  quote[0] = "Don't be trapped in someone else's dream.";
  quote[1] = "If you look at it in a certain way, It's hard loving yourself than loving someone else.";
  quote[2] = "Every goal, every action, every thought, every feeling one experiences, whether it be consciously or unconsciously known, is an attempt to increase one's level of peace of mindEveryone lives with a love that has come to an end....";
  quote[3] = "All your dreams can become a reality. So keep moving forward. And you never stop!...";
  var r = Math.floor(Math.random()*quote.length);
  document.write(quote[r]);
}
randomBTSQuotes();

function RegistrationForm() {
  var result = true;
  var a = document.forms.registrationform.email.value;
  var b = document.forms.registrationform.username.value;

  var email_v = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  var username_v = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
  
  document.getElementById("email_message").innerHTML = "";
  document.getElementById("username_message").innerHTML = "";
  
  if (a == null || a == "" || email_v.test(a) == false) {
      document.getElementById("email_message").innerHTML = "Email address empty or wrong format";
      result = false;
  }

  if (b==null || b == "" || username_v.test(b) == false) {
      document.getElementById("username_message").innerHTML= "Please enter the correct information";
      result = false;
  }
  result = true;
  if (result == true) {
      document.getElementById("message").innerHTML="All done";
  }
}
function ResetForm() {
}
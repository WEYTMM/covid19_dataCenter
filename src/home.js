// Manipulate DOM HTML


window.onscroll = function() {scrollFunction(), numberFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      document.getElementById("navbar").style.backgroundColor = "#130947";
      document.getElementById("navbar").style.transition = "0.3s";
    } else {
      document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0)";
      document.getElementById("navbar").style.transition = "0.3s";
    }
  }

function dropdown_burger(){

  if(document.getElementById("burger-dropdown").getAttribute("class") == "dropdown-burger"){
    document.getElementById("burger-dropdown").setAttribute("class","dropdown-burgeractive");
  }
  else{
    document.getElementById("burger-dropdown").setAttribute("class","dropdown-burger");
  }
}
  
function tampilVideo(){
  document.getElementById("thisModal").style.display = "block";
}

function closeVideo(){
  var modalIni = document.getElementById("thisModal");
  modalIni.style.display = "none";
  stopVideo(modalIni)
}

function stopVideo(modal){
  var videoIframe = modal.querySelector("iframe");
  videoIframe.src = videoIframe.src  
}


// Scroll into view


  var berandaklik = document.getElementById("klikberanda");
  berandaklik.addEventListener("click", berandascroll);

  var statistikklik = document.getElementById("klikstatistika");
  statistikklik.addEventListener("click",statistikscroll);

  var covidklik = document.getElementById("klikcovid");
  covidklik.addEventListener("click",covidscroll);


  var tentangklik = document.getElementById("kliktentang");
  tentangklik.addEventListener("click",tentangscroll);


function berandascroll(){
  var br = document.getElementById("halamanberanda");
  br.scrollIntoView({
    behavior: "smooth",
    inline : "center",
    block : "nearest"
  });
}


function statistikscroll(){
  var elemen = document.getElementById("halamanstatistik");
  elemen.scrollIntoView({
    behavior: "smooth",
    inline : "center",
    block : "nearest"
  });
}

function covidscroll(){
  var cv = document.getElementById("halamancovid");
  cv.scrollIntoView({
    behavior: "smooth",
    inline : "center",
    block : "nearest"
  });
}

function tentangscroll(){
  var tt = document.getElementById("halamantentang");
  tt.scrollIntoView();
  console.log("sudahklik");
}







function numberFunction(){
  if(document.body.scrollTop > 250 || document.documentElement.scrollTop > 250){
    animateValue("yellow", 0, 2000, 2000);
    animateValue("green",0,200,2000);
    animateValue("red",0,20,2000);
  }
}



//
function animateValue(id, start, end, duration) {
  // assumes integer values for start and end
  
  var obj = document.getElementById(id);
  var range = end - start;
  // no timer shorter than 50ms (not really visible any way)
  var minTimer = 50;
  // calc step time to show all interediate values
  var stepTime = Math.abs(Math.floor(duration / range));
  
  // never go below minTimer
  stepTime = Math.max(stepTime, minTimer);
  
  // get current time and calculate desired end time
  var startTime = new Date().getTime();
  var endTime = startTime + duration;
  var timer;

  function run() {
      var now = new Date().getTime();
      var remaining = Math.max((endTime - now) / duration, 0);
      var value = Math.round(end - (remaining * range));
      obj.innerHTML = value;
      if (value == end) {
          clearInterval(timer);
      }
  }
  
  timer = setInterval(run, stepTime);
  run();
}

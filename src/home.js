// Manipulate DOM HTML


window.onscroll = function() {scrollFunction()};

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

window.onload=function(){
  berandaklik = document.getElementById("kilikberanda");
  berandaklik.addEventListener("click", berandascroll);

  statistikklik = document.getElementById("klikstatistika");
  statistikklik.addEventListener("click",statistikscroll);
}

// window.onload=function(){
  
// }

// window.onload=function(){
//   covidklik = document.getElementById("klikcovid");
//   covidklik.addEventListener("click",covidscroll);
// }


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

// function covidscroll(){
//   var cv= document.getElementById("halamancovid");
//   cv.scrollIntoView({
//     behavior: "smooth",
//     inline : "center",
//     block : "nearest"
//   });
// }
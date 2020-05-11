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
function countdown(){
    var now = new Date();
                //  data do evento
    var eventDate = new Date("Oct 10, 2022 00:00:00");
    var currentTiime = now.getTime();
    var eventTime = eventDate.getTime();
    var remTime = eventTime - currentTiime;
    // dia, hora, minuto e segundo
      var d = Math.floor(remTime / (1000 * 60 * 60 * 24));
      var h = Math.floor((remTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var m = Math.floor((remTime % (1000 * 60 * 60)) / (1000 * 60));
      var s = Math.floor((remTime % (1000 * 60)) / 1000);
    document.getElementById("days").textContent = d;
    document.getElementById("days").innerText = d;
    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;
    setTimeout(countdown, 1000);
    
    // Verifica se acabou o período do evento
     if (remTime < 0) {
      clearInterval(countdown);
      //document.getElementById("demogrande").innerHTML = "FIM";
      document.getElementById("days").innerHTML = " ";
      document.getElementById("hours").innerHTML = " ";
      document.getElementById("minutes").innerHTML = " ";
      document.getElementById("seconds").innerHTML = "<small>FIM</small>"; 
      } 
  }
  countdown();
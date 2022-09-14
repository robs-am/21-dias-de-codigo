const darkbtn = document.getElementById("chk");
const trocaLampadas = document.getElementById("lampadas");

function darkMode () {
    darkbtn.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
    
    
    });
}







darkMode();

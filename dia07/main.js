    const darkbtn = document.getElementById("chk");
    
    darkbtn.addEventListener("change", (e) => {
        document.body.classList.toggle("dark", e.target.checked);
    })

   
  

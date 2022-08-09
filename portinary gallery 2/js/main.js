//dark mode

let tema = document.querySelector ('.tema');

let darkMode = false;

tema.addEventListener('click', () => {
    if(darkMode){
        document.documentElement.style.setProperty('background','#161616')
        document.documentElement.style.setProperty('--secondary-color','#ded9d9')
        document.documentElement.style.setProperty('--third-color','#9c9c9c')
        document.documentElement.style.setProperty('--title-color','#FFFFFF')
        
    }else{
        document.documentElement.style.setProperty('--main-color','#FFFFFF')
        document.documentElement.style.setProperty('--secondary-color','#ded9d9')
        document.documentElement.style.setProperty('--third-color','#9c9c9c')
        document.documentElement.style.setProperty('--title-color','#161616')
    }
})

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
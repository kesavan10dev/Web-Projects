const images = document.querySelectorAll("img");
const uscore = document.querySelector(".u");
const cscore = document.querySelector(".c");
const result = document.querySelector(".res");

images.forEach(img => {

    img.addEventListener("click", ()=> {

        const comp = Math.random() * 1;
        let cchoice;

        if(comp < 0.3 ) cchoice = "stone";
        else if(comp >= 0.3 && comp <0.6)   cchoice = "paper";
        else if(comp >= 0.6 && comp <=1)    cchoice = "sisor";
        else    console.log("ERROR");

        if(img.alt==="stone" && cchoice==="sisor"){
        
            uscore.innerHTML = Number(uscore.textContent)+1;
            result.innerHTML = "You Win , Your stone crushed those scissors into scrap metal!";
            result.classList.replace("text-red-700" , "text-green-700");
            result.classList.replace("text-yellow-300" , "text-green-700");
            
        }else if(img.alt==="stone" && cchoice==="paper"){
        
            cscore.innerHTML = Number(cscore.textContent)+1;
            result.innerHTML = "Computer Wins , Your stone got gift-wrapped.";
            result.classList.replace("text-green-700" , "text-red-700");
            result.classList.replace("text-yellow-300" , "text-red-700");
    
        }else if(img.alt==="paper" && cchoice==="stone"){
        
            uscore.innerHTML = Number(uscore.textContent)+1;
            result.innerHTML = "You Win , You wrapped the stone like a pro! Smooth move.";
            result.classList.replace("text-red-700" , "text-green-700");
            result.classList.replace("text-yellow-300" , "text-green-700");
        
        }else if(img.alt==="paper" && cchoice==="sisor"){
        
            cscore.innerHTML = Number(cscore.textContent)+1;
            result.innerHTML = "Computer Wins , The computer sliced your paper into ribbons. Brutal!";
            result.classList.replace("text-green-700" , "text-red-700");
            result.classList.replace("text-yellow-300" , "text-red-700");
        
        }else if(img.alt==="sisor" && cchoice==="stone"){
        
            cscore.innerHTML = Number(cscore.textContent)+1;
            result.innerHTML = "Computer Wins , The computer's stone smashed your scissors to bits! Ouch.";
            result.classList.replace("text-green-700" , "text-red-700");
            result.classList.replace("text-yellow-300" , "text-red-700");
        
        }else if(img.alt==="sisor" && cchoice==="paper"){
        
            uscore.innerHTML = Number(uscore.textContent)+1;
            result.innerHTML = "You Win , You shredded that paper into confetti! Victory!";
            result.classList.replace("text-red-700" , "text-green-700");
            result.classList.replace("text-yellow-300" , "text-green-700");
        
        }
        
        else{

            result.innerHTML = "It's a tie! Great minds think alike.";
            result.classList.replace("text-red-700" , "text-yellow-300");
            result.classList.replace("text-green-700" , "text-yellow-300");

        }
        
    });

});
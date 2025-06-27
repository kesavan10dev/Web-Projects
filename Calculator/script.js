const nos = document.querySelectorAll(".no");
const disp = document.querySelector(".result");

nos.forEach(no => {
    no.addEventListener("click",() => {
        
        if(no.value === "ac"){
            disp.value = "";
        }else if(no.value === "="){
            try {
                let expression = disp.value;
                
                // First, add multiplication signs where implied (like between ) and number or % and number)
                expression = expression.replace(/([%)])(\d)/g, '$1*$2');
                expression = expression.replace(/(\d)%(\d)/g, '$1%*$2');
                
                // Then replace percentages
                expression = expression.replace(/(\d+(\.\d+)?)%/g, '($1/100)');
                
                // Finally evaluate
                disp.value = eval(expression);
            } catch (e) {
                disp.value = "Error";
                console.error("Evaluation error:", e);
            }
        }else if(no.value === "clr"){
            disp.value = disp.value.slice(0,-1);
        }
        else{
            disp.value = disp.value + no.value;
            disp.focus();
            disp.setSelectionRange(disp.value.length, disp.value.length);
        }
    
    });
});
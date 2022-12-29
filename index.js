const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let recommended_1=document.getElementById("recommendation-1")
let recommended_2=document.getElementById("recommendation-2")


function generate(){
    let pass=""
    for(let i=0;i<8;i++){
         pass+=(characters[Math.floor(Math.random()*characters.length)])
    }
    return pass;
    
}

function show(){
    recommended_1.textContent=generate();
    recommended_2.textContent=generate();
}




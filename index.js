const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let passwordEl = document.getElementById("password-el")
let password2el = document.getElementById("password2-el")

function generatePassword(){
    let newVariable = []
    let newVariable2 = []
    for(let i = 0; i < characters.length; i++){
       let palabraRamdon = Math.floor(Math.random()* characters.length)
       let palabraRamdon2 = Math.floor(Math.random()* characters.length)
       if(newVariable.length < 15 ){
             newVariable.push(characters[palabraRamdon])
           
            passwordEl.textContent = newVariable.join("")
           
       }
       if(newVariable2.length < 15){
            newVariable2.push(characters[palabraRamdon2])
            password2el.textContent = newVariable2.join("")
       }
            
    }
    
   
}



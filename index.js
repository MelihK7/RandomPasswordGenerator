const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
    "T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",
    "q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~",
    "`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",
    "<",">",".","?", "/"];

    // Fanger vores elementer via javascript med "document" altså DOM
    let btn1 = document.getElementById("suggest1")
    let btn2 = document.getElementById("suggest2")

    let generateButton = document.getElementById("GeneratePassword-el")

    let suggest1 = document.getElementById("suggest1")
    let suggest2 = document.getElementById("suggest2")


    // Tilknytter hver knap via javascript, og fortæller hvilken funktion den skal køre
    generateButton.addEventListener("click", function() { 
        generateRandomPassword();
    });

   suggest1.addEventListener("click", function() {
        handleCopy(suggest1)
   });

   suggest2.addEventListener("click",function(){
        handleCopy(suggest2)
   });
    
   // Funktionen vi køre, når man trykker på endten 1. eller 2. anbefalingskode knapper.
   // Så når man trykker, kopire vi, og når den har kopiret, overwriter vi midlertidigt textcontent
   // i 1,5 sek. med "Copied!" og så dernæst giver TextContent med den orginale kode igen.
    function handleCopy(buttonEl) {
        let originalCodeText = buttonEl.textContent;

        navigator.clipboard.writeText(originalCodeText).then(function() {
            buttonEl.textContent = "Copied!";
            setTimeout(function() {
                buttonEl.textContent = originalCodeText;
            }, 1500);
        });
    };


    function generateRandomPassword() {
        // Reset text content, everytime we click "Generate Password" otherwhise it will keep adding and exceed the border of the buttons
        let password1Suggestion = "";
        let password2Suggestion = "";

        // Generer forskellige numre med randomNumber
        for (let i = 0; i < 15; i++) {
            password1Suggestion += characters[randomNumber()]
            password2Suggestion += characters[randomNumber()]
        }   

        // Overwriter nu med vores nye fundne koder
        suggest1.textContent = password1Suggestion;
        suggest2.textContent = password2Suggestion;
    }

    // Funktion til at give et randomt nummer med math.random,
    // bruger math.floor for at få til nærmeste hele cifre

    function randomNumber() {
       return Math.floor(Math.random() * characters.length);
    }





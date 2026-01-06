const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
    "T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",
    "q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~",
    "`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",
    "<",">",".","?", "/"];

    let btn1 = document.getElementById("suggest1")
    let btn2 = document.getElementById("suggest2")

    let generateButton = document.getElementById("GeneratePassword-el")


    generateButton.addEventListener("click", function() { 
        generateRandomPassword();
    });

  

    function generateRandomPassword() {

        //reset text content, everytime we click "Generate Password" otherwhise it will keep adding and exceed the border of the buttons
        btn1.textContent = "";
        btn2.textContent = "";

        for (let i = 0; i < 15; i++) {
            let randomIndexBtn1 = randomNumber();
            let randomIndexBtn2 = randomNumber();


            btn1.textContent += characters[randomIndexBtn1];
            btn2.textContent += characters[randomIndexBtn2];
        }
    }

    function randomNumber() {
        return Math.floor(Math.random() * characters.length);
    }




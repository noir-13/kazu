const textArray = ["A BSIS Student"]; 
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

function typeEffect() {
  const currentText = textArray[textIndex];
  
  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  let typingSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentText.length) {
    typingSpeed = 1000; // Pause after typing
    isDeleting = true;
  } else if (isDeleting && charIndex === 1) {
    isDeleting = false;
    textIndex = (textIndex + 1) % textArray.length;
    typingSpeed = 500; // Pause before typing next word
  }

  setTimeout(typeEffect, typingSpeed);
}

typeEffect();


function visible(){
    document.getElementById("sidebar").classList.toggle("hidden");
}

function darkBg(){
    document.body.style.background(white);
}

    let win = 0;
    let lose = 0;

function game(move){

    
    
    const randomNum = Math.random()*3;
    const com = document.getElementById("com");
    const user = document.getElementById("user");

    

    if(randomNum >= 0 && randomNum <= 1){
        com.innerHTML = "Rock";
        console.log(randomNum);
    }else  if(randomNum > 1 && randomNum <= 2){
        com.innerHTML = "Paper";
        console.log(randomNum);
    }else if(randomNum <=3 && randomNum > 2){
        com.innerHTML = "Scissor";
        console.log(randomNum);
    }

     user.innerHTML = move;
   
    const comMove = document.getElementById("com").innerHTML;
    const userMove = document.getElementById("user").innerHTML;
    const description = document.getElementById("des");
    const points = document.getElementById("score");

  
    
    console.log(comMove);
    console.log(userMove);

    if(comMove === "Rock" && userMove === "Paper"){
        description.innerHTML = "You win";
        win++;
    }else if(comMove === "Paper" && userMove === "Paper"){
        description.innerHTML = "Draw";
    }else if(comMove === "Scissor" && userMove === "Paper"){
         description.innerHTML = "You lose";
        lose++;
    }if(comMove === "Rock" && userMove === "Rock"){
         description.innerHTML = "Draw";
    }else if(comMove === "Paper" && userMove === "Rock"){
        description.innerHTML = "You lose";
        lose++;
    }else if(comMove === "Scissor" && userMove === "Rock"){
        description.innerHTML = "You win";
        win++;
    }if(comMove === "Rock" && userMove === "Scissor"){
        description.innerHTML = "You lose";
        lose++;
    }else if(comMove === "Paper" && userMove === "Scissor"){
        description.innerHTML = "You win";
        win++;
    }else if(comMove === "Scissor" && userMove === "Scissor"){
         description.innerHTML = "Draw";
    }

    points.innerHTML = win;

}

function reset(){
    const points = document.getElementById("score");
    const com = document.getElementById("com");
    const user = document.getElementById("user");
    const description = document.getElementById("des");

    win = 0;
    points.innerHTML = win;
    com.innerHTML = '';
    user.innerHTML = '';
    description.innerHTML = '';


}


console.log("sdassd ");

// emailjspasswordko@today1121


function sendMail(){
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("Message").value,
        subject: document.getElementById("subject").value
    }

    emailjs.send("service_u1qix25","service_u1qix25",parms).then(alert("Mail sent"))
}
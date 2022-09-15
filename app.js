console.log("helloWorld");

// SCORE

let resetBtn = document.getElementById("reset");
let ScorePlayer = document.getElementById("score-joueur");
let scorePC = document.getElementById("score-ordinateur");

// BTN

let BtnPlayer = [...document.getElementsByClassName("btn-joueur")];
let OPierreBtn = document.getElementById("opierre");
let OFeuilleBtn = document.getElementById("ofeuille");
let OCiseauxBtn = document.getElementById("ociseaux");

// MESSAGE & RESET

let Message = document.getElementById("message");
let NextBtn = document.getElementById("next");



const jouerManche = (e) => {
    let choix = e.target.closest(".btn-joueur");
    BtnPlayer.forEach((btn) => {
        btn.classList.add("desactivated");
        btn.removeEventListener("click",jouerManche);
    });
    // console.log(choix);
    choix.classList.remove("desactivated");
    choix.classList.add("active");
};

// GET EVENT ONCLICK 
BtnPlayer.forEach(btn =>btn.addEventListener("click",jouerManche))





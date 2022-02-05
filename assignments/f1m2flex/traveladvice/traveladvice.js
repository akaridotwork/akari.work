let thisyear = 2022;
let year = prompt("In welk jaar ben je geboren?");
thisyear -= year

if (thisyear < 18){
    alert("Je bent te jong hiervoor. Je moet minimaal 18 jaar oud zijn.");
}
else{
    alert("Je bent oud genoeg. Klik op OK om door te gaan.");
}

let license = prompt("Heb jij een rijbewijs?")
    if (license === "ja" ){
        alert("Top! Het advies is dan om met de auto op reis te gaan.")
    }
    else{
        alert("Je zou maar geen rijbewijs hebben LMAO.")
    }
let scooter = prompt("Heb jij een scooter?")
    if (scooter === "ja"){
        alert("Top! Het advies is dan om met de scooter op reis te gaan.")
    }
    else{
        alert("Je kan gebruik maken van het OV om op reis te gaan, veel plezier!")
    }    



thisyear = 2022;
let year = prompt("In welk jaar ben je geboren?");
thisyear -= year;


if (year > 1){
        alert("Jij bent " + thisyear + " jaar oud.");

    if (thisyear > 18){
            alert("Je bent oud genoeg om door te gaan!");
        }
        
    else if (thisyear < 18){
            alert("Je bent niet oud genoeg om door te gaan. Je moet hier 18 jaar of ouder voor zijn.")
    }
}
// Un mot aléatoire à deviner
// Demander un mot à l'utilisateur
// Tant que le mot à deviner est différent du mot de l'utilisateur
      // Donner un indice sur le mot (par exemple, la première lettre)
      // Demander à nouveau un mot
// Fin Tant Que
// Si le mot est égal au mot à deviner
      // Féliciter l'utilisateur


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

mots = ["ANE", "FROMAGE", "BALLON", "VENIR", "EFFICACE", "BEL", "MENU", "MYSTERE"];

mot_mystere = mots[randomNumber(0, mots.length)];


indice1 = "La première lettre du mot est " + mot_mystere.charAt(0);
indice2 = "Le mot est composé de " + mot_mystere.length + " lettres.";
indice3 = "La dernière lettre du mot est " + mot_mystere.charAt(mot_mystere.length-1);
indice4 = "La deuxième lettre du mot est " + mot_mystere.charAt(1);
indice5 = "La troisième lettre du mot est " + mot_mystere.charAt(2);

indices = [indice1, indice2, indice3, indice4, indice5];
i = -1;
guess = "";
while (guess.toUpperCase() != mot_mystere){
    i = i + 1;
    if (i == indices.length) {
        i = 0;
    }
    guess = (prompt("Devine le mot mystère !"));
    if (guess.toUpperCase() == mot_mystere) {
        alert("Bravo ! Vous avez trouvé le mot mystère");
    } else {
        alert("Dommage ! Voici un indice : " + indices[i])
    }
}

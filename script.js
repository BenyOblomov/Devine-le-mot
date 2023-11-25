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

mots = ["AS", "FROMAGE", "BALLON", "VENIR"]

mot_mystere = mots[randomNumber(0, 4)]


indice1 = "La première lettre du mot est " + mot_mystere.charAt(0)
indice2 = "Le mot est composé de " + mot_mystere.length + " lettres."
indice3 = "La derniere lettre du mot est " + mot_mystere.charAt(mot_mystere.length-1)

indices = [indice1, indice2, indice3]

guess = ""
while (guess.toUpperCase() != mot_mystere){
    guess = (prompt("Devine le mot mystère !"))
    if (guess.toUpperCase() == mot_mystere) {
        alert("Bravo ! Vous avez trouvé le mot mystère")
    } else {
        indice = indices[randomNumber(0, 3)]
        alert("Dommage ! Voici un indice : " + indice)
    }
}

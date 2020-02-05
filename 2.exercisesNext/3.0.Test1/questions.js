/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
let tailleString = (texte) => texte.length;
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " +texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => texte1.concat(texte2); 
let afficherCar5 =  (texte) => texte[4];
let afficher9Car =  (texte) => texte.substr(0,9);
let majusculeString =  (texte) => texte.toUpperCase();
let minusculeString =  (texte) => texte.toLowerCase();
let SupprEspaceString =  (texte) => {
    texte = texte.split('');
    texte.shift();texte.pop();
    texte = texte.join('');
    return texte;
}
let IsString = (texte) => typeof texte == 'string' ? true : false;
let AfficherExtensionString =  (texte) => {
    let parts = texte.split('.');
    return parts[parts.length-1];
}
let NombreEspaceString =  (texte) => {
    let cpt = 0;
    texte = texte.split('')
    texte.forEach(element => (element == ' ' ? cpt++ : false))
    return cpt;
}
let InverseString =  (texte) => {
    texte=texte.split('');
    texte=texte.reverse();
    return(texte.join(''));
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => Math.pow(x,y);
let valeurAbsolue =  (nombre) => Math.abs(nombre);
let valeurAbsolueArray =  (array) => {
    for(i=0; i<array.length; i++){
        array[i] = Math.abs(array[i])
    }
    return array;
}
let sufaceCercle =  (rayon) => Math.round(Math.PI * Math.pow(rayon,2));
let hypothenuse =  (ab, ac) => Math.sqrt(Math.pow(ac, 2) + Math.pow(ab, 2));
let calculIMC =  (poids, taille) => {
    imc=poids/(taille*taille)
    return +(Math.round(imc + "e+2")  + "e-2")
}

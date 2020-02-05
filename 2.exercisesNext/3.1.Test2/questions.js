let CreationTableauLangages =  () => arr = ['Html', 'CSS', 'Java', 'PHP']
let CreationTableauNombres =  () => arr = [0, 1, 2, 3, 4, 5]
let RemplacementElement =  (langages) => {langages[2] = 'Javascript'; return langages}
let AjoutElementLangages =  (langages) => langages.concat(['Ruby', 'Python'])
let AjoutElementNombres =  (nombres) => {
    nombres.unshift(-2, -1); 
    return nombres
}
let SuppressionPremierElement =  (langages) => {langages.shift(); return langages}
let SuppressionDernierElement =  (langages) => {langages.pop(); return langages}
let ConversionChaineTableau =  (reseaux_sociaux_chaine) => reseaux_sociaux=reseaux_sociaux_chaine.split(',');
let ConversionTableauChaine =  (langages) => langages=langages.join(',')
let TriTableau =  (reseaux_sociaux) => reseaux_sociaux.sort();
let InversionTableau =  (reseaux_sociaux) => reseaux_sociaux.reverse();
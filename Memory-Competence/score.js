 function simpleGame() {
    let nomcompetence = [
        "Maquetter une application", 
        "Réaliser une interface utilisateur web statique et adaptable",
        "Développer une interface utilisateur web dynamique",
        "Réaliser une interface utilisateur avec une solution CMS ou e-commerce",
        "Créer une base de données - niveau 1",
        "Développer les composants d’accès aux données - niveau 1",
        "Développer la partie back-end d’une application web ou web mobile - niveau 1",
        "Utiliser un framework Front-end (React, Vue.js, …)"
    ];

    let competence = ["C1","C2","C3","C4","C5","C6","C7","C8"];

    let score = 0;

    for (let i = 0; i < nomcompetence.length; i++) {
        let reponse = prompt("Quel est le code de cette compétence ?\n\n" + nomcompetence[i]);

        if (reponse === competence[i]) {
            console.log("Bonne réponse ✅");
            score++;
        } else {
            console.log("Mauvaise réponse ❌ (la bonne réponse était " + competence[i] + ")");
        }
    }

    console.log("Ton score final est : " + score + "/" + nomcompetence.length);
}

simpleGame();

/*function simpleGame(){
    let nomcompetence = ["Maquetter une application", 
    "Réaliser une interface utilisateur web statique et adaptable",
    "Développer une interface utilisateur web dynamique",
    "Réaliser une interface utilisateur avec une solution CMS ou e-commerce",
    "Créer une base de données - niveau 1",
    "Développer les composants d’accès aux données - niveau 1",
    "Développer la partie back-end d’une application web ou web mobile - niveau 1",
    "Utiliser un framework Front-end (React, Vue.js, …)"];
    let competence = ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8"];
    let score = 0
    for (let i = 0; i< nomcompetence.length; i++){
        let reponse = prompt (" enter the competence?\n\n " + nomcompetence[i]);
        if (reponse == competence[i]){
            score++;
            console.log("Bonne reponse");
        }
        else {
            console.log("mauvaise reponse (la bonne reponse etait" + competence[i]+ ")" );

        }

    }
    console.log("ton score final est "+score+"/" +nomcompetence.length );
}
simpleGame ();*/

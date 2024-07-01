// List of activities with their corresponding links
const activities = [
    { name: "1, 2, 3, SOLEIL!", link: "https://banquedejeux.formationsaveur.com/fiche/view/1" },
    { name: "2 VÉRITÉS, 1 MENSONGE", link: "https://banquedejeux.formationsaveur.com/fiche/view/549" },
    { name: "4 COINS", link: "https://banquedejeux.formationsaveur.com/fiche/view/397" },
    { name: "1, 2, 3, BOOM!", link: "https://banquedejeux.formationsaveur.com/fiche/view/199" },
    { name: "5 CHOSES", link: "https://banquedejeux.formationsaveur.com/fiche/view/331" },
    { name: "747 EN PÉRIL!", link: "https://banquedejeux.formationsaveur.com/fiche/view/2" },
    { name: "À LA QUEUE LEU LEU", link: "https://banquedejeux.formationsaveur.com/fiche/view/545" },
    { name: "À QUI LA VOIX?", link: "https://banquedejeux.formationsaveur.com/fiche/view/457" },
    { name: "ACCROCHE, DÉCROCHE", link: "https://banquedejeux.formationsaveur.com/fiche/view/3" },
    { name: "AIR, TERRE, MER", link: "https://banquedejeux.formationsaveur.com/fiche/view/5" },
    { name: "ALERTE MÉTÉO", link: "https://banquedejeux.formationsaveur.com/fiche/view/6" },
    { name: "ALIBI", link: "https://banquedejeux.formationsaveur.com/fiche/view/401" },
    { name: "ALIENS VS. PRÉDATEURS", link: "https://banquedejeux.formationsaveur.com/fiche/view/260" },
    { name: "ANGUILLE SOUS ROCHE", link: "https://banquedejeux.formationsaveur.com/fiche/view/214" },
    { name: "ATTRAPE MIMES", link: "https://banquedejeux.formationsaveur.com/fiche/view/488" },
    { name: "BABEDIBOU", link: "https://banquedejeux.formationsaveur.com/fiche/view/454" },
    { name: "BALLON FOU", link: "https://banquedejeux.formationsaveur.com/fiche/view/24" },
    { name: "BALON JEDI", link: "https://banquedejeux.formationsaveur.com/fiche/view/210" },
    { name: "BÂTON MAGIQUE", link: "https://banquedejeux.formationsaveur.com/fiche/view/28" },
    { name: "BIBITTE COLLANTE", link: "https://banquedejeux.formationsaveur.com/fiche/view/492" },
    { name: "BOÎTE À SURPRISES", link: "https://banquedejeux.formationsaveur.com/fiche/view/403" },
    { name: "BOULE DE FEU", link: "https://banquedejeux.formationsaveur.com/fiche/view/31" },
    { name: "CACHE-CACHE IMAGINAIRE", link: "https://banquedejeux.formationsaveur.com/fiche/view/427" },
    { name: "CHAÎNE DE RIRE", link: "https://banquedejeux.formationsaveur.com/fiche/view/32" },
    { name: "CHASSE AUX CHEVREUILS", link: "https://banquedejeux.formationsaveur.com/fiche/view/33" },
    { name: "CHECK MOI, CHECK MOI PAS!", link: "https://banquedejeux.formationsaveur.com/fiche/view/35" },
    { name: "CHASSE AUX SONS", link: "https://banquedejeux.formationsaveur.com/fiche/view/253" },
    { name: "CLIN D'OEIL ASSASSIN", link: "https://banquedejeux.formationsaveur.com/fiche/view/37" },
    { name: "CADAVRE EXQUIS", link: "https://banquedejeux.formationsaveur.com/fiche/view/312" },
    { name: "CONCENTRATION", link: "https://banquedejeux.formationsaveur.com/fiche/view/567" },
    { name: "CONQUÊTE DU FOULARD", link: "https://banquedejeux.formationsaveur.com/fiche/view/387" },
    { name: "CORONER (LE MORT)", link: "https://banquedejeux.formationsaveur.com/fiche/view/39" },
    { name: "COURSE À OBSTACLES IMAGINAIRES", link: "https://banquedejeux.formationsaveur.com/fiche/view/430" },
    { name: "DANSE, DANSE, DANSE PU!", link: "https://banquedejeux.formationsaveur.com/fiche/view/333" },
    { name: "DÉCRIS-MOI TON DESSIN", link: "https://banquedejeux.formationsaveur.com/fiche/view/459" },
    { name: "DESSIN MUSICAL", link: "https://banquedejeux.formationsaveur.com/fiche/view/262" },
    { name: "DIAMANT", link: "https://banquedejeux.formationsaveur.com/fiche/view/46" },
    { name: "ÉMOTIONS AMPLIFIÉES", link: "https://banquedejeux.formationsaveur.com/fiche/view/47" },
    { name: "FORMATION POUR NINJA", link: "https://banquedejeux.formationsaveur.com/fiche/view/48" },
    { name: "J'AI PERDU MON SINGE", link: "https://banquedejeux.formationsaveur.com/fiche/view/544" },
    { name: "JE PARS EN VOYAGE", link: "https://banquedejeux.formationsaveur.com/fiche/view/213" },
    { name: "JEAN DIT", link: "https://banquedejeux.formationsaveur.com/fiche/view/419" },
    { name: "JOHNNY WHOOP", link: "https://banquedejeux.formationsaveur.com/fiche/view/264" },
    { name: "L'APPEL DE LA NATURE", link: "https://banquedejeux.formationsaveur.com/fiche/view/436" },
    { name: "L'OBJET RÉINVENTÉ", link: "https://banquedejeux.formationsaveur.com/fiche/view/166" },
    { name: "LA BOULE D'ÉNERGIE", link: "https://banquedejeux.formationsaveur.com/fiche/view/69" },
    { name: "LA CACHETTE SCOUTE", link: "https://banquedejeux.formationsaveur.com/fiche/view/410" },
    { name: "LA CAROTTE MAGIQUE", link: "https://banquedejeux.formationsaveur.com/fiche/view/44" },
    { name: "LA CHASSE AUX COULEURS", link: "https://banquedejeux.formationsaveur.com/fiche/view/70" },
    { name: "LA COURSE À L'ÉTOILE", link: "https://banquedejeux.formationsaveur.com/fiche/view/413" },
    { name: "LA COLONISATION", link: "https://banquedejeux.formationsaveur.com/fiche/view/72" },
    { name: "LA DANSE DES PRÉNOMS", link: "https://banquedejeux.formationsaveur.com/fiche/view/462" },
    { name: "LA FRESQUE HUMAINE", link: "https://banquedejeux.formationsaveur.com/fiche/view/303" },
    { name: "LA LANGUE DE CHAT", link: "https://banquedejeux.formationsaveur.com/fiche/view/79" },
    { name: "LA LISTE D'ÉPICERIE", link: "https://banquedejeux.formationsaveur.com/fiche/view/442" },
    { name: "LA LUNE", link: "https://banquedejeux.formationsaveur.com/fiche/view/283" },
    { name: "MACHINE À BOULES DE GOMME", link: "https://banquedejeux.formationsaveur.com/fiche/view/25" },
    { name: "LA MAJORITÉ", link: "https://banquedejeux.formationsaveur.com/fiche/view/432" },
    { name: "LA MONTAGNE SACRÉE", link: "https://banquedejeux.formationsaveur.com/fiche/view/358" },
    { name: "LA PÉTANQUE AVEUGLE", link: "https://banquedejeux.formationsaveur.com/fiche/view/83" },
    { name: "LA QUEUE DU DRAGON", link: "https://banquedejeux.formationsaveur.com/fiche/view/85" },
    { name: "LE CHAPEAU", link: "https://banquedejeux.formationsaveur.com/fiche/view/284" },
    { name: "LE CHAT ET LES SOURIS", link: "https://banquedejeux.formationsaveur.com/fiche/view/460" },
    { name: "LE CHAUFFEUR DE TAXI", link: "https://banquedejeux.formationsaveur.com/fiche/view/97" },
    { name: "LE CHEF D'ORCHESTRE", link: "https://banquedejeux.formationsaveur.com/fiche/view/98" },
    { name: "LE CHEVALIER DE LA TOURELLE", link: "https://banquedejeux.formationsaveur.com/fiche/view/100" },
    { name: "LE COULOIR AUX MILLES PORTES", link: "https://banquedejeux.formationsaveur.com/fiche/view/316" },
    { name: "LE COWBOY", link: "https://banquedejeux.formationsaveur.com/fiche/view/103" },
    { name: "LE MUR DU SON", link: "https://banquedejeux.formationsaveur.com/fiche/view/165" },
    { name: "LE NOEUD HUMAIN", link: "https://banquedejeux.formationsaveur.com/fiche/view/117" },
    { name: "LE PSYCHOLOGUE", link: "https://banquedejeux.formationsaveur.com/fiche/view/123" },
    { name: "LE POSTE DE RADIO", link: "hhttps://banquedejeux.formationsaveur.com/fiche/view/298" },
    { name: "LES BOULETTES", link: "https://banquedejeux.formationsaveur.com/fiche/view/493" },
    { name: "LES CELLULES", link: "https://banquedejeux.formationsaveur.com/fiche/view/140" },
    { name: "POULE RENARD VYPÈRE", link: "https://banquedejeux.formationsaveur.com/fiche/view/172" },
    { name: "LA PARADE DE MODE", link: "https://banquedejeux.formationsaveur.com/fiche/view/415" },
    { name: "POUSSE-ATTRAPE", link: "https://banquedejeux.formationsaveur.com/fiche/view/9" },
    { name: "PTÉRODACTYLE", link: "https://banquedejeux.formationsaveur.com/fiche/view/174" },
    { name: "QUÉBEC LÉVIS", link: "https://banquedejeux.formationsaveur.com/fiche/view/176" },
    { name: "QUELLE HEURE EST-IL M. LE LOUP?", link: "https://banquedejeux.formationsaveur.com/fiche/view/177" },
    { name: "ROCHE PAPIER CISEAUX GÉANT", link: "https://banquedejeux.formationsaveur.com/fiche/view/181" },
    { name: "SNAP GAME", link: "https://banquedejeux.formationsaveur.com/fiche/view/282" },
    { name: "TIC-TAC-BOOM", link: "https://banquedejeux.formationsaveur.com/fiche/view/189" },
    { name: "TORTUES VS MOUETTES", link: "https://banquedejeux.formationsaveur.com/fiche/view/190" },
    { name: "TRAVERSE-COULEURS", link: "https://banquedejeux.formationsaveur.com/fiche/view/191" },
    { name: "UNE NUIT AU MUSÉE", link: "https://banquedejeux.formationsaveur.com/fiche/view/229" },
    { name: "WAKA-WOW", link: "https://banquedejeux.formationsaveur.com/fiche/view/198" },
    { name: "ZIP-ZAP", link: "https://banquedejeux.formationsaveur.com/fiche/view/461" },
];

// Function to generate the HTML for activities
function generateActivityList() {
    const ul = document.getElementById("activity-list");

    // Clear existing content
    ul.innerHTML = '';

    // Pick 3 random activities from the activities array
    const shuffledActivities = pickRandomActivities(3);

    // Display the selected activities
    shuffledActivities.forEach((activity, index) => {
        const li = document.createElement("li");
        const activityText = document.createTextNode(`${index + 1}. ${activity.name} `);
        const link = document.createElement("a");
        link.href = activity.link;
        link.textContent = "Fiche de jeu";

        li.appendChild(activityText);
        li.appendChild(link);
        ul.appendChild(li);
    });
}

// Function to pick a specified number of random activities from the activities array
function pickRandomActivities(numActivities) {
    return activities.sort(() => Math.random() - 0.5).slice(0, numActivities);
}

// Event listener for shuffle button
document.getElementById("shuffle-btn").addEventListener("click", () => {
    generateActivityList();
});

// Initial generation of activity list
generateActivityList();

//https://drive.google.com/drive/folders/1HmeNyyW39hg6cHruXXqOjIGvK43QvGeo?usp=sharing FOLDER
//https://drive.google.com/file/d/1dK0QK-dRx1g13_dkWohYTlNiAUr8Hpia/view?usp=drive_link

//https://drive.google.com/uc?id=1dK0QK-dRx1g13_dkWohYTlNiAUr8Hpia

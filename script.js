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

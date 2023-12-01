// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
const membroTeam = {
    "nome e cognome": "Gigi",
    "ruolo": "PM",
    "nomeimg": "nomeimmagine.jpg",
}



const arrayMembri = [
    {
        "nome e cognome": "Wayne Barnett",
        "ruolo": "Founder & CEO",
        "nomeimg": "wayne-barnett-founder-ceo.jpg",
    },

    {
        "nome e cognome": "Angela Caroll",
        "ruolo": "Chief Editor",
        "nomeimg": "angela-caroll-chief-editor.jpg",
    },

    {
        "nome e cognome": "Walter Gordon",
        "ruolo": "Office Manager",
        "nomeimg": "walter-gordon-office-manager.jpg",
    },

    {
        "nome e cognome": "Angela Lopez",
        "ruolo": "Social Media Manager",
        "nomeimg": "angela-lopez-social-media-manager.jpg",
    },

    {
        "nome e cognome": "Scott Estrada",
        "ruolo": "Developer",
        "nomeimg": "scott-estrada-developer.jpg",
    },

    {
        "nome e cognome": "Barbara Ramos",
        "ruolo": "Graphic Designer",
        "nomeimg": "barbara-ramos-graphic-designer.jpg",
    },
]
    

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < arrayMembri.length; i++) {
    const membro = arrayMembri[i];
    

    let nomeMebro = membro["nome e cognome"];
    let ruoloMembro = membro.ruolo;
    let pathMembro = membro.nomeimg;

    console.log("Nome e cognome:", nomeMebro);
    console.log("Ruolo:", ruoloMembro);
    console.log("Nome immagine:", pathMembro);
    console.log("-------------------------------------");
}
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sotto forma di stringhe
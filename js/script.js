// Array studenti
const students = [
    {
        nome: "Wayne",
        cognome: "Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "Angela",
        cognome: "Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter",
        cognome: "Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela ",
        cognome: "Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Scott",
        cognome: "Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara",
        cognome: "Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg",
    },
];

console.log(students);

const cardRow = document.querySelector(".row");

let cards = "";
for (let i = 0; i < students.length; i++) {
    const curStudent = students[i];
    cards += `
            <div class="col">
                <div class="card">
                    <img src="img/${curStudent.foto}" class="card-img-top" alt="Foto">
                    <div class="card-body">
                        <h5 class="card-title text-center">${curStudent.nome} ${curStudent.cognome}</h5>
                        <p class="card-text text-center">${curStudent.ruolo}</p>
                    </div>
                </div>
            </div>
        `;
}
console.log(cards);
cardRow.innerHTML = cards;
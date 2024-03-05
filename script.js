const output = document.querySelector('.output');
// Creo un array contenente tutte le informazioni dei dipendenti

const impiegati = [
    {
        nome: "Wayne",
        cognome: "Barnett",
        ruolo: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela",
        cognome: "Caroll",
        ruolo: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter",
        cognome: "Gordon",
        ruolo: "Office Manager",
        img: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela",
        cognome: "Lopez",
        ruolo: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott",
        cognome: "Estrada",
        ruolo: "Developer",
        img: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara",
        cognome: "Ramos",
        ruolo: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg"
    }
    
]


for(let impiegato of impiegati){
    // Stampo in console i dati di ogni impiegato
    console.log(impiegato);
    output.innerHTML += `
    <div class="col">
        <div class="card my-3" ">
            <img src="img/${impiegato.img}" class="card-img-top" alt="${impiegato.nome}">
          <div class="card-body">
            <h5 class="card-title text-center">${impiegato.nome} ${impiegato.cognome}</h5>
            <h6 class="text-center">
              ${impiegato.ruolo}
            </h6>
          </div>
        </div>
  </div>
    `
}
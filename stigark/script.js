// Your web app's Firebase configuration
const firebaseConfig = {
    // Legg informasjon fra deres firebase her
    apiKey: "AIzaSyCe00j6K7nWaZIew7IIXwJGiqh5hqeSy6o",
    authDomain: "stig-ark.firebaseapp.com",
    projectId: "stig-ark",
    storageBucket: "stig-ark.appspot.com",
    messagingSenderId: "389136112924",
    appId: "1:389136112924:web:7cc5df597b928c4992eed9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Lager en referanse til databasen
let db = firebase.firestore();

// Elementer fra DOM
let hovedEl = document.querySelector("#hoved")
let fornavnEl = document.querySelector("#fornavn")
let etternavnEl = document.querySelector("#etternavn")
let meldingEl = document.querySelector("#melding")
let registrerBtn = document.querySelector("#registrer")

// Legger til lytter
registrerBtn.addEventListener("click", addUser)

let collectionName = "brukere"

// Funksjon som legger til ny bruker i databasen
function addUser(){
    console.log(fornavnEl.value)
    console.log(etternavnEl.value)
    db.collection(collectionName).add({
        fornavn: fornavnEl.value,
        etternavn: etternavnEl.value,
        melding: meldingEl.value
    })

    // Tømmer input felt
    fornavnEl.value = ""
    etternavnEl.value = ""
    meldingEl.value = ""

    console.log("Brukeren er lagt inn i databasen")
    // Henter brukerene på nytt
    getUsers()
}


function getUsers(){
    // Henter data. Når dataene er ferdig hentet, starter "then"-biten
    db.collection(collectionName).get().then((snapshot) => {
    //db.collection("brukere").orderBy("alder").get().then((snapshot) => { // sorterer etter alder (yngst til eldst)
        // Henter ut dokumentene
        let dokumenter = snapshot.docs;
    
        // Skriver dokumentene til konsollen
        //console.log(dokumenter);

        // Tømmer div som brukerne skal være i
        hovedEl.innerHTML = ""
    
        // Går gjennom dokumentene
        for (let i = 0; i < dokumenter.length; i++) {
            // Henter data for en enkelt bruker
            let bruker = dokumenter[i].data()
    
            hovedEl.innerHTML += `<h2>Bruker ${i + 1}</h2>`
    
            //console.log(bruker)
    
            hovedEl.innerHTML += `<p>Fornavn: ${bruker.fornavn}</p>`
    
            hovedEl.innerHTML += `<p>Etternavn: ${bruker.etternavn}</p>`
    
            hovedEl.innerHTML += `<p>Melding: ${bruker.melding}</p>`
        }
    });
}


getUsers()

/* Navbar */

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
import express from "express";
import cors from "cors";
const app = express(); // instanciranje aplikacije
const port = 3000; // port na kojem će web server slušati

app.use(express.json()); // mogućnost da razumije JSON
app.use(cors());

// Dohvat oglasa
app.get("/", (req, res) => {
  let oglasi = [{ oglas: "Oglas1" }, { oglas: "Oglas2" }];
  res.send(oglasi);
});

// Registracija korisnika
app.post("/registration", (req, res) => {});

/* Dohvat svih korisnika (poslodavac ima ovu opciju 
kada ide pregledavati koji su se sve korisnici prijavili za njegov oglas) */
app.get("/adverts/:naziv/signedUp/", (req, res) => {
  let usersSignedUpFor = [
    { korisnik: "Matej" },
    { korisnik: "Andrej" },
    { korisnik: "Ivan" },
    { korisnik: "Marko" },
  ];
  res.status(200);
  res.send(usersSignedUpFor);
});

// Dohvat određenog korisnika
app.get("/users/:id", (req, res) => {
  let user = [
    {
      ime: "Karlo",
      prezime: "Prodan",
      email: "karloprodan@gmail.com",
      phone_number: 385998023839,
      residence: "Pula",
    },
  ];
  res.status(200);
  res.send(user);
});

// Za objavljivanje oglasa
app.post("/adverts", (req, res) => {
  console.log("PODACI: ", req.body);
  res.status(201);
  res.send();
});

// Za dohvat oglasa od jednog poslodavca
app.get("/employerID/adverts", (req, res) => {
  let adverts = [
    { Oglas: "Core Performance Engineer" },
    { Oglas: "Pricing Analyst" },
    { Oglas: "Techical Account Administrator" },
    { Oglas: "Account Executive" },
  ];
  res.status(200);
  res.send(adverts);
});
// Za dohvat jednog oglasa od tog poslodavca
app.get("/employerID/adverts/:naziv", (req, res) => {
  let advert = [
    {
      ID: 1234,
      Naziv: "Core Performance Engineer",
      Type: "Informatika i telekomunikacije",
      Description: "Nesto o poslu",
      Date_published: "20.04.2021.",
      InterestedIn: 24,
    },
  ];
  res.status(200);
  res.send(advert);
});

// Za update-anje oglasa
app.patch("/adverts/:naziv", (req, res) => {
  // . . .
  res.send();
});

// Za brisanje određenog oglasa
app.delete("/adverts/:id", (req, res) => {
  // . . .
  res.send();
});

app.listen(port, () => console.log(`Slušam na portu ${port}!`));

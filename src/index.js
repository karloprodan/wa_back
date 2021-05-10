import express from 'express';
const app = express() // instanciranje aplikacije
const port = 3000 // port na kojem će web server slušati

app.get('/', (req, res) => {
    res.json({});
})


// Registracija korisnika
app.post('/users', (req, res) => {
    res.json({});
})

/* Dohvat svih korisnika (poslodavac ima ovu opciju 
kada ide pregledavati koji su se sve korisnici prijavili za njegov oglas) */
app.get('/users', (req, res) => {
    res.json({
        "Korisnik1": "Matej",
        "Korisnik2": "Andrej",
        "Korisnik3": "Ivan",
        "Korisnik4": "Marko"
    });
})

// Dohvat određenog korisnika
app.get('/users/username', (req, res) => {
    res.json({
        "Korisnicko ime": "Karlo Prodan",
        "E-mail": "karloprodan@gmail.com",
        "Telefonski broj": 385998023838,
        "Mjesto stanovanja": "Pula",
        "Adresa": "Classified"
    });
})


// Za objavljivanje oglasa 
app.post('/ads', (req, res) => {
    res.json({});
})

// Za dohvat oglasa od jednog poslodavca 
app.get('/ads', (req, res) => {
    res.json({
        "ID": 1234,
        "Naziv": "Core Performance Engineer",
        "Tip posla": "Informatika i telekomunikacije",
        "Opis posla": "Nesto o poslu",
        "Datum objave": "20.04.2021.",
        "Broj zainteresiranih": 24
    });
})

// Za brisanje određenog oglasa
app.delete('/ads', (req, res) => {
    res.json({});
})

app.listen(port, () => console.log(`Slušam na portu ${port}!`));
 // Definiamo un costruttore per creare oggetti Train
 function Train(nome) {
    this.nome = nome;
    this.isRunning = false;
}

// Aggiungiamo due metodi al prototipo di Train per l'avvio e la fermata
Train.prototype.depart = function() {
    this.isRunning = true;
    console.log(`Arrivederci, ${this.nome}`);
};

Train.prototype.stop = function() {
    this.isRunning = false;
    console.log(`Benvenuto, ${this.nome}`);
};

// Creiamo istanze di Train
const treno1 = new Train("TGV");
const treno2 = new Train("Regionale Veloce");

// Chiamiamo i metodi depart e stop per i due treni
treno1.depart(); 
treno2.stop(); 
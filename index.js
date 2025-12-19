class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    
    atacar() {
        let ataque;
        
        switch(this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque genérico';
        }
        
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
    
    mostrarInfo() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Tipo: ${this.tipo}`);
    }
}

console.log("=== Criando heróis ===");

const mago = new Heroi("Harry", 150, "mago");
const guerreiro = new Heroi("Guts", 35, "guerreiro");
const monge = new Heroi("Aang", 60, "monge");
const ninja = new Heroi("Naruto", 28, "ninja");
const heroiDesconhecido = new Heroi("Andarilho", 25, "arqueiro");

mago.mostrarInfo();
guerreiro.mostrarInfo();
monge.mostrarInfo();
ninja.mostrarInfo();
heroiDesconhecido.mostrarInfo();

console.log("\n=== Ataques dos heróis ===");

mago.atacar();        
guerreiro.atacar();   
monge.atacar();       
ninja.atacar();       
heroiDesconhecido.atacar(); 

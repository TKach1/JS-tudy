var hero = {
  nome: "Jorge",
  vida: 100,
  poder: 10,
  defesa: 5,
  //hab
  guarda: false,
  saquear: false,
  revolucaorussa: false,
};

var goblin = {
  nome: "Pateta",
  vida: 177,
  poder: 13,
  defesa: 2,
};

var agiota = {
  nome: "Cleber, o agiota",
  vida: 150,
  poder: 13,
  defesa: 3,

  frase1: "Me da um reaaaaaaaaaaaal",
  dinheiro: 2000,
};

var getdef = 0;
var jogada = 0;
var jogando = true;
var start_game = true;

function Main() {
  var defesa2 = 0;
  if (start_game){
    console.log("-=-=-=-Jorginho adventures-=-=-=-");
    start_game = false;
  }
  if(jogada%2 == 0){
    console.log("Um goblin  " + goblin.nome + " apareceu!");
    console.log("1 - Atacar");
    console.log("2 - Defender");
    console.log("3 - Saquear");
    console.log("4 - Iniciar uma revolução russa")
    console.log("5 - Fugir (Sair do game)");
    getdef = goblin.defesa;
    jogada = jogada + 1;
  }else if (jogada%2 == 1) {
    console.log( agiota.nome + " apareceu!");
    console.log( agiota.frase1);
    console.log("1 - Atacar");
    console.log("2 - Defender");
    console.log("3 - Saquear");
    console.log("4 - Iniciar uma revolução russa")
    console.log("5 - Fugir (Sair do game)");
    getdef = agiota.defesa;
    jogada = jogada + 1;;
  }

  var escolha = prompt("Escolha: ");
  if(escolha == 1){
    Atacar();
  } else if(escolha == 2){
    Defender();
  } else if(escolha == 3){
    Saquear();
  } else if(escolha == 4){
    Revolucao();
  } else if(escolha == 5){
    Fugir();
  }
  else{
    console.log("Ta maluco mermão, não tem essa opção!")
  }

}

function Atacar(){
  console.log("Jorginho deu um tapão");
  console.log("O Inimigo perdeu " + (hero.poder - getdef) + " de vida");
}
function Revolucao(){
  hero.revolucaorussa = true;
  console.log("Parabens! Jorginho iniciou uma revolução russa, mas isso não tem nada a ver com sua aventura.")
  jogando = false;
}
function Saquear(){
  hero.saquear = true;
  console.log("Jorginho saqueou o inimigo")
}
function Defender(){
  hero.guarda = true;
  console.log("Jorginho vai segurar o golpe do inimigo");
}
function Fugir(){
  console.log("Jorginho fugiu!!!!!");
  console.log("Sem condições pprt smcd");
  jogando = false;
}
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

while(jogando){
  Main();
  sleep(2000);
  console.clear();
}

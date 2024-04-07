// 1️⃣ Desafio Classificador de nível de Herói

let nomeHeroi = ("Adryanrr");

const xpHeroi = 0;

const rankDoHeroi = definirRank(xpHeroi);

function definirRank (xpHeroi){
    switch (true) {
        case xpHeroi >=1 && xpHeroi <= 1000:
            return "Ferro"
    
        case xpHeroi >= 1001 && xpHeroi <= 2000:
            return "Bronze";

        case xpHeroi >= 2001 && xpHeroi <= 5000:
            return "Prata";

        case xpHeroi >= 5001 && xpHeroi <= 7000:
            return "Ouro";

        case xpHeroi >= 7001 && xpHeroi <= 8000:
            return "Platina";

        case xpHeroi >= 8001 && xpHeroi <= 9000:
            return "Ascendente";

        case xpHeroi >= 9001 && xpHeroi <= 10000:
            return "Ascendente";

        case xpHeroi >= 10001:
            return "Radiante";

            
        default:
            return "Sem Rank"
    }
}

console.log("O Herói de nome " + nomeHeroi + " está no rank de " + rankDoHeroi + "!"); 

const hexalibur = {
    name: 'Hexalibur',
    damage: 17
}

class Character{
    constructor(name, level, life){
        this.name=name;
        this.level=level;
        this.life=life;
    }
    attack(opponentCharacter){
        console.log(`${this.name} sort ${this.weapon.name} et attaque ${opponentCharacter.name} !`);
        console.log(`Il inflige ${this.level*this.weapon.damage} dégats`);
        opponentCharacter.receiveDamage(this.level*this.weapon.damage);
        console.log(`${opponentCharacter.name} n'a plus que ${opponentCharacter.life}`)
        if(opponentCharacter.life == 0){
            console.log(`${this.name} a tué ${opponentCharacter.name}`)
        }
    }
    receiveDamage(damageInput){
        if(this.life-damageInput < 0){
            this.life=0;
        }
        else{
            this.life=this.life-damageInput;
        }
    }
}

let player1 = new Character ('Wistache', 42, 2350);
let player2 = new Character ('Marco Le Bibliothecaire Maroufleur', 30, 5000)

player1.weapon = hexalibur; // N'ayant pas trouvé d'autre solution adéquate qui fonctionne avec un classe d'objet, j'ai décidé de maroufler aussi
player1.attack(player2); 
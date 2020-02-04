// Exo PNJ


class Character{
    constructor(name, surname, age, item_to_give){
        this.name=name;
        this.surname=surname;
        this.age=age;
        this.item_to_give=item_to_give;
    }
    giveItem() {
        return (this.item_to_give[Math.floor(Math.random()*this.item_to_give.length)]);
    }
    introduceSelf(){
        return(`Hello i am ${this.name} ${this.surname}, ${this.age} years old.`);
        //console.log('May i offer you a juicy item to entertain you during your travel ?')
    }
}

let pnj1 = new Character ('Marco', 'The Librarian Maroufleur', 25, ["La Sainte Connerie", "Le Lexique du Saint JS"])
console.log(pnj1.introduceSelf());

/* To Loop through all properties in the object
for(i in pnj1){
    console.log(i + '\n')
}
*/

// Exo Shop

class Objects {
    constructor(title, physic, magic, minLevel, available){
        this.title=title;
        this.physic=physic;
        this.magic=magic;
        this.minLevel=minLevel;
        this.available=available;
    }
}

let obj1 = new Objects("La Sainte Connerie", 2, 6, 1, true);
let obj2 = new Objects("Le Lexique du Saint JS", 2, 99999, 50, true);
let obj3 = new Objects("HTML pour les nuls", 2, 15, 1, false);


let myBeautifulShopListOfObjects = [obj1, obj2, obj3];

function ShowObjects(arr){
    for(i=0 ; i <arr.length ; i++){
        console.log(arr[i]);
    }
}

function ShowObjectsByIfAvailable(arr){
    for(i=0 ; i <arr.length ; i++){
        if (arr[i].available==true){
            console.log(arr[i]);
        }
    }
}

function ShowObjectsIfOver10(arr){
    for(i=0 ; i <arr.length ; i++){
        if (arr[i].minLevel>10){
            console.log(arr[i]);
        }
    }
}

//ShowObjects(myBeautifulShopListOfObjects);
//ShowObjectsByIfAvailable(myBeautifulShopListOfObjects);
//ShowObjectsIfOver10(myBeautifulShopListOfObjects);


// Exo Personnage

/*class weapon{
    constructor(weaponName, weaponDamage){
        this.weaponName=weaponName;
        this.weaponDamage=weaponDamage;
    }
}*/

//Since i can't seem to be able to make it work i'll use a lil cheat

const hexalibur = {
    name: 'Hexalibur',
    damage: 17
}

class mainCharacter /*extends weapon*/ {
    constructor(name, level, life){
        //super();
        this.name=name;
        this.level=level;
        this.life=life;
    }
    attack(){
        console.log(`${this.name} sort ${this.weapon.name} et attaque ! Il inflige ${this.level*this.weapon.damage} dégats`)
    }
}

//let hexalibur = new weapon ('hexalibur', 15);
let Wistache = new mainCharacter('Wistache', 8, 72)
Wistache.weapon=hexalibur;


console.log(hexalibur)
Wistache.attack();


// Exo Bonus
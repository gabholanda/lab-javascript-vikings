// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health,
      this.strength = strength
  }
  attack() { return this.strength }
  receiveDamage(damage) { this.health -= damage }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength),
      this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry() { return 'Odin Owns You All!' }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength)
  }
  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking) { this.vikingArmy.push(Viking) }
  addSaxon(Saxon) { this.saxonArmy.push(Saxon) }
  vikingAttack() {
    let randomVik =  Math.floor(Math.random() * (this.vikingArmy.length - 1))
    let randomSax = Math.floor(Math.random() * (this.saxonArmy.length - 1))
    let viking = this.vikingArmy[randomVik];
    let saxon = this.saxonArmy[randomSax];
    saxon.receiveDamage(viking.attack());
    if(saxon.health <= 0) {
      this.saxonArmy.splice(randomSax, 1);
      return 'A Saxon has died in combat';
    }
  }
  saxonAttack() {
    let randomVik =  Math.floor(Math.random() * (this.vikingArmy.length - 1))
    let randomSax = Math.floor(Math.random() * (this.saxonArmy.length - 1))
    let viking = this.vikingArmy[randomVik];
    let saxon = this.saxonArmy[randomSax];
    viking.receiveDamage(saxon.attack());
    if(viking.health <= 0) {
      this.vikingArmy.splice(randomVik, 1);
    }
    return `${viking.name} has received ${saxon.strength} points of damage`;
  }
  showStatus() {
    if(this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!'
    }
    else if(this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survive another day...'
    } else {
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  }
}

let war = new War();
let Vik = new Viking('Juao', 10, 5);
war.addViking(Vik);
let Sax = new Saxon(5, 2);
war.addSaxon(Sax);

console.log(war);




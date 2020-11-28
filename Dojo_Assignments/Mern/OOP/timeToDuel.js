class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        target.res -= this.power
    }
}

class Effect extends Card {
    constructor(name, cost, power, res, def) {
        super(name, cost);
        this.power = power;
        this.res = res;
        this.def = def;
    }
    play(target) {
        if( target instanceof Unit ) {
            target.res += this.res;
            target.power += this.power;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

// effect cards
const hardAlgorithm = new Effect('Hard Algorithm', 2, 0, 3, "increases target's resilience by 3");
const unhandledPromiseRejection = new Effect('Unhandled Promise Rejection', 1, 0, -2, "reduce target's resilience by 2");
const pairProgramming = new Effect('Pair Programming', 3, 2, 0, "increase target's power by 2")

// unit cards
const redBeltNinja = new Unit('Red Belt Ninja', 3, 3, 4);
const blackBeltNinja = new Unit('Black Belt Ninja', 4, 5, 4);

hardAlgorithm.play(redBeltNinja);
unhandledPromiseRejection.play(redBeltNinja);
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);
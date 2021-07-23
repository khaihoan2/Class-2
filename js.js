class Battery {
    energy;

    constructor(energy) {
        this.energy = energy;
    }

    getEnergy() {
        return this.energy
    }

    getDecreaseEnegy() {
        return this.energy >0
        this.energy--;
    }
}
// let energy = battery.getEnergy(10);


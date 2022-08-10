class ArrayPopper {
    constructor(arr) {
        this.arr = arr;
        this.atBeginning = true;
    }

    togglePopper() {
        this.atBeginning = !this.atBeginning;
        return this.atBeginning ? this.arr.pop() : this.arr.shift();
    }
}

const ap = new ArrayPopper([1, 2, 3, 4, 5]);

console.log(ap.togglePopper());
console.log(ap.togglePopper());
console.log(ap.togglePopper());
console.log(ap.togglePopper());
console.log(ap.togglePopper());

const strap = new ArrayPopper(['Hi', 'there', 'from', 'JS']);

console.log(strap.togglePopper());
console.log(strap.togglePopper());
console.log(strap.togglePopper());
console.log(strap.togglePopper());
console.log(strap.togglePopper());
console.log(strap.arr);
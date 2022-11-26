export class Something {

    constructor(length: number, width: number) {
        this.#length = length;
        this.#width = width;
    }

    #length: number;
    #width: number;

    get length() { return this.#length; }
    set length(l: number) { this.#length = l; }

    get width() { return this.#width; }
    set width(w: number) { this.#width = w; }

    area() { return this.#length * this.#width; }
    ratio1() { return this.#length / this.#width; }
    ratio2() { return this.#width / this.#length; }
}

export function mkSomething(length: number, width: number) {
    return new Something(length, width);
}
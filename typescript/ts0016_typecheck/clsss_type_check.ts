class C {
    this
    constructor() {
        /** @type {number | undefined} */
        this.prop = undefined;
        /** @type {number | undefined} */
        this.count;
    }
}

let c = new C();
c.prop = 0;          // OK
c.count = "string";  // Error: string is not assignable to number|undefined
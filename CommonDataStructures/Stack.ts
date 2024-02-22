class Stack {
    private items: number [];

    constructor() {
        this.items = [];
    }

    push(item: number): void {
        this.items.push(item)
    }

    pop(): number | undefined {
        return this.items.pop()
    }

    peek(): number | undefined {
        return this.items.length > 0 ? 
        this.items[this.items.length - 1] : undefined;
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

}
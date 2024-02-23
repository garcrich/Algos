export default class NestedInteger {
    private value?: number;
    private list: NestedInteger[];

    constructor(value?: number) {
        if (value !== undefined) {
            this.value = value;
            this.list = [];
        } else {
            this.list = [];
        }
    }

    isInteger(): boolean {
        return this.value !== undefined;
    }

    getInteger(): number | null {
        return this.value !== undefined ? this.value : null;
    }

    setInteger(value: number): void {
        this.value = value;
    }

    add(elem: NestedInteger): void {
        this.list.push(elem);
    }

    getList(): NestedInteger[] {
        return this.list;
    }
}

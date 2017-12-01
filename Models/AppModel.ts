import Counter from './Counter';

export default class AppModel {
    message = "Foo";
    counters: Counter[] = [];

    constructor() {
        this.addCounter();
    }

    addCounter() {
        this.counters.push(new Counter());
    }
}
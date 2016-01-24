import Test from './test';
import Header from './header';
import ProjectSet from './project-set';

class Card {
    constructor(opts) {
        this.title = opts.title;
    }
}

class App {
    constructor(elem) {
        Test.test();
        this.header = new Header();
        this.projects = new ProjectSet();

        this.cards = ko.observableArray([
            new Card({title: 'foo'}),
            new Card({title: 'bar'}),
            new Card({title: 'baz'})
        ]);

        ko.applyBindings(this, elem);
    }
}

export default new App();

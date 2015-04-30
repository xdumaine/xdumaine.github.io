import Test from './test';

class App {
    constructor() {
        Test.test();
        setTimeout(() => window.location = 'http://xdumaine.com', 3000);
    }
}

export default new App();

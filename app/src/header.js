class Header {
    constructor() {
        this.links = ko.observableArray([
            {
                title: 'Github',
                iconClass: 'fa fa-github',
                target: 'https://github.com/xdumaine'
            },
            {
                title: 'Blog',
                iconClass: 'fa fa-rss',
                target: 'https://blog.xdumaine.com'
            },
            {
                title: 'StackOverflow',
                iconClass: 'fa fa-stack-overflow',
                target: 'https://stackoverflow.com/users/381422/xdumaine'
            },
            {
                title: 'Résumé',
                iconClass: 'fa fa-stack-exchange',
                target: 'https://careers.stackoverflow.com/dumaine'
            },
            {
                title: 'Slides',
                iconClass: 'fa fa-tv',
                target: 'https://slides.xdumaine.com'
            }
        ]);
    }
}

export default Header;

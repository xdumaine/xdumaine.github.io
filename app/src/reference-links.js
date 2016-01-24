class ReferenceLinks {
    constructor() { }
    static create(links) {
        const arr = new ko.observableArray();
        if (links.demo) {
            arr.push({
                target: links.demo,
                title: 'demo',
                iconClass: 'fa fa-magic'
            });
        }
        if (links.source) {
            arr.push({
                target: links.source,
                title: 'source',
                iconClass: 'fa fa-file-code-o'
            });
        }
        if (links.slides) {
            arr.push({
                target: links.slides,
                title: 'slides',
                iconClass: 'fa fa-television'
            });
        }
        if (links.video) {
            arr.push({
                target: links.video,
                title: 'video',
                iconClass: 'fa-youtube-play'
            });
        }
        return arr;
    }
}

export default ReferenceLinks;

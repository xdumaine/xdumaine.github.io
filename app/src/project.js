class Project {
    constructor(item) {
        this.title = item.title;
        this.referenceLinks = item.referenceLinks || null;
        this.techItems = item.techItems ? ko.observableArray(item.techItems) : null;
        this.imageSource = ko.observable(item.imageSource);
        this.liveDemo = ko.observable(item.liveDemo);
        this.wide = ko.observable(item.wide);
        this.description = item.description;
        this.figureSet = ko.observableArray(item.figureSet);
    }

    next() {
        const items = this.figureSet();
        const first = items[0];
        for (let i = 0; i < items.length; i++) {
            if (!items[i].collapse()) {
                if (items[i+1]) {
                    items[i+1].collapse(false);
                } else {
                    first.collapse(false);
                }
                items[i].collapse(true);
                return;
            }
        }
    }

    previous() {
        const items = this.figureSet();
        const last = items[items.length - 1];
        for (let i = items.length - 1; i >= 0; i--) {
            if (!items[i].collapse()) {
                if (i > 0 && items[i-1]) {
                    items[i-1].collapse(false);
                } else {
                    last.collapse(false);
                }
                items[i].collapse(true);
                return;
            }
        }
    }
}

export default Project;

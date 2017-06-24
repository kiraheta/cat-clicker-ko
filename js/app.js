var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.levels = ko.computed(function() {
        if (this.clickCount() < 10) {
            return 'NewBorn';
        } else if (this.clickCount() < 20) {
            return 'Infant';
        } else {
            return 'Teen';
        }
    }, this);
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://www.flickr.com/photos/big');

    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
    };
}

ko.applyBindings(new ViewModel());

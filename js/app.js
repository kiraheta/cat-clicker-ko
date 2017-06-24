var initCats = [
    {
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/1.jpg',
        nickNames:['sleepy','hungry']
    },
    {
        clickCount: 0,
        name: 'Crappy',
        imgSrc: 'img/2.jpg',
        nickNames:['grouchy','snappy']
    },
    {
        clickCount: 0,
        name: 'Happy',
        imgSrc: 'img/3.jpg',
        nickNames:['funny','jolly']
    },
    {
        clickCount: 0,
        name: 'Smacky',
        imgSrc: 'img/4.jpg',
        nickNames:['angry','furious']
    },
    {
        clickCount: 0,
        name: 'Champy',
        imgSrc: 'img/5.jpg',
        nickNames:['thoughtful','pensive']
    }
];

var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.levels = ko.computed(function() {
        if (this.clickCount() < 10) {
            return 'NewBorn';
        } else if (this.clickCount() < 20) {
            return 'Infant';
        } else {
            return 'Teen';
        }
    }, this);
    this.imgSrc = ko.observable(data.imgSrc);
    this.nickNames = ko.observable(data.nickNames);
}

var ViewModel = function() {
    var self = this;

    this.catList = ko.observableArray([]);
    initCats.forEach(function(catItem) {
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.selectCat = function(clickCat) {
        self.currentCat(clickCat);
    };

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    this.changeCat = function(cat) {
        self.currentCat(cat);
    };
}

ko.applyBindings(new ViewModel());

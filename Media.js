
// Media class as common starting point for
// things like DVDs, books, vinyl

// Blueprint of data
class Media {
    constructor(someNewName){
        this.name = someNewName;

        Media.count++;
    }

    // Count all of Media that exist
    static count = 0;

    getMediaName(){
        return this.name;
    }

    static version(){
        return "class 0.0.1";
    }


    version(){
        return "prototpe version 0.0.1";
    }
}

// Instance of the blueprint
// let someMedia = new Media();
// someMedia.name = "Cool generic media";
// console.log(someMedia.name);
// console.log(someMedia.version());

// console.log(Media.version());
// console.log(Media.prototype.version());

// // let arrayLength = Array.length();
// // arrayLength = some ArrayVariable.length;

// let someOtherMedia = new Media();
// console.log(someOtherMedia.name);

// console.log(`Media library has ${Media.count} items.`)

module.exports = {
    Media
}
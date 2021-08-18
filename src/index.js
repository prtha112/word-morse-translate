"use strict";
const dogSwitch = (breed) => {
    switch (breed) {
        case ("border"):
            return "Border Collies are good boys and girls.";
            break;
        case ("pitbull"):
            return "Pit Bulls are good boys and girls.";
            break;
        case ("german"):
            return "German Shepherds are good boys and girls.";
            break;
    }
};
console.log(dogSwitch("border"));

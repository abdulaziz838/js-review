const length = 2;
const width = 4;
const area = length * width;
console.log (area);
//----------------------------
const favorite_animals = ["dog","cat","monkey","rabbit"];
favorite_animals.fill ("Lion",3);
console.log(favorite_animals);
favorite_animals.splice (1,1);
console.log(favorite_animals);
favorite_animals.push ("Tiger","Turtle");
console.log(favorite_animals);
//-------------------------------------
function cube (a) {
    return Math.pow(a,3);
}
console.log (cube(3));
//--------------------------------
function byThree (a) {
    if ( a % 3 == 0) {
        return Math.pow (a ,3);
    }
    return false;
}
console.log (byThree(9));
//-------------------------------
function padelCourt (a,b) {
    if (b === "indoors") {
        return " the padel court costs 30 KWD per hour";
    } else if (b === "outdoors") {
        return "the padel court costs 20 KWD per hour";
    }
    return " false data";
    }
console.log(padelCourt(3,"outdoors"));



function Creategame () {
    this.cardFace = function (face) {
        var array = [];
        for (var i=0; i<face.length;i++) {
            var maxIndex = face.length;
            var randomNumber = Math.floor(Math.random()*maxIndex);
            var arrayItem = face.splice(randomNumber,1);
            array.push(arrayItem[0]);
        }
    }
    this.cardBack = function (back) {
        var classIndex = 0;
        for (var i = 0; i < 18; i++) {
            var back = $("<div>").addClass('card ' + back[classIndex]);
            classIndex++;
            $("#game-area").append(front)
        }
    }
}




for (var i = 0; i < 18; i++){
    var front = $("<div>").addClass('card ' + cardBack[classIndex]);
    var frontcard = front.attr('cardFace',randomFaces[i]);
    classIndex++;
    $("#game-area").append(front);
    if (classIndex === 6){
        classIndex = 0;
    }
}



var back = ["bluemap", "darkpurplemap", "greenmap", "lightpurplemap", "pinkmap", "redmap"];
var face = ["apple","apple","blueghost","blueghost","cherry","cherry","lightblueghost","lightblueghost","orangeghost","orangeghost","pacman","pacman","strawberry","strawberry","pinkghost","pinkghost","redghost","redghost"];
var randomFaces = randomgenerator(cardFaces);
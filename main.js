var firstclick = null;
var secondclick = null;
var firstclass = null;
var secondclass = null;
var firstid = null;
var secondid = null;
var total_possible_matches = 2;
var match_counter = 0;
var matches = 0;
var attempts = 0;
var accuracy = 0;
var games_played = 0;
var matchedarray = [];
var firstmatchfront = null;
var secondmatchfront = null;
var firstmatchback = null;
var secondmatchback = null;
var hiddenitems = null;
var matchedelements = null;
var eatingghost = new Audio("../memory_match/images/pacman_eatghost.wav");
var eatingfruit = new Audio("../memory_match/images/pacman_eatfruit.wav");
var pacmanchomp = new Audio("../memory_match/images/pacman_chomp.wav");
var youwon = new Audio("../memory_match/images/pacman_intermission.wav");
var startgame = new Audio("../memory_match/images/pacman_beginning.wav");

$(document).ready(function(){
    // createcards();
    insertcointocontinue();
});  //end of document.ready function
        function createcards() {

            var Index = 0;
            var cardBack = ["bluemap", "darkpurplemap", "greenmap", "lightpurplemap", "pinkmap", "redmap"];
            var cardFaces = ["apple","apple","blueghost","blueghost","cherry","cherry","lightblueghost","lightblueghost","orangeghost","orangeghost","pacman","pacman","strawberry","strawberry","pinkghost","pinkghost","redghost","redghost"];
            var randomFaces = randomgenerator(cardFaces);
            var classIndex = 0;

                for (var i = 0; i < 18; i++){
                    var front = $("<div>").addClass('card ' + cardBack[classIndex]);
                   var frontcard = front.attr('cardFace',randomFaces[i]);
                    classIndex++;
                    $("#game-area").append(front);
                    if (classIndex === 6){
                        classIndex = 0;
                    }
                }
            clickcard();
            display_stats();
            reset();
}  //end of createcards();

function resetclicks() {
    firstclick=null;
    secondclick=null;
    console.log("clicks have been reset")
}

    function randomgenerator(originalArray) {
        var array = [];
        for(var i=0;i<18;i++) {
            var maxIndex = originalArray.length;
            randomnumber = Math.floor(Math.random()*maxIndex);
            var arrayItem = originalArray.splice(randomnumber,1);
            array.push(arrayItem[0]);
        }
        return array;
    }

        function clickcard() {
            $(".card").click(function(){
                console.log(this);
                var showcardface = $(this).attr("cardface");
                $(this).addClass(showcardface);
                if (firstclick === null) {
                    firstclick = this;
                    firstclass = $(this)[0].classList[2];
                    firstid = firstclick.id;
                    return;
                }
                else {
                    secondclick = this;
                    secondclass = $(this)[0].classList[2];
                    secondid = secondclick.id;
                    $(this).addClass(showcardface);

                    if (firstclick === secondclick){
                        $(firstclick).removeClass(showcardface);
                        $(secondclick).removeClass(showcardface);
                        resetclicks();
                        console.log('dont pick the same card')
                    }


                    if ($(firstclick).attr("cardface") === $(secondclick).attr("cardface")){
                        console.log("It's a match!");
                        firstmatch = firstclick;
                        secondmatch = secondclick;
                        matchedarray.push(secondmatch.classList[2]);
                        matchedelements = matchedarray.toString();

                            if (showcardface === 'blueghost') {
                                eatingghost.play();
                            }
                            else if (showcardface === 'lightblueghost') {
                                eatingghost.play();
                            }
                            else if (showcardface === 'redghost') {
                                eatingghost.play();
                            }
                            else if (showcardface === 'pinkghost') {
                                eatingghost.play();
                            }
                            else if (showcardface === 'orangeghost') {
                                eatingghost.play();
                            }
                            else if (showcardface === 'cherry') {
                                eatingfruit.play();
                                $("#gotcherry").addClass("addcherry");
                            }
                            else if (showcardface === 'strawberry') {
                                eatingfruit.play();
                                $("#gotstrawberry").addClass("addstrawberry");
                            }
                            else if (showcardface === 'apple') {
                                eatingfruit.play();
                                $("#gotapple").addClass("addapple");
                            }
                            else if (showcardface === 'pacman') {
                                pacmanchomp.play();
                            }
                        setTimeout(function(){
                            attempts+=1;
                            display_stats();
                            $(firstclick).addClass("hidden");
                            $(secondclick).addClass("hidden");
                            resetclicks();
                        },200);
                        matches+=1;
                        if (matches === 9) {
                            setTimeout(function(){
                                youwon.play();
                            },600);
                            setTimeout(function(){
                                console.log("You won!");
                                $("#gotcherry").removeClass("addcherry");
                                $("#gotstrawberry").removeClass("addstrawberry");
                                $("#gotapple").removeClass("addapple");
                                $("#game-area").addClass("playagain");
                                reset();
                            },200);
                        }
                    }
                    else {
                        if (firstclick !== secondclick) {
                            setTimeout(function(){
                                hide_card(firstclick);
                                hide_card(secondclick);
                                attempts+=1;
                                display_stats();
                                resetclicks();
                            }, 200);
                        };
                        console.log('you picked the wrong cards');
                    }

                }
            });
        }
    function hide_card(card)  {
            var showcardface = $(card).attr("cardface");
            $(card).removeClass(showcardface);
        }
        function display_stats() {
            $(".games-played .value").text(games_played);
                if (games_played < 10) {
                    $(".games-played .value").text("0" + games_played);
                }
            $(".attempts .value").text(attempts);
                if (attempts < 10) {
                    $(".attempts .value").text('0' + attempts)
                }
                accuracy = Math.floor(matches/attempts*100)+"%";
                    if (matches===0&attempts===0){
                        accuracy=0 + "%";
                                            }
            $(".accuracy .value").text(accuracy);
                                                 }
                    function reset_stats(){
                        accuracy = 0;
                        matches = 0;
                        attempts = 0;
                        display_stats();
                        // if (games_played === 10) {
                        //     $(".games-played .value").text(games_played);
                        // }
                                         }

                            function reset() {
                                $(".reset").click(function(){
                                    // games_played++;
                                    console.log('game has been reset');
                                    $("#game-area").html("");
                                    createnewcards();
                                    // $(".card").removeClass("hidden");
                                    // $(".card").removeClass(matchedelements);
                                    if (firstclick !== null) {
                                        var turnbackonecard = firstclick.classList[2];
                                        $(firstclick).removeClass(turnbackonecard);
                                        resetclicks();
                                    }
                                    //push matched elements to an array so that I can call them back later whenever i reset the game
                                    //also see if i can reset the values inside the array everytime I press the reset button, maybe another function
                                    reset_stats();
                                        });

                                        function randomize() {
                                            for(var i=0;i<18;i++) {
                                                var random = Math.floor(Math.random()* 18);
                                                console.log(random)
                                            }
                                        }
                                    }
                           function turnback() {
                               $(firstmatch).css("visibility","visible");
                                 $(secondmatch).css("visibility","visible");
                                   $(firstmatch).toggleClass(firstclass);
                                    $(secondmatch).toggleClass(secondclass);
                                    }


                function createnewcards() {
                    var Index = 0;
                    var cardBack = ["bluemap", "darkpurplemap", "greenmap", "lightpurplemap", "pinkmap", "redmap"];
                    var cardFaces = ["apple","apple","blueghost","blueghost","cherry","cherry","lightblueghost","lightblueghost","orangeghost","orangeghost","pacman","pacman","strawberry","strawberry","pinkghost","pinkghost","redghost","redghost"];
                    var randomFaces = randomgenerator(cardFaces);
                    var classIndex = 0;

            for (var i = 0; i < 18; i++){
                var front = $("<div>").addClass('card ' + cardBack[classIndex]);
                var frontcard = front.attr('cardFace',randomFaces[i]);
                classIndex++;
                $("#game-area").append(front);
                if (classIndex === 6){
                    classIndex = 0;
                }
            }
            clickcard();
           }
   function insertcointocontinue() {
        $(".reset").click(function(){
            youwon.pause();
            startgame.play();
            games_played++;
            // $("body").addClass("bodyimage");
            $("#game-area").removeClass("insertcointoplay");
            $("#game-area").removeClass("playagain");
            $("#gotcherry").removeClass("addcherry");
            $("#gotstrawberry").removeClass("addstrawberry");
            $("#gotapple").removeClass("addapple");
            console.log('hello!');
            createcards();
        })
   }
var randomnumber = null;
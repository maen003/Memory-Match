var firstclick = null;
var secondclick = null;
$(document).ready(function(){

    $("#card1").addClass('bluemap').click(function () {
        $(this).toggleClass('apple')
    });
    $("#card2").addClass('darkpurplemap').click(function () {
        $(this).toggleClass('blueghost')
    });
    $("#card3").addClass('greenmap').click(function () {
        $(this).toggleClass('cherry')
    });
    $("#card4").addClass('lightpurplemap').click(function () {
        $(this).toggleClass('lightblueghost')
    });
    $("#card5").addClass('pinkmap').click(function () {
        $(this).toggleClass('orangeghost')
    });
    $("#card6").addClass('redmap').click(function () {
        $(this).toggleClass('pacman')
    });
    $("#card7").addClass('bluemap').click(function () {
        $(this).toggleClass('strawberry')
    });
    $("#card8").addClass('darkpurplemap').click(function () {
        $(this).toggleClass('pinkghost')
    });
    $("#card9").addClass('greenmap').click(function () {
        $(this).toggleClass('redghost')
    });
    $("#card10").addClass('lightpurplemap').click(function () {
        $(this).toggleClass('apple')
    });
    $("#card11").addClass('pinkmap').click(function () {
        $(this).toggleClass('cherry')
    });
    $("#card12").addClass('redmap').click(function () {
        $(this).toggleClass('pinkghost')
    });
    $("#card13").addClass('bluemap').click(function () {
        $(this).toggleClass('lightblueghost')
    });
    $("#card14").addClass('darkpurplemap').click(function () {
        $(this).toggleClass('pacman')
    });
    $("#card15").addClass('greenmap').click(function () {
        $(this).toggleClass('blueghost')
    });
    $("#card16").addClass('lightpurplemap').click(function () {
        $(this).toggleClass('redghost')
    });
    $("#card17").addClass('pinkmap').click(function () {
        $(this).toggleClass('orangeghost')
    });
    $("#card18").addClass('redmap').click(function () {
        $(this).toggleClass('strawberry')
    });




        function apple() {
            $(".card").click(function(){
                console.log(this);
                if (firstclick === null) {
                    firstclick = this;
                    return;
                }
                else {
                    secondclick = this;
                    if ($(firstclick).css("background-image") === $(secondclick).css("background-image")){
                        console.log("23432");
                        $(firstclick).css("visibility","hidden");
                        $(secondclick).css("visibility","hidden");
                    }
                    else {
                        console.log('later');
                    }
                }
            })}
    apple();

});  //end of document.ready function


    // var cherry = null;
    // var apple = null;
    // var pacman = null;
    // var redghost = null;
    // var blueghost = null;
    // var lightblueghost = null;
    // var pinkghost = null;
    // var strawberry = null;
    // var orangeghost = null;









var firstclick = null;
var secondclick = null;
var firstclass = null;
var secondclass = null;
var firstid = null;
var secondid = null;
var total_possible_matches = 2;
var match = 0;
$(document).ready(function(){
        //Row 1
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
        //Row 2
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
                //Row 3
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

        function resetclicks() {
            firstclick=null;
            secondclick=null;
            console.log("clicks have been reset")
        }

        function clickcard() {
            $(".card").click(function(){
                console.log(this);
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

                    if (firstid === secondid){
                        resetclicks();
                        $(firstclick).toggleClass(firstclass);
                        $(secondclick).toggleClass(secondclass);
                        console.log('dont pick the same card')
                    }
                    else {
                        if ($(firstclick).css("background-image") === $(secondclick).css("background-image")){
                            console.log("It's a match!");
                            setTimeout(function(){
                                $(firstclick).css("visibility","hidden");
                                $(secondclick).css("visibility","hidden");
                                resetclicks();
                            },150);
                        }
                            else {
                                if (firstclick !== secondclick) {
                                    setTimeout(function(){
                                        $(firstclick).toggleClass(firstclass);
                                        $(secondclick).toggleClass(secondclass);
                                        resetclicks();
                                    }, 250);
                                }
                                console.log('you picked the wrong cards');
                        }
                    }
                    //end of if statement





                    // if ($(firstclick).css("background-image") === $(secondclick).css("background-image")){
                    //     console.log("It's a match!");
                    //     setTimeout(function(){
                    //         $(firstclick).css("visibility","hidden");
                    //         $(secondclick).css("visibility","hidden");
                    //         resetclicks();
                    //     },150);
                    // }
                    // else {
                    //     if (firstclick !== secondclick) {
                    //         setTimeout(function(){
                    //             $(firstclick).toggleClass(firstclass);
                    //             $(secondclick).toggleClass(secondclass);
                    //             resetclicks();
                    //         }, 250);
                    //     }
                    //         console.log('you picked the wrong cards');
                    // }
                }
            })
        }
    clickcard();



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









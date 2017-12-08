var topics = ["Goku", "Vegeta", "Krillin", "Gohan", "Goten", "Trunks", "Piccolo", "Majin Buu", "Frieza", "Master Roshi"]

//function and loop so that these turn into buttons on the html
$(document).ready(function() {

    function swish() {
        $("#buttons").empty();
        for (i = 0; i < topics.length; i++) {
            var heroes = $("<button>");
          
            heroes.attr("class", "heroesTwo")
            heroes.text(topics[i]);
            heroes.attr("data-hero", topics[i]); //<button data-hero="Goku"></button>
            $("#buttons").append(heroes);

        }
    };

    //on click event that makes it so you can add a hero 
    $("#addHero").on("click", function(swoosh) {
        swoosh.preventDefault();
        var topicss = $("#heroInput").val().trim();
        topics.push(topicss);
        swish();
    });



    //how do I add space between my buttons 

    //function so that when my buttons are clicked the gifs appear

    $(document).on("click",".heroesTwo", function(brick) {
        
        console.log("clicked button");
        




        var hero = $(this).text();
        // var hero = $(this).attr("data-hero");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            hero + "&api_key=dc6zaTOxFJmzC&limit=10";

        console.log(queryURL);
        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .done(function(response) {
                console.log("ajax.done")
                var results = response.data
                for (var i = 0; i < results.length; i++) {
                    var gifs = $("<div class='clue'>");
                    var rating = results[i].rating;
                    var p = $("<p>").text("Rating: " + rating);
                    var image = $("<img>");
                    image.attr("src", results[i].images.fixed_height.url);
                    
                    gifs.prepend(p);
                    gifs.prepend(image);
                    $("#gifsHere").prepend(gifs);
                }


            })
    });

//getting the gifs to appear static at first and then animate on the click and vice versa 
//make it only 10 gifs at a time



    swish();

});
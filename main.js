// Game logic

// api key = 7kIYFwakapwX5tKnveS4JHkXnDD53Zc3

// buttons to be created from this array
var topics = ["bugs bunny", "daffy duff", "tasmanian" ]

// create buttons from var topics
for (var i =0; i < topics.length; i++){
    console.log(topics.length)
    // create a new button
    var newButton = $("<button>")
    // give the new button an attribute of its index
    newButton.attr("data-name", topics[i])
    // give the button its text
    newButton.text(topics[i])
    console.log(newButton)
    $("#buttonAppear").append(newButton)
}

// connect to gifhy api
$("button").on("click", function(){

    var looneys = $(this).attr("data-name");
    var queryURL = "https:api.giphy.com/v1/gifs/search?q=" + looneys + "&api_key=7kIYFwakapwX5tKnveS4JHkXnDD53Zc3";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response)
        var results = response.data;
        for(var i =0; i < results.length; i++){
            var looneyDiv = $("<div>");
            var p = $("<p>");
            p.text("Rating: " + results[i].rating)
            // console.log(results[i].rating)
            var looneyImg = $("<img>");
            looneyImg.attr("src", results[i].images.fixed_height.url)
            // console.log(results[i].images.fixed_height.url)
            looneyDiv.append(p);
            looneyDiv.append(looneyImg);

            // prepend to the dom
            $("#gifs-appear-here").prepend(looneyImg)
        }
    });
});

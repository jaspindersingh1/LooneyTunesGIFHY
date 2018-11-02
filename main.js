// Game logic

// PHASE 1: create an array, dynamically create buttons for that array, connect to api and display images to the html page
// PHASE 2: add new items to the array, fix display ratings (currently not showing)

// api key = 7kIYFwakapwX5tKnveS4JHkXnDD53Zc3

// buttons to be created from this array
var topics = ["Bugs Bunny", "Daffy Duff", "Tasmanian Devil" ]

// create buttons from var topics and put in a function
// function renderButtons() {
    for (var i =0; i < topics.length; i++){
        // console.log(topics.length)
        // create a new button
        var newButton = $("<button>")
        newButton.addClass("cartoonButton");
        // give the new button an attribute of its index
        newButton.attr("data-name", topics[i])
        // give the button its text
        newButton.text(topics[i])
        // console.log(newButton)
        $("#buttonAppear").append(newButton)
    }
// }

// connect to gifhy api
    $(".cartoonButton").on("click", function(){
        // function displayCartoons() {
            var looneys = $(this).attr("data-name");
            var queryURL = "https:api.giphy.com/v1/gifs/search?q=" + looneys + "&api_key=7kIYFwakapwX5tKnveS4JHkXnDD53Zc3&limit=10";

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response){
                console.log(response)
                var results = response.data;
                for(var i =0; i < results.length; i++){
                    var looneyDiv = $("<div>");
                    var p = $("<p>");
                    // console.log(p)
                    p.text("Rating: " + results[i].rating)
                    // console.log(results[i].rating)
                    var looneyImg = $("<img>");
                    looneyImg.attr("src", results[i].images.fixed_height.url)
                    // console.log(results[i].images.fixed_height.url)
                    // looneyDiv.append(p); THIS DOES NOT SHOW THE P TAG IN THE CONSOLE.
                    looneyImg.append(p); // THIS SHOWS THE P TAG IN THE CONSOLE.
                    looneyDiv.append(looneyImg);

                    // prepend to the dom
                    $("#gifs-appear-here").prepend(looneyImg);
                }
            });
        // }
    });


// function to add new cartoons from user
    $("#add-looney").on("click", function (event){
        // console.log(event)
        event.preventDefault();
        // grab the input from the searchbox
        var newLooney = $("#search-term").val().trim();
        // add search term to a new button and append to html
        var looneyButton = $("<button>")
        // console.log(looneyButton);
        looneyButton.addClass("cartoonButton");
        // give the new button an attribute of its index
        looneyButton.attr("data-name", newLooney)
        // give the button its text
        looneyButton.text(newLooney)
        // console.log(newButton)
        $("#buttonAppear").append(looneyButton)
        console.log(newLooney);
        // push new search to the topics array 
        topics.push(newLooney);
        console.log(topics)

        // renderButtons();
    });

    // Adding a click event listener to all elements with a class of "cartoonButton"
    $(document).on("click", ".cartoonButton", function(){
    })

    // Calling the renderButtons function to display the intial buttons
    // renderButtons();
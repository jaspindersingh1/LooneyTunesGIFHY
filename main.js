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
                // console log the response from the api
                console.log(response)
                // store the respone in a result variable for easy use
                var results = response.data;
                // run a for loop to create new divs in the array 
                for(var i =0; i < results.length; i++){
                    // create and store the div in a variable
                    var looneyDiv = $("<div>");
                    // create a paragrapah tag and store in a var
                    var p = $("<p>");
                    // console.log(p)
                    // get the ratings from the array and add the text to the paragraph
                    p.text("Rating: " + results[i].rating)
                    // console.log(results[i].rating)
                    // create new image tag and variable
                    var looneyImg = $("<img>");
                    // add an attribute to the grab the image from the reponse array
                    looneyImg.attr("src", results[i].images.fixed_height.url)
                    // console.log(results[i].images.fixed_height.url)
                    // append the rating to the image
                    looneyImg.append(p);
                    // append the image to the new div created
                    looneyDiv.append(looneyImg);
                    // prepend image and ratings to the dom
                    $("#gifs-appear-here").prepend(looneyImg);
                    $("#gifs-appear-here").prepend(p);  
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
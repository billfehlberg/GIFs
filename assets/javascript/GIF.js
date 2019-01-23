//create entry and submit button in html
//write the values from the submission to create a button with the entered text
var sports = ["golf", "baseball", "volleyball"];
var input = "baseball";

function addDynamicButton(buttonText)  {
    var button = $("<button>");
    button.text(buttonText)
    $("#sport-view").append(button);
}

function displaySportGifs()   {
    var sportName = $(this).attr("data-name");
    var APIKey = "wBHVSLIThNZhXx17AlZz2hPZ1CC9PaRK";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + sportName + "&api_key=" + APIKey + "&limit=10";
    
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response)  {
        var gifDiv = $("<div class='gif'>");
        var rating = response.data[0].rating;
        var pOne = $("<p>").text("Rating: " + rating);
        gifDiv.append(pOne);
        $('#gif-view').prepend(gifDiv);

        console.log(response);
        console.log(sportName);
        console.log(rating);
    });
    alert(sportName);
}
function renderButtons()    {
    $("#sport-view").empty();
    for (var i =0; i < sports.length; i++)  {
        var a = $("<button>");
        a.addClass("sport");
        a.attr("data-name", sports[i]);
        a.text(sports[i]);
        $("#sport-view").append(a);
    }
}

    $("#add-sport").on("click", function(event)   {
        event.preventDefault();
        var sport = $("#sport-input").val().trim();
        sports.push(sport);
        renderButtons();
});
renderButtons();

$(document).on("click", ".sport", displaySportGifs);

//create functions tied to the rendered buttons to call GIPHY



//var APIKey = "wBHVSLIThNZhXx17AlZz2hPZ1CC9PaRK";
//var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=" + APIKey + "&limit=";
//
//$.ajax({
//    url: queryURL,
//    method: 'GET'
//}).then(function(response)  {
//    console.log(response);
//    console.log(input);
//});



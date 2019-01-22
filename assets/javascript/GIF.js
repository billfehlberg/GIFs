//create entry and submit button
//write the values from the submission to create a button with the entered text
var APIKey = "wBHVSLIThNZhXx17AlZz2hPZ1CC9PaRK";
var queryURL = "https://api.giphy.com/v1/gifs/search?q=golf&api_key=" + APIKey + "&limit=10";

$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function(response)  {
    console.log(response);
});


var NASA_API_KEY = 'EQzgRUB1sMiKLrZo4kd6KPNbIgKB95FV9jaGtVQA'

function getRoverImage(day) {
    return fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=' + day + '&api_key=' + NASA_API_KEY)
        .then(function (response) {
                return response.json()
            }
        )
}

function getShakespeareQuote(quoteName, successFunction, failureFunction) {
    if (!quoteName) {
        quoteName = 'shakespeare';
    }
    WikiquoteApi.getRandomQuote(quoteName, successFunction, failureFunction)
}


$(document).ready(function () {
    getShakespeareQuote(null, function (quote) {
        console.log(quote)
    }, function (error) {
        console.log(error)
    });

    getRoverImage(1000).then(function (response) {
        console.log(response);
    })

});

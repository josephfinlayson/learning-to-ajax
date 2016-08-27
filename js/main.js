'use strict';

function getGuardianArticle() {
    return fetch('https://content.guardianapis.com/search?api-key=66c812c1-bb8a-452e-8376-f4018592efe9&show-fields=thumbnail')
        .then(response => {
            return response.json()
        })
        .then(function (response) {
            return response.response.results[0];
        })
}


$(document).ready(function () {
    getGuardianArticle()
        .then(function (response) {
            $('.main').append('<h1>'+response.webTitle +'</h1>')
        });
})

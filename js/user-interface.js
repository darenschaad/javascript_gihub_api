var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/github-interface.js').getRepos;

$(document).ready(function() {
  $('#userName').submit(function(event) {
    event.preventDefault();
    var userName = $('#name').val();
    $('#name').val("");
    getRepos(userName);
  });
});

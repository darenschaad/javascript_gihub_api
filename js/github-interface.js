var apiKey = require('./../.env').apiKey;



exports.getRepos = function(userName){
  $.get('https://api.github.com/users/'+ userName +  '/repos?access_token=' + apiKey).then(function(response){
      $('#gitName').html("User Name: " + response[0].owner.login)
      $('#repos').empty();
      // $('#gitPic').empty();
      // $('#gitPic').show();
      $('#gitPic').html("<img src='" + response[0].owner.avatar_url +  "'alt='github user avatar'/><br>");
      $('#repos').html("<h3>Repositories</h3>");
      $('#created').html("<h3>Created On</h3>");
      $('#updated').html("<h3>Updated On</h3>");
    for (var i = 0 ; i < response.length ; i++){
      $('#repos').append(response[i].name + "<br>");
    }
    for (var j = 0 ; j < response.length ; j++){
      $('#created').append(moment(response[j].created_at).format("MMM Do YYYY") + "<br>");
    }
    for (var k = 0 ; k < response.length ; k++){
      $('#updated').append(moment(response[k].pushed_at).format("MMM Do YYYY") + "<br>");
    }
    console.log(moment(response[0].created_at).calendar());
    // console.log(JSON.stringify(response));
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

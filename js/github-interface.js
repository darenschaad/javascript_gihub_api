var apiKey = require('./../.env').apiKey;



exports.getRepos = function(userName){
  $.get('https://api.github.com/users/'+ userName +  '/repos?access_token=' + apiKey).then(function(response){
      $('#gitName').html(response[0].owner.login)
      $('#repos').empty();
      // $('#gitPic').empty();
      // $('#gitPic').show();
      $('#gitPic').html("<img src='" + response[0].owner.avatar_url +  "'alt='github user avatar'/><br>");
      $('#repos').html("<h3>Repositories</h3>");
    for (var i = 0 ; i < 20 ; i++){
      $('#repos').append(response[i].name + "<br>");
    }
    console.log(response[0].owner.avatar_url);
    // console.log(JSON.stringify(response));
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

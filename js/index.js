const fs = require('fs');
const my_folder = "../imgs/logos/";

fs.readdir(my_folder, (err, files) =>{


files.forEach(file => {

  var source = "imgs/logo/" + file
  var my_div = '<img class = "press-logo" src = "'+ source + '" alt = "tc-logo">';
//  <img class="press-logo logo-villas" src="imgs/logo-cinco-villas.svg" alt="tc-logo">
$('#target').append(my_div);
  console.log(my_div);
})

})

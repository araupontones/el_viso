let logos = ["logo-cinco-villas.svg",
"uncastillo.png",
"banales.jpg",
"arcess.png",
"cedres.JPG",
"celma.jpg",
"ciclos_aragon.png",
"equipaziones2.png",
"frago.jpg",
"olnasa.jpg",
"peman.png",
"podoactiva.png",
"pulpodata.png",
"una.jpg",

];



  console.log(source);

  for (let i = 0; i < logos.length; i++) {
      console.log(logos[i]);
      l = logos[i];
      var source = "imgs/logos/" + l;
      //$('#logos').append('<div>hola</div>');
      $('#logos').append(  '<div class="col-4 col-md-3 my-auto">  <img class="img-fluid logo" src="'+source+'" alt=""></div>');
  }

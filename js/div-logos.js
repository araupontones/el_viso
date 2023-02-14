let logos = ["logo-cinco-villas.svg",
"uncastillo.png",
"Ambar.png",
"arcess.png",
"arcess_reno.jpg",
"banales.jpg",
"cedres.JPG",
"celma.jpg",
"CeraBike.jpg",
"ciclos_aragon.png",
"cronolimits.png",
"equipaziones2.png",
"frago.jpg",
"frutas.png",
"gm.jpeg",
"hasta_luna.jpeg",
"joseluis.png",
"justo.jpg",
"lacasa.png",
"lamarca.jpeg",
"lapieza.png",
"olnasa.jpg",
"pasion.jpg",
"peman.png",
"podoactiva.png",
"pulpodata.png",
"una.jpg",
"uncastelum.png",
"vanguardia.jpg"

];



  console.log(source);

  for (let i = 0; i < logos.length; i++) {
      console.log(logos[i]);
      l = logos[i];
      var source = "imgs/logos/" + l;
      //$('#logos').append('<div>hola</div>');
      $('#logos').append(  '<div class="col-4 col-md-3 my-auto">  <img class="img-fluid logo" src="'+source+'" alt=""></div>');
  }

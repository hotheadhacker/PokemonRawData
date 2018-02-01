const request = require('request');
var sortBy = require('sort-by'),
    users = [];
//Task 1
    request({
      url: 'https://raw.githubusercontent.com/Biuni/PokemonGOPokedex/master/pokedex.json',
      json: true
    }, (error, response, body) => {
    //  console.log(`Address: ${body.pokemon[0].spawn_chance}`);
    //save data in descending order
      users = body.pokemon.sort(sortBy('-spawn_chance', 'id'));

      var result = users.slice(0, 9);
      console.log("Printing Top 10 spawn_chance: ");
      console.log(result);
       //Group the Pokemon based on their evolution and printing
    //console.log(`Address: ${body.pokemon[0].name}`);
      //  console.log(body.pokemon[0].id});
     // (${body.pokemon.pre_evolution[1]}) --> (${body.pokemon.name}) --> ( ${body.pokemon.next_evolution} )');


    });

//Task 2
console.log('----------------------------------------TASK Starts---------------------------------------------------------------');
request({
  url: 'https://raw.githubusercontent.com/Biuni/PokemonGOPokedex/master/pokedex.json',
  json: true
}, (error, response, body) => {
  console.log('Printing Task 2');

  var i = 1;

  while(i<150){

    console.log(`${body.pokemon[i].name}`);
      console.log(body.pokemon[i].prev_evolution[0].name);
      console.log('-->');
      console.log(body.pokemon[i].name);
      console.log('-->');
      console.log(body.pokemon[i].next_evolution[0].name);
      console.log('-------------------------------------------');

//        (${body.pokemon[i].prev_evolution}) --> (${body.pokemon[i].name}) --> ( ${body.pokemon[i].next_evolution} )  `);
//      // (${body.pokemon[i].pre_evolution}) --> (${body.pokemon[i].name}) --> ( ${body.pokemon[i].next_evolution} ) `);
// //console.log(body.pokemon[i].next_evolution.name);
    i++;
  }


  // (${body.pokemon.pre_evolution[1]}) --> (${body.pokemon.name}) --> ( ${body.pokemon.next_evolution} )');
});

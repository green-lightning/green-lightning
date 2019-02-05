function narcotics_generator(range,modifier){

  var random_range = Math.floor(Math.random() * range)
  var value =  ((random_range) * modifier)
  console.log(random_range, value)

  return(
    Math.round(value) //returns random value between 1-100
  )
}

var defaults = {
  gameInitialized: false,
  newGame: true,
  credits: 1000,
  selectedPlanetId: 'terra',
  currentPlanetId: 'terra',
  destinationPlanet: null,
  username: 'Captain Beefheart',
  level: 1,
  xp: 1,
  shipModel: 'The Baby Destroyer',
  shipMake: 'Lazer Products Corporation',
  shipHoldLimit: 10,
  playerInventory: {
    water: 8,
    gold: 3,
    antibiotics: 12,
    narcotics: 0,
    furs: 0,
    seeds: 0,
  },
  crew: [],
  fuelCapacity: 20,
  fuel: 20,
  daysPassed: 0,
  settings: {
    music: false,
  },
  items:{
    water:{
      properties:{
        base_Price:250,
        legal: true,
        //... other properties ...
      },
      "terra":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "mercurion":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "orias":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "rust":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "k787":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "sunspeared":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "chindi":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "omega":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "ark":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "aquaris":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
    },
    gold:{
      properties:{
        base_Price:250,
        legal: true,
        //... other properties ...
      },
      "terra":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "mercurion":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "orias":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "rust":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "k787":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "sunspeared":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "chindi":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "omega":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "ark":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "aquaris":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
   },
    antiobiotics:{
      properties:{
        base_Price:250,
        legal: true,
        //... other properties ...
      },
      "terra":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "mercurion":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "orias":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "rust":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "k787":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "sunspeared":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "chindi":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "omega":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "ark":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "aquaris":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
       },
    },
    narcotics:{
      properties:{
        base_Price:250,
        legal: false,
        //... other properties ...
      },
      "terra":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "mercurion":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "orias":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "rust":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "k787":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "sunspeared":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "chindi":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "omega":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "ark":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "aquaris":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
    },
    furs:{
      properties:{
        base_Price:250,
        legal: true,
        //... other properties ...
      },
      "terra":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "mercurion":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "orias":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "rust":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "k787":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "sunspeared":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "chindi":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "omega":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "ark":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "aquaris":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
    },
    seeds:{
      properties:{
        base_Price:250,
        legal: true,
        //... other properties ...
      },
      "terra":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "mercurion":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "orias":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "rust":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "k787":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "sunspeared":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "chindi":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "omega":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "ark":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
      "aquaris":{
        quantity_range: 101,
        quantity_modifier: .25,
        price_modifier: 5,
      },
    },
},
  planetInventories: {
    terra: {
      narcotics: narcotics_generator(100,1.5),
      furs: 6,
      seeds: 21,
      gold: 20,
      water: 100,
      antibiotics: 50,
    },
    mercurion: {
      narcotics: 20,
      furs: 0,
      seeds: 0,
      gold: 200,
      water: 0,
      antibiotics: 50,
    },
    orias: {
      narcotics: 4,
      furs: 3,
      seeds: 2,
      gold: 10,
      water: 10,
      antibiotics: 3,
    },
    rust: {
      narcotics: 2,
      furs: 3,
      seeds: 1,
      gold: 30,
      water: 5,
      antibiotics: 5,
    },
    k787: {
      narcotics: 0,
      furs: 0,
      seeds: 0,
      gold: 1000,
      water: 0,
      antibiotics: 0,
    },
    sunspeared: {
      narcotics: 8,
      furs: 6,
      seeds: 2,
      gold: 25,
      water: 5,
      antibiotics: 12,
    },
    chindi: {
      narcotics: 4,
      furs: 6,
      seeds: 1,
      gold: 2,
      water: 29,
      antibiotics: 25,
    },
    omega: {
      narcotics: 40,
      furs: 6,
      seeds: 10,
      gold: 5,
      water: 52,
      antibiotics: 10,
    },
    ark: {
      narcotics: 0,
      furs: 100,
      seeds: 210,
      gold: 0,
      water: 300,
      antibiotics: 0,
    },
    aquaris: {
      narcotics: 0,
      furs: 0,
      seeds: 0,
      gold: 25,
      water: 10000,
      antibiotics: 3,
    },
  },
  planetPrices: {
    terra: {
      narcotics: 50,
      furs: 2,
      seeds: 3,
      gold: 250,
      water: 6,
      antibiotics: 30,
    },
    mercurion: {
      narcotics: 100,
      furs: 2,
      seeds: 3,
      gold: 250,
      water: 6,
      antibiotics: 300,
    },
    orias: {
      narcotics: 300,
      furs: 6,
      seeds: 3,
      gold: 250,
      water: 6,
      antibiotics: 200,
    },
    rust: {
      narcotics: 600,
      furs: 2,
      seeds: 1,
      gold: 250,
      water: 6,
      antibiotics: 60,
    },
    k787: {
      narcotics: 50,
      furs: 2,
      seeds: 3,
      gold: 250,
      water: 6,
      antibiotics: 20,
    },
    sunspeared: {
      narcotics: 200,
      furs: 6,
      seeds: 3,
      gold: 250,
      water: 6,
      antibiotics: 80,
    },
    chindi: {
      narcotics: 100,
      furs: 10,
      seeds: 5,
      gold: 250,
      water: 6,
      antibiotics: 60,
    },
    omega: {
      narcotics: 250,
      furs: 2,
      seeds: 34,
      gold: 250,
      water: 6,
      antibiotics: 50,
    },
    ark: {
      narcotics: 1000,
      furs: 6,
      seeds: 3,
      gold: 250,
      water: 6,
      antibiotics: 500,
    },
    aquaris: {
      narcotics: 50,
      furs: 2,
      seeds: 3,
      gold: 250,
      water: 6,
      antibiotics: 90,
    },
  },
};

module.exports = defaults;

let defaultPrices
, defaultQuantities;

export function newPrices() {
  let newPrices = {};
  Object.keys(defaultPrices).map((planet) => {
    newPrices[planet] = {};
    Object.keys(defaultPrices[planet]).map((item) => {
      let basePrice = (defaultPrices[planet][item]);
      newPrices[planet][item] = getRandomPositiveInt((basePrice * 0.8), (basePrice * 1.2));
    });
  });
  return newPrices;
}

export function newQuantities() {
  let newQuantities = {};
  Object.keys(defaultQuantities).map((planet) => {
    newQuantities[planet] = {};
    Object.keys(defaultQuantities[planet]).map((item) => {
      let baseQuantity = (defaultQuantities[planet][item]);
      newQuantities[planet][item] = getRandomPositiveInt((baseQuantity * 0.5), (baseQuantity * 1.5));
    });
  });
  return newQuantities;
}

function getRandomPositiveInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.abs(Math.floor(Math.random() * (max - min + 1)) + min);
}


defaultPrices = {
  terra: {
    narcotics: 500,
    furs: 25,
    seeds: 15,
    gold: 250,
    water: 5,
    antibiotics: 200,
  },
  mercurion: {
    narcotics: 500,
    furs: 25,
    seeds: 15,
    gold: 250,
    water: 5,
    antibiotics: 200,
  },
  orias: {
    narcotics: 500,
    furs: 25,
    seeds: 15,
    gold: 250,
    water: 5,
    antibiotics: 200,
  },
  rust: {
    narcotics: 500,
    furs: 25,
    seeds: 15,
    gold: 250,
    water: 5,
    antibiotics: 200,
  },
  k787: {
    narcotics: 500,
    furs: 25,
    seeds: 15,
    gold: 250,
    water: 5,
    antibiotics: 200,
  },
  sunspeared: {
    narcotics: 500,
    furs: 25,
    seeds: 15,
    gold: 250,
    water: 5,
    antibiotics: 200,
  },
  chindi: {
    narcotics: 500,
    furs: 25,
    seeds: 15,
    gold: 250,
    water: 5,
    antibiotics: 200,
  },
  omega: {
    narcotics: 500,
    furs: 25,
    seeds: 15,
    gold: 250,
    water: 5,
    antibiotics: 200,
  },
  ark: {
    narcotics: 500,
    furs: 25,
    seeds: 15,
    gold: 250,
    water: 5,
    antibiotics: 200,
  },
  aquaris: {
    narcotics: 500,
    furs: 25,
    seeds: 15,
    gold: 250,
    water: 5,
    antibiotics: 200,
  },
};

defaultQuantities = {
  terra: {
    narcotics: 5,
    furs: 15,
    seeds: 20,
    gold: 8,
    water: 18,
    antibiotics: 3,
  },
  mercurion: {
    narcotics: 5,
    furs: 15,
    seeds: 20,
    gold: 8,
    water: 18,
    antibiotics: 3,
  },
  orias: {
    narcotics: 5,
    furs: 15,
    seeds: 20,
    gold: 8,
    water: 18,
    antibiotics: 3,
  },
  rust: {
    narcotics: 5,
    furs: 15,
    seeds: 20,
    gold: 8,
    water: 18,
    antibiotics: 3,
  },
  k787: {
    narcotics: 5,
    furs: 15,
    seeds: 20,
    gold: 8,
    water: 18,
    antibiotics: 3,
  },
  sunspeared: {
    narcotics: 5,
    furs: 15,
    seeds: 20,
    gold: 8,
    water: 18,
    antibiotics: 3,
  },
  chindi: {
    narcotics: 5,
    furs: 15,
    seeds: 20,
    gold: 8,
    water: 18,
    antibiotics: 3,
  },
  omega: {
    narcotics: 5,
    furs: 15,
    seeds: 20,
    gold: 8,
    water: 18,
    antibiotics: 3,
  },
  ark: {
    narcotics: 5,
    furs: 15,
    seeds: 20,
    gold: 8,
    water: 18,
    antibiotics: 3,
  },
  aquaris: {
    narcotics: 5,
    furs: 15,
    seeds: 20,
    gold: 8,
    water: 18,
    antibiotics: 3,
  },
};

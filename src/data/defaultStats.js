import { newPrices, newQuantities } from '../components/helpers/algorithm'

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
  planetInventories: newQuantities(),
  planetPrices: newPrices(),
};

module.exports = defaults;

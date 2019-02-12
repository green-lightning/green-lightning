import {
  CHANGE_SELECTED_PLANET,
  SET_DESTINATION,
  SET_CURRENT_PLANET,
  ASSIGN_GAME_DEFAULTS,
  REFILL_FUEL,
  TOGGLE_MUSIC,
  BUY_ITEMS,
  SELL_ITEMS,
  SET_USERNAME,
  CYCLE_DAY,
} from "../data/constants";

export function changeSelectedPlanet(planetId) {
  return {
    type: CHANGE_SELECTED_PLANET,
    planetId
  };
};

export function setDestination(planetId, fuelToBeUsed) {
  return {
    type: SET_DESTINATION,
    planetId,
    fuelToBeUsed,
  }
}

export function setCurrentPlanet(planetId) {
  return {
    type: SET_CURRENT_PLANET,
    planetId
  };
};

export function assignGameDefaults() {
  return {
    type: ASSIGN_GAME_DEFAULTS
  };
};

export function refillFuel(fuelNeeded, cost) {
  return {
    type: REFILL_FUEL,
    fuelNeeded,
    cost
  };
};

export function setUsername(username){
  return {
    type: SET_USERNAME,
    username: username,
  }
}
/*
//TO DO: uncomment when need to toggle music state
export function toggleMusic(){
  //console.log(toggle_value)
    return{
      type: TOGGLE_MUSIC
    }
};
*/



export function buyItems(currentPlanetId, itemName, buyPrice, buyQuantity) {
  return {
    type: BUY_ITEMS,
    currentPlanetId,
    itemName,
    buyPrice,
    buyQuantity
  };
};

export function sellItems(currentPlanetId, itemName, sellPrice, sellQuantity) {
  return {
    type: SELL_ITEMS,
    currentPlanetId,
    itemName,
    sellPrice,
    sellQuantity
  };
};

export function cycleDay() {
  return {
    type: CYCLE_DAY,
  };
};

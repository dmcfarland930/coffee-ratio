const UNIT_INITIAL_STATE = {
  'coffeeUnit': 'g',
  'waterUnit': 'gram'
};

const changeUnit = (unit) => {
  switch (unit) {
    case 'g':
      return {coffeeUnit: 'g', waterUnit: 'g'}
    case 'oz':
      return {coffeeUnit: 'oz', waterUnit: 'fl. oz'}
    default:
      break;
  }
}

export default function unitReducer(state=UNIT_INITIAL_STATE, action){
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      // Do something here based on the different types of actions
      case 'units/changeUnit':
        return {
          ...state, ...changeUnit(action.payload)
        }
      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state
    }
}
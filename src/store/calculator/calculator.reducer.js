const CALCULATOR_INITIAL_STATE = {
  'entry': 17,
  'result': 289,
};

const calculateResult = (payload) => {
  const {entry, unit} = payload;
  switch (unit) {
    case 'oz':
      return {'entry': entry, 'result': (entry * 16.27).toFixed(2)};
    default:
      return {'entry': entry, 'result': (entry * 17)};
  }
};

const convertOneCup = (unit) => {
  switch (unit) {
    case 'g':
      return {...calculateResult({'entry': 17, 'unit': 'g'})}
    case 'oz':
      return {...calculateResult({'entry': 1.06, 'unit': 'oz'})}
    default:
      break;
  }
}

export default function calculatorReducer(state=CALCULATOR_INITIAL_STATE, action){
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      // Do something here based on the different types of actions
      case 'calculator/calculateResult':
        return {
          ...state, ...calculateResult(action.payload)
        }
      case 'calculator/convertOneCup':
          return {
            ...state, ...convertOneCup(action.payload)
          }
      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state
    }
}
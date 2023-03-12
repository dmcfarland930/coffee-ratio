import { combineReducers } from "redux";

import calculatorReducer from "./calculator/calculator.reducer";
import unitReducer from "./units/unit.reducer";

const rootReducer = combineReducers(
  {
    calculator: calculatorReducer,
    unit: unitReducer
  }
);

export default rootReducer;
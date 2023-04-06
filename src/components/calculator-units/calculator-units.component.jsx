import { CalculatorUnitsContainer } from "./calculator-units.styles";
import CalculatorUnitButton from "../calculator-unit-button/calculator-unit-button.component";

const UNITS = [
  {
    'id': 0,
    'unit': 'g',
    'long': 'grams'
  },
  // {
  //   'id': 1,
  //   'unit': 'oz',
  //   'long': 'ounces'
  // },
];

const CalculatorUnits = () => {

  return (
    <CalculatorUnitsContainer spacing={2} direction="row">
      {UNITS.map((unitItem) => 
        <CalculatorUnitButton key={unitItem.id} unitItem={unitItem}/>
      )}
    </CalculatorUnitsContainer>
  )

}

export default CalculatorUnits;
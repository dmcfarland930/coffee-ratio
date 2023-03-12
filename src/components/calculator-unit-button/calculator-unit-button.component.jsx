import { useDispatch } from "react-redux";
import { CalcUnitButton } from "./calculator-unit-button.styles";

const CalculatorUnitButton = ({unitItem}) => {
  const { unit, long } = unitItem;
  const dispatch = useDispatch();
  
  const onClickHandler = () => {
    dispatch({ type: 'units/changeUnit', payload: unit });
    dispatch({ type: 'calculator/convertOneCup', payload: unit });
  }

  return (
    <CalcUnitButton value={unit} variant="contained" onClick={onClickHandler}>
      {unit} ({long})
    </CalcUnitButton>
  )
}

export default CalculatorUnitButton;
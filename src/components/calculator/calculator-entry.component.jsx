import { CalcInput } from "./calculator-entry.styles";

const CalculatorEntry = (props) => {

  const { entry, handleChange } = props;

  return (
    <div className="entry-field">
      <CalcInput
        name="entry" 
        type="number"
        value={entry} 
        onChange={handleChange}
      >
      </CalcInput>
    </div>
  )
}

export default CalculatorEntry;
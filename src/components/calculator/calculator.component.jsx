import { useSelector, useDispatch } from "react-redux";
import { Fragment } from "react";
import { Card, Divider, Typography } from "@mui/material";

import CardTitle from "../card/card-title.component";
import { 
  CalcContainer, 
  CalcContent, 
  CalcFieldContainer,
  CalcResult 
} from "./calculator.styles";

import CalculatorUnits from "../calculator-units/calculator-units.component";
import { CalcInput } from "../calculator-entry/calculator-entry.styles";

const Calculator = () => {

  const { entry, result } = useSelector(state => state.calculator);
  const { coffeeUnit, waterUnit } = useSelector(state => state.unit);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const {value} = event.target;

    dispatch({ 
      type: 'calculator/calculateResult', 
      payload: {
        'entry': value,
        'unit': coffeeUnit
      }
    });
  };

  return (
    <Fragment>
      <CalcContainer>
        <Card>
          <CardTitle titleText="Coffee to Water Ratio" />
          <CalcContent>
            <CalcFieldContainer>
              <Typography
                gutterBottom={true}
                sx={{
                  fontFamily: 'Pacifico, cursive',
                  fontWeight: 400,
                  fontSize: '1rem',
                  color: 'inherit',
                }}
                >
                The easiest Coffee to Water ratio calculator there is.
              </Typography>
            </ CalcFieldContainer>
            <Divider />
            <CalcFieldContainer>
              <Typography 
                gutterBottom={true}
                sx={{
                    fontFamily: 'Pacifico, cursive',
                    fontWeight: 400,
                    fontSize: '1rem',
                    color: 'inherit',
                  }}>
                Select unit for 1 cup of pour over coffee.
              </Typography>
            </CalcFieldContainer>            
            <CalcFieldContainer>
              <CalculatorUnits />
            </CalcFieldContainer>
            <Divider />
            <CalcFieldContainer>        
              <Typography
                sx={{
                  fontFamily: 'Pacifico, cursive',
                  fontWeight: 400,
                  fontSize: '1rem',
                  color: 'inherit',
                }}>
                Coffee ({coffeeUnit}):
              </Typography>
              <CalcInput
                name="entry" 
                type="number"
                value={entry} 
                onChange={handleChange}
              >
              </CalcInput>
            </CalcFieldContainer>
            <CalcFieldContainer>
              <CalcResult>
                <Typography
                  sx={{
                    fontFamily: 'Pacifico, cursive',
                    fontWeight: 400,
                    fontSize: '1rem',
                    color: 'inherit',
                  }}>
                  Water ({waterUnit}):
                </Typography>
                {result}
              </ CalcResult>
            </CalcFieldContainer>
            <Typography
              sx={{
                padding: 2,
                fontFamily: 'Pacifico, cursive',
                fontWeight: 400,
                fontSize: '1rem',
                color: 'inherit',
              }}
              >
              *This calculator uses a default ratio of 1:17. A scale is recommended to get an accurate pour.
            </Typography>
          </CalcContent>
        </Card>
      </CalcContainer>
    </Fragment>
  )
}

export default Calculator;
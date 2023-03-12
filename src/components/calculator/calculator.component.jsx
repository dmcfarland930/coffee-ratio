import { Fragment, useState } from "react";
import { Card, Typography } from "@mui/material";

import CardTitle from "../card/card-title.component";
import { 
  CalcContainer, 
  CalcContent, 
  CalcFieldContainer,
  CalcResult 
} from "./calculator.styles";

import { CalcInput } from "./calculator-entry.styles";

const defaulCalcFields = {
  'entry': 0,
};


const Calculator = () => {

  const [calcFields, setCalcFields] = useState(defaulCalcFields);
  const { entry } = calcFields;
  
  const handleChange = (event) => {
    const {name, value} = event.target;
    setCalcFields({ ...calcFields, [name]: value });
  };

  const calculateRatio = (entryVal) => {
    return entryVal * 17;
  };

  return (
    <Fragment>
      <CalcContainer>
        <Card>
          <CardTitle titleText="Coffee to Water Ratio" />
          <CalcContent>            
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
            <CalcFieldContainer>              
            <Typography
              sx={{
                fontFamily: 'Pacifico, cursive',
                fontWeight: 400,
                fontSize: '1rem',
                color: 'inherit',
              }}>
              Coffee (g):
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
                  Water (g):
                </Typography>
                {calculateRatio(entry)} 
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
              *This calculator uses a default ratio of 1:17
            </Typography>
          </CalcContent>
        </Card>
      </CalcContainer>
    </Fragment>
  )
}

export default Calculator;
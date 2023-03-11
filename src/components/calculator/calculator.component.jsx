import { Fragment, useState } from "react";
import { Card, Typography } from "@mui/material";

import CardTitle from "../card/card-title.component";
import { 
  CalcContainer, 
  CalcContent, 
  CalcFieldContainer,
  CalcEntry, 
  CalcResult 
} from "./calculator.styles";

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
    return `${(entryVal * 17).toString()}g`;
  };

  return (
    <Fragment>
      <CalcContainer>
        <Card>
          <CardTitle titleText="Enter Amount of Grounds (g)" />
          <CalcContent>
            <CalcFieldContainer>
              <CalcEntry 
                name="entry" 
                type="number" 
                value={entry} 
                onChange={handleChange} 
                label="Amount of Grounds (g)" variant="outlined" 
                />
            </CalcFieldContainer>
            <CalcFieldContainer>
              <CalcResult>
                {calculateRatio(entry)} 
              </ CalcResult>
            </CalcFieldContainer>
            <Typography>
              *This calculator uses a Ground to Water ratio of 1:17
            </Typography>
          </CalcContent>
        </Card>
      </CalcContainer>
    </Fragment>
  )
}

export default Calculator;
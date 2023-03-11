import styled from "styled-components";
import { Box, CardContent, TextField } from "@mui/material";

export const CalcContainer = styled(Box)`

`

export const CalcContent = styled(CardContent)`
  text-align: center;
`

export const CalcFieldContainer = styled.div`
  margin: 1rem;
`

export const CalcEntry = styled(TextField)`
`

export const CalcResult = styled.div`
  border-radius: 10px;
  border: 1px solid #BDBDBD;
  width: 20%;
  height: 20%;
  font-size: 2.2rem;
  margin: 0 auto;
  padding: 1rem;
`
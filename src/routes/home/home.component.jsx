import { Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Calculator from '../../components/calculator/calculator.component';

const Home = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Calculator />
      </Container>
    </Fragment>
  );
}

export default Home;
import './App.css';

import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from "react";

import Spinner from './components/spinner/spinner.component';

const Navigation = lazy(() => import('./routes/navigation/navigation.component'));
const Home = lazy(() => import('./routes/home/home.component'));


function App() {
  return (
    <Suspense fallback={<Spinner/>}>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />}/>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

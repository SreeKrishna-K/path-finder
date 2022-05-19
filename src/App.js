import './App.css';
import { useState } from 'react';
import Grid from './components/Grid'
import ShowGrid from './components/SingleGridComponent';


function App() {

  const [grid, setGrid] = useState(new Array(32).fill(0).map(() => new Array(32).fill(0)));

  return (
      <ShowGrid grid={grid}></ShowGrid>
      //<Grid grid={grid}></Grid>
  );
}

export default App;

import { Box } from '@mui/material';
import Header from './components/Header';
import Todos from './components/Todos';
import './App.css';

function App() {
  return (
    <Box>
      <Header/>
      <Todos/>
    </Box>
  );
}

export default App;

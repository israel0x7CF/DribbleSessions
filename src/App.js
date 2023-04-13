import { ChakraProvider,extendTheme } from '@chakra-ui/react'
import {HomePage} from './pages/HomePage'
import Navbar from './components/nav';
import './styles/style.css'

function App() {

  return (
    <ChakraProvider >
       <Navbar />
        <HomePage />
    </ChakraProvider>
  );
}

export default App;

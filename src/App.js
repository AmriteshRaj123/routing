import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './componenets/Home';
import About from './componenets/About';
import Signin from './componenets/Signin';
import Contact from './componenets/Contact';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import Register from './Components/Registerpage/Register';
import Navbar from './Components/Navbar/Navbar';
import {Routes , Route} from 'react-router-dom'
import Login from './Components/Login/Login';
function App() {
  return (
<div>
<Navbar />

<Routes>

<Route exact path='/register' element={<Register />} />
<Route exact path='/login' element={<Login />} />

</Routes>


</div>
  );
}

export default App;

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddPirate from './components/AddPirate';
import AllPirates from "./components/AllPirates"
import OnePirate from './components/OnePirate';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route  exact path = "/" default element={<AllPirates />} />
        <Route  exact path = "/pirates/new" element = {<AddPirate />} />
        <Route  exact path = "/pirates/:id/" element = {<OnePirate />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

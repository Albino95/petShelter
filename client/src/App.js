import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddPet from './components/AddPet';
import AllPets from "./components/AllPets"
import EditPet from './components/EditPet';
import OnePet from './components/OnePet'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route  exact path = "/" default element={<AllPets />} />
        <Route  exact path = "/pets/new" element = {<AddPet />} />
        <Route  exact path = "/pets/edit/:id/" element = {<EditPet />} />
        <Route  exact path = "/pets/:id/" element = {<OnePet />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

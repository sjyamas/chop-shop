import './App.css';
import CarList from "../Components/Car/CarList.jsx"
import StateTest from '../Components/Test/StateTest';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        {/* <StateTest/> */}
        <CarList/>
      </div>
    </div>
  );
}

export default App;

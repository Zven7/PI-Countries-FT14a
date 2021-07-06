import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './views/Home';
import CountryDetails from './views/CountryDetails/CountryDetails';
import { Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Henry Countries</h1>
      <Route exact path={['/', '/home']} component={NavBar}></Route>
      <Route path='/home' component={Home}></Route>
      <Route exact path='/detail/:id' component={CountryDetails}></Route>
    </div>
  );
}

export default App;

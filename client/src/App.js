import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import Home from './views/Home';
import QueryView from './views/QueryView/QueryView'
import CountryDetails from './views/CountryDetails/CountryDetails';
import { Route, Link, Switch } from 'react-router-dom';
import ActForm from './views/ActForm/ActForm';
import LandingPage from './views/Landing/LandingPage';
import Footer from './views/Footer';
import IncorrectPage from './views/IncorrectPage/IncorrectPage';

function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Route exact path={['/home', '/search/:queryParam', '/activity', '/detail/:id']} component={Header}/>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path={['/home']} component={NavBar}></Route>
        <Route path='/home' component={Home}></Route>
        <Route path='/search/:queryParam' component={QueryView}></Route>
        <Route exact path='/detail/:id' component={CountryDetails}></Route>
        <Route exact path='/activity' component={ActForm}></Route>
        <Route exact path={['/home', '/search/:queryParam', '/activity', '/detail/:id']} component={Footer}/>
        <Route path='*' component={IncorrectPage}></Route>
      </Switch> */}

    <Switch>
        <Route path='/search/:queryParam'>
          <Header />
          < QueryView />
          <Footer />
        </Route>
        <Route exact path='/detail/:id'>
          <Header />
          <CountryDetails />
          <Footer />
        </Route>
        <Route exact path='/activity'>
          <Header />
          <ActForm />
          <Footer />
        </Route>
        <Route path='/home'>
          <Header />
          <NavBar />
          <Home />
          <Footer />
        </Route>
        <Route exact path='/' component={LandingPage}/>
        <Route path='*' component={IncorrectPage}></Route>
      </Switch>
        
    </div>
  );
}

export default App;

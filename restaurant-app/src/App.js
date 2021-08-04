// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home';
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantDetail from './components/RestaurantDetail';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantUpdate from './components/RestaurantUpdate';
import RestaurantsList from './components/RestaurantsList';
import Login from './components/Login';
import Logout from './components/Logout';
import Protected from './components/Protected';

function App() {
  return (
    <div className="App">
      <Router>

        <Route path="/login"
          render={props => (<Login {...props} />)}>
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>

        <Protected exact path="/list" component={RestaurantsList} />
        <Protected exact path="/create" component={RestaurantCreate} />
        <Protected exact path="/search" component={RestaurantSearch} />
        <Protected exact path="/detail" component={RestaurantDetail} />
        <Protected exact path="/update:id" component={RestaurantUpdate} />
        <Protected exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;

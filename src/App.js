import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './Hooks/UseAuthProvider';
import Home from './Page Components/Home/Main/Home';
import Footer from './Page Components/Shared/Footer/Footer';
import ErrorPage from './Page Components/NotFound/ErrorPage';
import Login from './Page Components/Login/Login';
import About from './Page Components/About/About';
import Explore from './Page Components/Explore/Explore';
import Register from './Page Components/Login/Register';
import PrivateRoute from './Page Components/Shared/PrivateRoute/PrivateRoute';
import Dashboard from './Page Components/Dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <div className='routes'>
            <Switch>
              {/* Normal Routes */}
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/explore">
                <Explore />
              </Route>

              {/* Login or Register */}
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>

              {/* Private Routes */}
              <PrivateRoute path="/about">
                <About />
              </PrivateRoute>

              <PrivateRoute path="/dashboard">
                <Dashboard />
              </PrivateRoute>

              {/* Error Page */}
              <Route path="*">
                <ErrorPage />
              </Route>

            </Switch>
          </div>
          <div className="footer">
            <Footer></Footer>
          </div>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

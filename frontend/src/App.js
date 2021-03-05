import logo from './logo.svg';
import './App.css';
import Func from './components/Fun';
import Cla from './components/Cla'
import Forms from './components/from'
import Login from './components/login'
// import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Link,Route, Switch} from 'react-router-dom'
import Quiz from './components/quiz';
import Categorys from './components/Categorys';
import {isAuthenticated} from './components/Categorys';
import PrivateRoute from "./../src/components/auth/PrivateRoute"
import Dash from "./../src/components/auth/AdminRoute"


function App() {
  return (
    
    <div className="container">
      <Router>
        <Switch>
    <Route path='/' exact component={Login}  />
    <PrivateRoute path='/categorys' exact component={Categorys}  />
    <PrivateRoute path="/quiz/:id"    component={Quiz} />
    <Route path="/register"    component={Forms}/>
    <Dash path="/dashboard"    component={dashhhh}/>

    </Switch>
    </Router>
  
    </div>



      // <Quiz />
  ) 
}

export default App;

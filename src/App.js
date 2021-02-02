import logo from './logo.svg';
import './App.css';
import RegisterFrom from './components/RegistrationView/registerFrom';
import { Switch, Route, Redirect,BrowserRouter as Router } from "react-router-dom";
import LoginInfoForm from './components/LoginView/logininfoform';
import Dashboard from './components/DashboardView/dashboard';
function App() {
  return (
    <div>
      <Router>
      <Switch>

        <Route exact={true} path="/" component={LoginInfoForm}/>
        <Route exact path="/signup" component={RegisterFrom}/>
        <Route
          exact
          path="/dashboard"
          render={() =>{
            console.log("This one is called...")
            localStorage.getItem('isLogged')=='true' ? (
              <Dashboard />
            ) : (
              <Redirect to="/" />
            )
          }
          }
        />
        <Route
          path="/dashboard/:email"
          render={(props) =>{
            console.log("PROPS:",props.match.params.email)
            const data=JSON.parse(localStorage.getItem(props.match.params.email));
            if(data && data['isLogged']===true){
              return <Dashboard {...props} />
            }
            return <Redirect to="/" />


            // localStorage.getItem(props.match.params.email)=='true' ? (
            //   <Dashboard />
            // ) : (
            //   <Redirect to="/" />
            // )
          }
        }
        />

      </Switch>
      </Router>
    </div>
  );
}

export default App;

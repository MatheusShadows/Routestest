import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/registro";

export default function Routes(){
    return(
    <Router>
        <Switch>
            <Route exact path='/' component={Login}>
                <Login/>
            </Route>  
            <Route path='/registro' component={Register}>
                <Register/>
            </Route>           
        </Switch>
    </Router>
    )
}
import React from "react";
import LoginCheck from './jscomponent/loginCheckin';
import HeaderNav from './jscomponent/navHeader';
import ChartInfo from './jscomponent/chartInfo';
import ProfileUser from './jscomponent/profileUser';
import AllMenu from './jscomponent/allMenu';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
    return(
        <Router>
            <div className="container-main">
                <HeaderNav />
                <LoginCheck />
                <Switch>
                    <Route path="/" exact component={AllMenu} />
                    <Route path="/ChartInfo" component={ChartInfo} />
                    <Route path="/ProfileUser" component={ProfileUser} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;